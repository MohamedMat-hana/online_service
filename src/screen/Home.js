import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
  Dimensions,
  Modal,
  ImageBackground,
  BackHandler,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
const {width, height} = Dimensions.get('window');
import AsyncStorage from '@react-native-async-storage/async-storage';
import Entypo from 'react-native-vector-icons/Entypo';
import {COLORS, FONTS} from '../customs/Constant.js';

const Home = ({navigation}) => {
  const [model_alert, setmodel_alert] = useState(false);

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={'#141E46'} />

      <Animatable.View
        // animation="pulse"
        duration={1000}
        style={{flex: 1, backgroundColor: '#141E46'}}>
        <View style={styles.headerbar}>
          <Text style={styles.textheader}>زهرة الشرقية</Text>
        </View>

        <ScrollView>
          <View
            style={{
              // flexDirection: 'row',
              alignSelf: 'flex-start',
              marginLeft: 10,
              marginVertical: 15,
              alignItems: 'flex-start',
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 25,
                fontFamily: 'Generator Black',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 25,
                  fontFamily: 'ReemKufiFun-Bold',
                }}>
                مرحبًا بك{'\t'}
              </Text>
              في تطبيق زهرة الشرقية!
            </Text>
            <View
              style={{
                marginVertical: 22,
                backgroundColor: '#141E46',
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              <Image
                source={require('../Img/th.jpg')}
                style={{
                  alignSelf: 'center',
                  borderRadius: 25,
                  width: width / 1.06,
                  height: height / 3,
                }}
                resizeMode={'cover'}
              />
            </View>

            <View style={{width: '90%'}}>
              <Text
                style={{
                  fontSize: 20,
                  color: '#fff',
                  alignSelf: 'center',
                  fontFamily: 'Generator Black',
                }}>
                نحن هنا لنساعدك في نقل عفشك بكل سهولة وأمان. نوفر لك فريقًا
                محترفًا وخدمات تغليف متقدمة مع نقل سريع وآمن. فقط اختر خدمتك،
                ونحن سنتولى الباقي.
              </Text>

              <Text
                style={{
                  fontSize: 20,
                  color: '#fff',
                  alignSelf: 'center',
                  fontFamily: 'Generator Black',
                  marginLeft: -10,
                }}>
                {'\n'}
                ابدأ الآن بنقل أثاثك بثقة مع زهرة الشرقية!
              </Text>
            </View>
          </View>
        </ScrollView>
      </Animatable.View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={model_alert}
        onRequestClose={() => {
          setmodel_alert(false);
        }}>
        <View style={{flex: 1}}>
          <View
            style={{
              height: height,
              width: width,
              alignContent: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                width: '80%',
                height: height / 3.5,
                backgroundColor: COLORS.gray,
                borderRadius: 20,
                elevation: 5,
                paddingVertical: 10,
                // marginBottom: 10,
              }}>
              <TouchableOpacity
                style={{
                  // width: '20%',
                  alignSelf: 'flex-start',
                  padding: 5,
                  backgroundColor: COLORS.main,
                  borderRadius: 10,
                  elevation: 3,
                  marginBottom: 5,
                  // flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 10,
                }}
                onPress={() => {
                  setmodel_alert(false);
                }}>
                <Entypo name="cross" size={22} color={COLORS.white} />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: '50%',
                  alignSelf: 'center',
                  padding: 10,
                  backgroundColor: COLORS.main,
                  borderRadius: 10,
                  elevation: 3,
                  marginBottom: 5,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 10,
                }}
                onPress={() => {
                  setmodel_alert(false);
                  this.Log_Out();
                }}>
                <Text
                  style={{
                    fontFamily: 'Mada-SemiBold',
                    textAlign: 'center',
                    color: COLORS.white,
                    fontSize: FONTS.h1,
                  }}>
                  تسجيل خروج
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  headerbar: {
    backgroundColor: '#141E46',
    height: height / 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textheader: {
    fontSize: FONTS.h1,
    color: '#fff',
    alignSelf: 'center',
    fontFamily: 'Generator Black',
    // marginLeft: "50%",
  },
});

export default Home;
