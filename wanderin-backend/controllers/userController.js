const userSchema = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt_token = require('jsonwebtoken');
const helper = require('../helper/index');
const { generateToken, sendEmailVerifyEmail, sendResetPasswordEmail } = require('../common/common');
const fs = require('fs');

exports.register = async (req, res) => {
    try {
        let payload = req.body;
        let email = await userSchema.findOne({ email: payload.email });
        if (email) {
            return res.status(200).json(helper.response(200, false, "Email Already Exist!"));
        }
        let hashPassword = await bcrypt.hash(payload.password, 10);

        const newUser = payload.name ? {
            email: payload.email,
            password: hashPassword,
            name: payload.name,
        } : {
            email: payload.email,
            password: hashPassword,
        }

        let userResult = new userSchema(newUser);
        let user = await userResult.save();
        if (user) {
            return res.status(200).json(user);
        }

    } catch (error) {
        return res.status(500).json(helper.response(500, false, "something went wrong!"));
    }
}

exports.login = async (req, res) => {
    try {
        let payload = req.body;
        // console.log('payload - ', payload);
        let user = await userSchema.findOne({ email: payload.email });
        // console.log('user - ', user);
        if (!user) {
            return res.status(400).json(helper.response(400, false, "User Not Found!"));
        }

        if (!user.isEmailVerified && user.isAdmin === 0) {
            return res.status(400).json(helper.response(400, false, "Please verify your email!", { email: user.email, isEmailVerified: user.isEmailVerified }));
        }

        let comparePassword = await bcrypt.compare(payload.password, user.password);
        if (!comparePassword) {
            return res.status(200).json(helper.response(400, false, "Invalid Password!"));
        }

        // console.log('Expires in - ', process.env.JWT_EXPIRE);

        const token = jwt_token.sign({ userId: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRE,
        });

        // console.log('Token - ', token);

        // Decode the token
        const decodedToken = jwt_token.decode(token);

        // Log the expiration time
        // console.log('Token expires at - ', new Date(decodedToken.exp * 1000));

        let userResult = await userSchema.findById(user._id)
        return res.status(200).json(helper.response(200, true, "Login Successfully!", { user: userResult, token: token, tokenExpiresAt: decodedToken.exp }));
    } catch (error) {
        return res.status(500).json(helper.response(500, false, "something went wrong!"));
    }
}

exports.profileUpload = async (req, res) => {
    try {
        let payload = req.body;
        let userId = req.user.userId;
        let userData = await userSchema.findOne({ _id: userId });
        if (userData) {
            if (payload.numberOfNotifications != undefined) {
                userData.numberOfNotification = payload.numberOfNotifications;
            }
            if (payload.image) {
                userData.image = payload.image;
            }

            if (payload.name) {
                userData.name = payload.name;
            }
            if (payload.email) {
                userData.email = payload.email;
            }
            let userResult = await userData.save();
            return res.status(200).json(helper.response(200, true, "Update Successfully!", userResult));
        } else {
            return res.status(200).json(helper.response(200, false, "user not found!"));
        }
    } catch (error) {
        return res.status(500).json(helper.response(500, false, "something went wrong!"));
    }
}

// Get all students
exports.getAllStudents = async (req, res) => {
    try {
        let students = await userSchema.find({ isAdmin: false });
        if (students) {
            return res.status(200).json(helper.response(200, true, "Get All Students Successfully!", students));
        } else {
            return res.status(200).json(helper.response(200, false, "No Students Found!"));
        }
    } catch (error) {
        return res.status(500).json(helper.response(500, false, "something went wrong!"));
    }
}

// Register a student
exports.registerStudent = async (req, res) => {
    try {
        let payload = req.body;
        let email = await userSchema.findOne({ email: payload.email });
        if (email) {
            return res.status(200).json(helper.response(200, false, "Email Already Exist!"));
        }
        let hashPassword = await bcrypt.hash(payload.password, 10);
        let userResult = new userSchema({
            email: payload.email,
            password: hashPassword,
            name: payload.name ? payload.name : null,
        });
        let user = await userResult.save();
        if (user) {
            return res.status(200).json(helper.response(200, true, "Student Registered Successfully!", user));
        }
    } catch (error) {
        return res.status(500).json(helper.response(500, false, "something went wrong!"));
    }
}

// Update user profile
exports.profileUpdate = async (req, res) => {
    try {
        let payload = req.body;
        let userId = req.user.userId;
        let userData = await userSchema.findOne({ _id: userId });
        if (userData) {
            if (payload.name) {
                userData.name = payload.name;
            }
            if (payload.email) {
                userData.email = payload.email;
            }
            if (payload.password) {
                let hashPassword = await bcrypt.hash(payload.password, 10);
                userData.password = hashPassword;
            }
            let userResult = await userData.save();
            return res.status(200).json(helper.response(200, true, "Update Successfully!", userResult));
        } else {
            return res.status(200).json(helper.response(200, false, "user not found!"));
        }
    } catch (error) {
        return res.status(500).json(helper.response(500, false, "something went wrong!"));
    }
}

