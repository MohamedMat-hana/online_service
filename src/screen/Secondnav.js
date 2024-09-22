import React, { useState } from "react";
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
  BackHandler
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import First from './First.js'
import Elrab from './Elrab.js'
import Bigmafro from './Bigmafro.js'
const { width, height } = Dimensions.get('window');
import AsyncStorage from '@react-native-async-storage/async-storage';
import Entypo from 'react-native-vector-icons/Entypo'


const Drink = ({ navigation }) => {
  const store_Count = async () => {
    await AsyncStorage.setItem("login", '1')
    console.log("login=1");
}
  Log_Out = async () => {
    await AsyncStorage.setItem("login", "0")
    navigation.navigate("Login")
    console.log("login=0");

  }

  const [model_alert, setmodel_alert] = useState(false);

  const [activeTab, setActiveTab] = useState("المفروشات الكبيرة")
  return (

    <>
      <StatusBar barStyle={'light-content'} backgroundColor={"#141E46"} />

      <Animatable.View
        // animation="pulse"
        duration={1000}
        style={{ flex: 1, backgroundColor: '#141E46', }}>
        <View style={styles.headerbar}>
          <TouchableOpacity
            onPress={() => {
              store_Count(),
              setmodel_alert(true)
            }}>
            <Entypo name="cog" size={22} color={COLORS.white} />
          </TouchableOpacity>
          <Text style={styles.textheader}>
            المفروشات
          </Text>
          <View></View>
        </View>
        <ScrollView>
          <View style={{
            flexDirection: "row",
            alignSelf: "flex-start",
            marginLeft: 5,
            marginVertical: 15,
            alignItems: "center"

          }}>
            <HeaderButton

v
              text="المفروشات الكبيرة"
              btnColor="#000"
              textColor="#fff"
              activeTab={activeTab}
              setActiveTab={setActiveTab} 
             />
            <HeaderButton
              text="المفروشات الصغيره"
              btnColor="#fff"
              textColor="#000"
              activeTab={activeTab}
              setActiveTab={setActiveTab} />

          </View>
          {activeTab == "المفروشات الكبيرة" ? (
            <Button />
          ) : (
            <Buttonsc />
          )
          }
        </ScrollView>
      </Animatable.View>
      <Modal
        animationType="slide"
        transparent={true}

        visible={model_alert}
        onRequestClose={() => {
          setmodel_alert(false)
        }}>
        <View style={{ flex: 1 }}>
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
                  alignSelf: "flex-start",
                  padding: 5,
                  backgroundColor: COLORS.main,
                  borderRadius: 10,
                  elevation: 3,
                  marginBottom: 5,
                  // flexDirection: 'row',
                  justifyContent: "center",
                  alignItems: 'center',
                  marginLeft: 10
                }}
                onPress={() => {
                  setmodel_alert(false)
                }}>
                <Entypo name="cross" size={22} color={COLORS.white} />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: '50%',
                  alignSelf: "center",
                  padding: 10,
                  backgroundColor: COLORS.main,
                  borderRadius: 10,
                  elevation: 3,
                  marginBottom: 5,
                  flexDirection: 'row',
                  justifyContent: "center",
                  alignItems: 'center',
                  marginLeft: 10
                }}
                onPress={() => {
                  setmodel_alert(false)
                  this.Log_Out()
                }}>
                <Text
                  style={{
                    fontFamily: "Mada-SemiBold",
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
}
const HeaderButton = (props) => (
  <>
    <TouchableOpacity style={{
      backgroundColor: props.activeTab == props.text ? '#fff' : '#141E46',
      paddingVertical: 6,
      paddingHorizontal: 22,
      borderRadius: 25,
      marginHorizontal: 5
    }}
      onPress={() => { 
          props.setActiveTab(props.text)
      }}>
      <Text
        style={{
          fontFamily: "ReemKufiFun-Bold",
          color: props.activeTab == props.text ? "#141E46" : "#fff",
          fontSize: 15,
          // fontWeight: "900"
        }}>{props.text}</Text>

    </TouchableOpacity>
  </>

)
const Button = (props) => (
  <>
    <Bigmafro />
  </>

)
const Buttonsc = (props) => (
  <>

    <First />

  </>

)
const styles = StyleSheet.create({
  headerbar: {
    backgroundColor: "#141E46",
    height: height / 10,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row"
  },
  textheader: {
    fontSize: 25,
    color: "#fff",
    alignSelf: "center",
    fontFamily: "Generator Black",
    // marginLeft: "50%",
  }

});
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS, FONTS, FONTSFAMILY } from "../customs/Constant.js";

const Stack = createNativeStackNavigator();

function Secondnav() {
  return (
    <Stack.Navigator initialRouteName="Drink">
      <Stack.Screen name="Drink" component={Drink}
        options={{ headerShown: false }} />
      <Stack.Screen name="Elrab" component={Elrab}
        options={{ headerShown: false }} />
      <Stack.Screen name="Bigmafro" component={Bigmafro}
        options={{ headerShown: false }} />
      <Stack.Screen name="First" component={First}
        options={{ headerShown: false }} />

    </Stack.Navigator>
  );
}

export default Secondnav;