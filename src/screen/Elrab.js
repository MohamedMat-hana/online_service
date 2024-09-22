import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    StatusBar,
    BackHandler,
    Dimensions,
    Modal,
    ImageBackground
} from 'react-native';
import { WebView } from 'react-native-webview';
import * as Animatable from 'react-native-animatable';
import { COLORS,RADIUS,MARGIN,FONTS } from '../customs/Constant';

import AntDesign from 'react-native-vector-icons/AntDesign';
import AppIntroSlider from 'react-native-app-intro-slider';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { width, height } = Dimensions.get('window');

// function First({ navigation }) {
export default class Elrab extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            item: {},


        }
    }
    componentDidMount() {
        let data = this.props.route.params.name
        // alert(JSON.stringify(data))
        this.setState({ item: data })
        this.backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            this.backAction
        );

    }
    backAction = () => {

        this.props.navigation.goBack()
        return true;
    };

    componentWillUnmount() {
        this.backHandler.remove();
    }





    render() {
        return (
            <>

                <StatusBar barStyle={'dark-content'} backgroundColor={"#FFF5E050"} />

                <Animatable.View
                    animation="fadeInUpBig"
                    duration={4000}
                >
                    <TouchableOpacity
                        style={{
                            marginRight: MARGIN.xsMargin
                        }}
                        onPress={() => {
                            this.props.navigation.goBack();
                        }}

                    >
                        <AntDesign name='arrowleft' size={30} color={COLORS.main} />
                    </TouchableOpacity>
                    <View

                        style={{
                            // marginTop:-30,
                            height: height,
                            backgroundColor: "#FFF5E050",
                            alignItems: 'center',
                            justifyContent: "center",
                            borderRadius: 5

                        }}>
                        <ImageBackground source={{uri:this.state.item.avatar}}
                            resizeMode='contain'
                            style={{
                                height: height / 2.5,
                                width: width / 1,
                                alignSelf: "center",
                                justifyContent: "center"
                            }}>






                        </ImageBackground>
                        <Animatable.View
                            animation='fadeIn'
                            style={{
                                alignItems: "center",
                                justifyContent: 'center',
                                alignSelf: "center",
                                padding: 10,
                                backgroundColor: COLORS.main,
                                borderRadius: 10,
                                marginTop: 10

                            }}>


                            <Text style={[styles.Text, { color: "#fff" }]}>
                                {this.state.item.name}</Text>

                        </Animatable.View>


                    </View>
                </Animatable.View>
            </>
        )
    }

}
const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: "#15133C20",
        // alignItems: 'center',
    },
    first: {
        width: width,
        height: height,
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: "wrap",
        alignItems: 'center',
        alignSelf: "center",
        backgroundColor: "#000",

    },
    Button: {
        width: width / 2.4,
        height: height / 5,
        borderRadius: 7,
        margin: 10,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "red",

    },
    image: {
        resizeMode: 'contain',
        width: 150,
        height: "50%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10
        // marginTop:-10
    },
    Text: {
        color: "white",
        fontSize: 18,
        alignSelf: "center",
        fontFamily: "Generator Black"

    }
});