// Update a student
exports.updateStudent = async (req, res) => {
    // console.log('File Path - ', req.body, req.params.studentId, req.user);
    try {
        let payload = req.body;
        let studentId = req.params.studentId;

        if (req.user.userId != studentId && req.user.isAdmin === 0) {
            return res.status(200).json(helper.response(200, false, "You are not authorized to update this student!"));
        }

        let studentData = await userSchema.findOne({ _id: studentId });
        if (studentData) {
            if (req.filePath) {
                let imagePath = req.filePath;
                console.log('Image Path - ', imagePath);
                if (studentData.image) {
                    // Delete the old image
                    let oldImagePath = studentData.image;
                    let oldImage = oldImagePath.split('/').pop();
                    let filePath = './uploads/images/' + oldImage;
                    if (fs.existsSync(filePath)) {
                        fs.unlinkSync(filePath);
                    }
                }
                studentData.image = imagePath;
            }

            if (payload.name) {
                studentData.name = payload.name;
            }

            if (payload.email && req.user.isAdmin === 1) {

                let emailExist = await userSchema.findOne({ email: payload.email });

                if (emailExist) {
                    return res.status(200).json(helper.response(200, false, "Email already registered!"));
                }

                studentData.email = payload.email;
                studentData.isEmailVerified = false;
            }

            if (payload.password) {
                let hashPassword = await bcrypt.hash(payload.password, 10);
                studentData.password = hashPassword;
            }

            let studentResult = await studentData.save();

            return res.status(200).json(helper.response(200, true, "Update Successfully!", studentResult));
        } else {
            return res.status(200).json(helper.response(200, false, "Student not found!"));
        }
    } catch (error) {
        return res.status(500).json(helper.response(500, false, "something went wrong!", error.message));
    }
}

// Delete a student
exports.deleteStudent = async (req, res) => {
    try {
        let studentId = req.params.studentId;
        let studentData = await userSchema.findOne({ _id: studentId });
        if (studentData) {
            if (studentData.image) {
                // Delete the old image
                let oldImagePath = studentData.image;
                let oldImage = oldImagePath.split('/').pop();
                let filePath = './uploads/images/' + oldImage;
                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath);
                }
            }

            let studentResult = await userSchema.deleteOne({ _id: studentId });
            if (studentResult) {
                return res.status(200).json(helper.response(200, true, "Student Deleted Successfully!"));
            }
        } else {
            return res.status(200).json(helper.response(200, false, "Student not found!"));
        }
    } catch (error) {
        return res.status(500).json(helper.response(500, false, "something went wrong!"));
    }
}

// Verify Email Request
exports.verifyEmailRequest = async (req, res) => {
    try {
        let { email } = req.body;

        // console.log('Common - ', common);

        if (!email) {
            return res.status(400).json(helper.response(400, false, "Email is required!"));
        }

        let user = await userSchema.findOne({ email });

        if (!user) {
            return res.status(400).json(helper.response(400, false, "User not found!"));
        }

        if (user && user.isEmailVerified) {
            return res.status(400).json(helper.response(400, false, "Email already registered!"));
        }

        // console.log("User ==> ", user);

        const name = user.name ? user.name : "User";

        const resetToken = await generateToken();

        // console.log("Reset Token ==> ", resetToken);
        const sendVerificationEmail = await sendEmailVerifyEmail({ email, name, resetToken });

        console.log("Send Verification Email ==> ", sendVerificationEmail);


        if (sendVerificationEmail) {
            return res.status(200).json(helper.response(200, true, "Email sent successfully!"));
        } else {
            return res.status(400).json(helper.response(400, false, "Error sending email!"));
        }

    } catch (error) {
        return res.status(500).json(helper.response(500, false, "Something went wrong!"));
    }
}

// Verify Email
exports.verifyEmail = async (req, res) => {
    try {
        let { token } = req.body;

        if (!token) {
            return res.status(400).json(helper.response(400, false, "Token is required!"));
        }

        let decodedToken;

        try {
            decodedToken = await jwt_token.verify(token, process.env.JWT_SECRET);
            // ...
        } catch (error) {
            if (error instanceof jwt_token.TokenExpiredError) {
                return res.status(401).json(helper.response(401, false, "Token has expired!"));
            } else if (error instanceof jwt_token.JsonWebTokenError) {
                return res.status(401).json(helper.response(401, false, "Invalid token!"));
            } else {
                return res.status(500).json(helper.response(500, false, "Something went wrong!"));
            }
        }

        console.log("Decoded Token ==> ", decodedToken);

        let user = await userSchema.findOne({ email: decodedToken.email });

        if (!user) {
            return res.status(400).json(helper.response(400, false, "User not found!"));
        }

        user.isEmailVerified = true;

        let userResult = await user.save();

        return res.status(200).json(helper.response(200, true, "Email verified successfully!", userResult));

    } catch (error) {
        return res.status(500).json(helper.response(500, false, "Something went wrong!"));
    }
}

