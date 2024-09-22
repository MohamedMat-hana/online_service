import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Foat from './Foat.js'
import BigFoat from './BigFoat.js'
import elrab from './Elrab.js'
import * as Animatable from 'react-native-animatable';

const Stack = createNativeStackNavigator();
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
const { width, height } = Dimensions.get('window');

function Drink() {
  const [activeTab, setActiveTab] = useState("الفوط الكبيرة")
  return (
    <>    
    <StatusBar barStyle={'light-content'} backgroundColor={"#141E46"} />
    <Animatable.View
      // animation="rubberBand"
      // duration={5000}
      style={{ flex: 1, backgroundColor: '#141E46', }}>
      <View style={styles.headerbar}>
        <Text style={styles.textheader}>
          الفوط
        </Text>
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
            text="الفوط الكبيرة"
            btnColor="#000"
            textColor="#fff"
            activeTab={activeTab}
            setActiveTab={setActiveTab} />
          <HeaderButton
            text="الفوط الصغيره"
            btnColor="#fff"
            textColor="#000"
            activeTab={activeTab}
            setActiveTab={setActiveTab} />

        </View>
        {activeTab == "الفوط الكبيرة" ? (
          <Button />
        ) : (
          <Buttonsc />
        )
        }
      </ScrollView>
    </Animatable.View>
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
      onPress={() => { props.setActiveTab(props.text) }}>
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
    <BigFoat />
  </>

)
const Buttonsc = (props) => (
  <>

    <Foat />

  </>

)
const styles = StyleSheet.create({
  headerbar: {
    backgroundColor: "#141E46",
    height: height / 10,
    justifyContent: "center",
    alignItems: "center"
  },
  textheader: {
    fontSize: 25,
    color: "#fff",
    alignSelf: "center",
    fontFamily: "Generator Black",
    // marginLeft: "50%",
  }

});
function Second() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Drink" component={Drink}
        options={{ headerShown: false }} />
      <Stack.Screen name="BigFoat" component={BigFoat}
        options={{ headerShown: false }} />

      <Stack.Screen name="Foat" component={Foat}
        options={{ headerShown: false }} />
      <Stack.Screen name="elrab" component={elrab}
        options={{ headerShown: false }} />

    </Stack.Navigator>
  );
}

export default Second;