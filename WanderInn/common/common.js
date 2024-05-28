import { auth } from "@/firebaseConfig"

export const getToken = async () => {
    if (!auth.currentUser) {
        return null;
    }

    try {
        const token = await auth.currentUser.getIdToken();
        // console.log('Token ==> ', token);
        return token;
    } catch (error) {
        console.error('Error getting token:', error);
        return null;
    }
}
export const  formatToOneDecimalPlace=(num)=> {
    return parseFloat(num?.toFixed(1));
}