// Update Email Request
exports.updateEmailRequest = async (req, res) => {
    try {
        let { email } = req.body;

        if (!email) {
            return res.status(400).json(helper.response(400, false, "Email is required!"));
        }

        let user = await userSchema.findById(req.user.userId);

        if (!user) {
            return res.status(400).json(helper.response(400, false, "User not found!"));
        }

        let emailExist = await userSchema.findOne({ email });

        if (emailExist) {
            return res.status(400).json(helper.response(400, false, "Email already registered!"));
        }

        if (req.user.userId != user._id && req.user.isAdmin === 0) {
            return res.status(400).json(helper.response(400, false, "You are not authorized to update this email!"));
        }

        user.email = email;

        user.isEmailVerified = false;

        let userResult = await user.save();

        const name = user.name ? user.name : "User";

        const resetToken = await generateToken();

        const sendVerificationEmail = await sendEmailVerifyEmail({ email, name, resetToken });

        if (sendVerificationEmail) {
            return res.status(200).json(helper.response(200, true, "Email sent successfully!", userResult));
        } else {
            return res.status(400).json(helper.response(400, false, "Error sending email!"));
        }

    } catch (error) {
        return res.status(500).json(helper.response(500, false, "Something went wrong!"));
    }
}

// Get a student
exports.getStudent = async (req, res) => {
    try {
        let studentId = req.params.studentId;

        console.log('Student Id - ', studentId);

        console.log('User Id - ', req.user.userId);

        if (req.user.userId != studentId && req.user.isAdmin === 0) {
            return res.status(200).json(helper.response(200, false, "You are not authorized to get this student!"));
        }

        let studentData = await userSchema.findOne({ _id: studentId });
        if (studentData) {
            return res.status(200).json(helper.response(200, true, "Get Student Successfully!", studentData));
        } else {
            return res.status(200).json(helper.response(200, false, "Student not found!"));
        }
    } catch (error) {
        return res.status(500).json(helper.response(500, false, "something went wrong!"));
    }
}

// Reset Password Request
exports.resetPasswordRequest = async (req, res) => {
    try {
        let { email } = req.body;

        if (!email) {
            return res.status(400).json(helper.response(400, false, "Email is required!"));
        }

        let user = await userSchema.findOne({ email });

        if (!user) {
            return res.status(400).json(helper.response(400, false, "User not found!"));
        }

        const name = user.name ? user.name : "User";

        const resetToken = await generateToken();

        const sendPasswordResetEmail = await sendResetPasswordEmail({ email, name, resetToken });

        if (sendPasswordResetEmail) {
            return res.status(200).json(helper.response(200, true, "Email sent successfully!"));
        } else {
            return res.status(400).json(helper.response(400, false, "Error sending email!"));
        }

    } catch (error) {
        return res.status(500).json(helper.response(500, false, "Something went wrong!"));
    }
}

// Reset Password
exports.resetPassword = async (req, res) => {
    try {
        let { token, password } = req.body;

        if (!token) {
            return res.status(400).json(helper.response(400, false, "Token is required!"));
        }

        if (!password) {
            return res.status(400).json(helper.response(400, false, "Password is required!"));
        }

        let decodedToken;

        try {
            decodedToken = await jwt_token.verify(token, process.env.JWT_SECRET);
            // ...
        } catch (error) {
            if (error instanceof jwt_token.TokenExpiredError) {
                return res.status(401).json(helper.response(401, false, "Token has expired!"));
            } else if (error instanceof jwt_token.JsonWebTokenError) {
                return res.status(401).json(helper.response(401, false, "Invalid token!"));
            } else {
                return res.status(500).json(helper.response(500, false, "Something went wrong!"));
            }
        }

        let user = await userSchema.findOne({ email: decodedToken.email });

        if (!user) {
            return res.status(400).json(helper.response(400, false, "User not found!"));
        }

        let hashPassword = await bcrypt.hash(password, 10);

        user.password = hashPassword;

        let userResult = await user.save();

        return res.status(200).json(helper.response(200, true, "Password reset successfully!", userResult));

    } catch (error) {
        return res.status(500).json(helper.response(500, false, "Something went wrong!"));
    }
}