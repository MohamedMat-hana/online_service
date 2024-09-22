import React, { useState, useCallback, useEffect } from 'react';
import {
    View, Text, StyleSheet, StatusBar, Dimensions,
    TouchableOpacity,
} from 'react-native';
import LottieView from 'lottie-react-native';
const { width, height } = Dimensions.get('window');
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS, PADDING, MARGIN, FONTS, RADIUS, ICONS, FONTSFAMILY } from '../customs';
import { useNavigation } from '@react-navigation/native';
import { BackHandler } from 'react-native';

const Choose_page = ({ navigation }) => {
    const backAction = useCallback(() => {
        // this.props.navigation.navigate('HomeStack')

        BackHandler.exitApp();
        return true;
    }, []);

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

        return () => {
            backHandler.remove();
        };
    }, [backAction]);


    const [map, setMap] = useState([
        {
            name: "مفروشات كبيرة"
        },
        {
            name: "مفروشات صغيرة"
        },
        {
            name: "فوط كبيرة"
        },
        {
            name: "فوط صغيرة"
        }
    ]);
    //  title: "مفروشات صغيرة",
    choosenIndex = (index) => {
        if (index == 0) {
            navigation.navigate('AdminPage')
            store_Count()

        } else if (index == 1) {
            navigation.navigate('AdminPageSmallMafro')

            store_Count()
        } else if (index == 2) {
            navigation.navigate('AdminPageBigFoat')

            store_Count()
        } else if (index == 3) {
            navigation.navigate('AdminPageSmallFoat')

            store_Count()
        }
    }
    const store_Count = async () => {
        await AsyncStorage.setItem("login", '2')
        console.log("login=2");
    }
    return (
        <>
            <StatusBar backgroundColor={COLORS.main} barStyle="light-content" />
            <View style={styles.container}>
                <TouchableOpacity>
                    <Text style={styles.headertext1}>اختر اماكن التعديل</Text>
                </TouchableOpacity>
                {map.map((item, index) => (

                    <TouchableOpacity

                        onPress={() => {
                            choosenIndex(index)
                        }}
                        style={styles.first}>

                        <Text style={styles.text}>{item.name}</Text>

                    </TouchableOpacity>
                ))}


            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: 'center',
        backgroundColor: COLORS.main, // Adjust the background color
    },
    headertext1: {
        color: COLORS.white,
        fontSize: 40,
        alignSelf: 'center',
        fontFamily: FONTSFAMILY.Generator_Black,

    },

    first: {
        width: width / 1.3,
        height: height / 7,
        margin: MARGIN.xsMargin,
        backgroundColor: COLORS.facebook,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: RADIUS.xlRadius
    },
    text: {
        color: COLORS.white,
        fontSize: FONTS.h1,
        alignSelf: 'center',
        fontFamily: FONTSFAMILY.Main,

    },
});

export default Choose_page;
