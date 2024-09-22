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
        خدماتنا
        </Text>
      </View>
      <ScrollView>
        <View style={{
          flexDirection: "row",
          flexWrap:"wrap",
          justifyContent: "space-evenly",
          alignSelf: "center",
          margin: 5,
          marginVertical: 15,
          alignItems: "center",

        }}>
          <View style={{width:150,height:100,marginVertical:10,backgroundColor:"#000"}}>

          </View>
<View style={{width:150,height:100,marginVertical:10,backgroundColor:"#000"}}>

          </View>
          <View style={{width:150,height:100,marginVertical:10,backgroundColor:"#000"}}>

          </View>

          <View style={{width:150,height:100,marginVertical:10,backgroundColor:"#000"}}>

          </View>

          <View style={{width:150,height:100,marginVertical:10,backgroundColor:"#000"}}>

          </View>

          <View style={{width:150,height:100,marginVertical:10,backgroundColor:"#000"}}>

          </View>

        </View>
      </ScrollView>
    </Animatable.View>
 </>
  );
}
 
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