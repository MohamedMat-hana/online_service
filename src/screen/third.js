import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    StatusBar,
    ScrollView,
    Dimensions,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppIntroSlider from 'react-native-app-intro-slider';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WebView } from 'react-native-webview';

const { width, height } = Dimensions.get('window');

function Third({ navigation }) {

    return (
        <>
        <StatusBar
        barStyle={'dark-content'}
        backgroundColor={"#15133C20"}
    />

<WebView source={{ uri: 'https://www.facebook.com/profile.php?id=100090134973009&mibextid=LQQJ4d' }} style={{ flex: 1 }} />
        </>  
          );
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: "#15133C20",
        // alignItems: 'center',
    },

});
export default Third;
