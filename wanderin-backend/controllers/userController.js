const userSchema = require('../models/userModel');
const bcrypt = require('bcrypt');
const admin = require('firebase-admin');
const jwt_token = require('jsonwebtoken');
const helper = require('../helper/index');
const fs = require('fs');

const firebase_API_KEY = process.env.FIREBASE_API_KEY;

exports.register = async (req, res) => {
    const { name, email, password, phone, image } = req.body;
    try {

        if (!email || !password) {
            return res.status(400).json(helper.response(400, false, "Email and Password are required!"));
        }

        const userRecord = await admin.auth().getUserByEmail(email);

        console.log("User Record ==> ", userRecord);

        return res.status(409).json(helper.response(409, false, "Email Already Exists!"));

    } catch (error) {
        if (error.code === 'auth/user-not-found') {
            // User not found
            const newUser = await admin.auth().createUser({
                email,
                password,
            });

            console.log("New User ==> ", newUser);

            let user = await userSchema.findOne({ email });

            if (!user) {

                const userResult = new userSchema({
                    name: name ? name : null,
                    email,
                    phone: phone ? phone : null,
                    image: image ? image : null,
                    isAdmin: false,
                    isEmailVerified: false,
                    isPhoneVerified: false,
                });

                user = await userResult.save();
            }

            return res.status(201).json(helper.response(201, true, "User created successfully!", user));
        } else {
            // Some other error occurred.
            console.error('Error fetching user data:', error);

            return res.status(500).json(helper.response(500, false, "something went wrong in checking user!"));
        }
    }
}

exports.login = async (req, res) => {
    try {
        const { email } = req.body;

        const userRecord = await admin.auth().getUserByEmail(email);

        let user = await userSchema.findOne({ email });

        if (!user) {
            user = new userSchema({
                name: userRecord.displayName ? userRecord.displayName : null,
                email: userRecord.email,
                phone: userRecord.phoneNumber ? userRecord.phoneNumber : null,
                image: userRecord.photoURL ? userRecord.photoURL : null,
                isAdmin: false,
                isEmailVerified: userRecord.emailVerified,
                isPhoneVerified: userRecord.phoneNumber ? true : false,
            });
        } else {
            user.isEmailVerified = userRecord.emailVerified;
            user.isPhoneVerified = userRecord.phoneNumber ? true : false;
        }

        // console.log("User Record ==> ", userRecord);

        user = await user.save();

        return res.status(200).json(helper.response(200, true, "Logged in Successfully!", user));
    } catch (error) {
        if (error.code === 'auth/user-not-found') {
            // User not found
            return res.status(400).json(helper.response(400, false, "User not found!"));
        } else {
            // Some other error occurred.
            console.error('Error fetching user data:', error);

            return res.status(500).json(helper.response(500, false, "something went wrong in checking user!"));
        }
    }
}

exports.generateIdToken = async (req, res) => {
    try {
        const { email, password } = req.body;

        // console.log('API Key ==> ', firebase_API_KEY);

        // Sign in the user using the Firebase Authentication REST API
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebase_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true,
            }),
        });

        const data = await response.json();

        // console.log('Response ==> ', data);

        const idToken = data.idToken;

        // console.log('Id token:', idToken);

        return res.status(200).json(helper.response(200, true, "Id token generated successfully!", { idToken }));

    } catch (error) {
        console.error('Error generating id token:', error);

        return res.status(500).json(helper.response(500, false, "something went wrong in generating id token!"));
    }
}

exports.getUser = async (req, res) => {
    try {
        const { email } = req.currentUser;

        let user = await userSchema.findOne({ email });

        if (!user) {
            return res.status(400).json(helper.response(400, false, "User not found!"));
        }

        return res.status(200).json(helper.response(200, true, "User found!", user));

    } catch (error) {
        console.error('Error fetching user:', error);

        return res.status(500).json(helper.response(500, false, "something went wrong in fetching user!"));
    }
}


exports.updateUser = async (req, res) => {
    try {
        const { name, email, phone, image } = req.body;

        let user = await userSchema.findOne({ email });

        if (!user) {
            return res.status(400).json(helper.response(400, false, "User not found!"));
        }

        user.name = name ? name : user.name;
        user.phone = phone ? phone : user.phone;
        user.image = image ? image : user.image;

        user = await user.save();

        return res.status(200).json(helper.response(200, true, "User updated successfully!", user));

    } catch (error) {
        console.error('Error updating user:', error);

        return res.status(500).json(helper.response(500, false, "something went wrong in updating user!"));
    }
}

exports.forgotPassword = async (req, res) => {
    try {
        const { email } = req.currentUser;

        // Send password reset email using Firebase Admin SDK
        const passwordResetEmailLink = await admin.auth().generatePasswordResetLink(email);

        console.log('Password reset email status:', passwordResetEmailLink);

        // Check passwordResetEmailLink for success (optional)
        if (passwordResetEmailLink) {
            return res.status(200).json(helper.response(200, true, "Password reset email sent successfully!", { passwordResetEmailLink }));
        } else {
            res.status(500).json({ message: 'Error sending reset email' });
        }

    } catch (error) {

        console.error('Error sending password reset link:', error);

        return res.status(500).json(helper.response(500, false, "something went wrong in sending password reset link!"));
    }
}