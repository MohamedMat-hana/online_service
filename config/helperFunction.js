import { ToastAndroid } from "react-native";
export const WelcomeMasssage=()=>{
    return ToastAndroid.show(
        "الاسراء للمفروشات ترحب بك",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,

    )
}
export const removeMasssage=()=>{
    return ToastAndroid.show(
        "تم الحذف بنجاح",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,

    )
}

 

