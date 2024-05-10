import { Dimensions } from "react-native";
import Toast from "react-native-toast-message";

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

export const showToast = (type, message) => {

    Toast.show({
        type: type,
        text1: message,
        position: 'top',
    });
};
