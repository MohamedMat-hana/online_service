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
  ImageBackground,
  ScrollView,
} from 'react-native';
import {WebView} from 'react-native-webview';
import * as Animatable from 'react-native-animatable';
import {COLORS, RADIUS, MARGIN, FONTS, FONTSFAMILY} from '../customs/Constant';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import AppIntroSlider from 'react-native-app-intro-slider';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const {width, height} = Dimensions.get('window');

export default class Elrab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        image: [],
        locations: [],
      },
    };
  }
  componentDidMount() {
    let data = this.props.route.params.name;
    this.setState({item: data});
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.backAction,
    );
  }
  backAction = () => {
    this.props.navigation.goBack();
    return true;
  };

  componentWillUnmount() {
    this.backHandler.remove();
  }

  render() {
    return (
      <>
        <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.main} />
        <Animatable.View
          animation="fadeInUpBig"
          duration={500}
          style={{backgroundColor: COLORS.main, flex: 1}}>
          <View
            style={{
              marginRight: MARGIN.xsMargin,
              flexDirection: 'row-reverse',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack();
              }}
              style={{width: 50}}>
              <AntDesign name="arrowleft" size={30} color={COLORS.gray} />
            </TouchableOpacity>
            <Text
              style={{
                color: COLORS.white,
                fontSize: FONTS.h1,
                fontFamily: FONTSFAMILY.Generator_Black,
                alignSelf: 'center',
              }}>
              {this.state.item.title}
            </Text>
            <TouchableOpacity style={{width: 50}}></TouchableOpacity>
          </View>
          <ScrollView>
            <View
              style={{
                backgroundColor: COLORS.main,
                marginBottom: 30,
                alignItems: 'center',
                // justifyContent: 'center',
                borderRadius: 5,
              }}>
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: FONTS.h3,
                  fontFamily: FONTSFAMILY.Generator_Black,
                  marginHorizontal: 10,
                }}>
                {this.state.item.description}
              </Text>

              {this.state.item.locations &&
              this.state.item.locations.length > 0 ? (
                <>
                  <Text
                    style={{
                      color: COLORS.white,
                      fontSize: FONTS.h3,
                      fontFamily: FONTSFAMILY.Generator_Black,
                      marginHorizontal: 10,
                      alignSelf: 'flex-start',
                    }}>
                    نستطيع الوصول اليك في
                  </Text>
                  {this.state.item.locations.map((item, index) =>
                    item.name ? (
                      <View
                        key={index}
                        style={{
                          flexDirection: 'row',
                          alignSelf: 'flex-start',
                          marginHorizontal: 10,
                        }}>
                        <Entypo
                          name="location-pin"
                          size={30}
                          color={COLORS.red}
                        />
                        <Text
                          style={{
                            color: COLORS.white,
                            fontSize: FONTS.h3,
                            fontFamily: FONTSFAMILY.Generator_Black,
                            marginHorizontal: 10,
                          }}>
                          {item.name}
                        </Text>
                      </View>
                    ) : null,
                  )}
                </>
              ) : null}
              {this.state.item.image.map((item, index) =>
                item.avatar == null ? (
                  <></>
                ) : (
                  <Image
                    key={index}
                    source={item.avatar}
                    resizeMode="cover"
                    style={{
                      height: height / 2.5,
                      width: width / 1.05,
                      borderRadius: RADIUS.lgRadius,
                      alignSelf: 'center',
                      justifyContent: 'center',
                      marginBottom: 10,
                    }}
                  />
                ),
              )}

              <Text
                style={{
                  color: '#fff',
                  fontSize: 25,
                  fontFamily: FONTSFAMILY.Generator_Black,
                  margin: 10,
                }}>
                {this.state.item.description1}
              </Text>
              <View
                style={{
                  height: 100,
                }}></View>
            </View>
          </ScrollView>
        </Animatable.View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#15133C20',
    // alignItems: 'center',
  },
  first: {
    width: width,
    height: height,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#000',
  },
  Button: {
    width: width / 2.4,
    height: height / 5,
    borderRadius: 7,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  image: {
    resizeMode: 'contain',
    width: 150,
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    // marginTop:-10
  },
  Text: {
    color: 'white',
    fontSize: 18,
    alignSelf: 'center',
    fontFamily: FONTSFAMILY.Generator_Black,
  },
});
