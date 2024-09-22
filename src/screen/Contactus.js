import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  Dimensions,
  Linking
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS,RADIUS,MARGIN,FONTS } from '../customs/Constant';

const { width, height } = Dimensions.get('window');

const contactMethods = [
  {
    name: 'Phone',
    icon: 'phone',
    color: COLORS.phone,
    link: 'tel:+201096526436',
  },
  {
    name: 'Facebook',
    icon: 'facebook',
    color: COLORS.facebook,
    link: 'https://www.facebook.com/profile.php?id=100090134973009&mibextid=LQQJ4d',
  },
  {
    name: 'WhatsApp',
    icon: 'whatsapp',
    color: COLORS.whatsapp,
    link: 'https://api.whatsapp.com/send?phone=201096526436',
  },
];

export default class Contactus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <StatusBar barStyle={'light-content'} backgroundColor={COLORS.main} />

        <View style={styles.header}>
          <View style={styles.ViewText}>
            <Animatable.Text
              animation="fadeIn"
              duration={5000}
              style={styles.Text}>تواصل معنا</Animatable.Text>
          </View>
          {contactMethods.map((method, index) => (
            <Animatable.View
              animation="fadeIn"
              duration={5000}

              key={index}
              style={styles.first}
            >
              <TouchableOpacity onPress={() => Linking.openURL(method.link)}>
                <MaterialCommunityIcons name={method.icon} color={method.color} size={60} />
              </TouchableOpacity>
            </Animatable.View>
          ))}
          <View></View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: COLORS.main,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  first: {
    width: '80%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.xxsRadius,
  },
  ViewText: {},
  Text: {
    color: COLORS.white,
    fontSize: FONTS.h2,
    alignSelf: 'center',
    fontFamily: 'ReemKufiFun-Bold',
  },
});
