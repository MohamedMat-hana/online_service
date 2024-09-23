import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  Dimensions,
  Linking,
  ScrollView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS, RADIUS, MARGIN, FONTS, PADDING} from '../customs/Constant';

const {width, height} = Dimensions.get('window');

const contactMethods = [
  {
    name: 'Phone',
    icon: 'phone',
    color: COLORS.phone,
    link: 'tel:+966 55 018 7070',
  },
  {
    name: 'Facebook',
    icon: 'facebook',
    color: COLORS.facebook,
    link: 'https://www.facebook.com/waal.mathana?mibextid=JRoKGi',
  },
  {
    name: 'WhatsApp',
    icon: 'whatsapp',
    color: COLORS.whatsapp,
    link: 'https://api.whatsapp.com/send?phone=966 55 018 7070',
  },
  {
    name: 'instagram',
    icon: 'instagram',
    color: COLORS.instagram,
    link: 'https://www.instagram.com/wael7_0?igsh=MWp3bjduMnZuam1xYQ==',
  },
  {
    name: 'link',
    icon: 'link',
    color: COLORS.gray,
    link: "https://zahrtsharqia.com/",
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
  <View style={styles.ViewText}>
            <Animatable.Text
              animation="fadeIn"
              duration={5000}
              style={styles.Text}>
              تواصل معنا
            </Animatable.Text>
          </View>
        <View style={styles.header}>
        
            {contactMethods.map((method, index) => (
              <Animatable.View
                animation="fadeIn"
                duration={5000}
                key={index}
                style={styles.first}>
                <TouchableOpacity onPress={() => Linking.openURL(method.link)}>
                  <MaterialCommunityIcons
                    name={method.icon}
                    color={method.color}
                    size={60}
                  />
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
    paddingTop:PADDING.xlPadding,
    backgroundColor: COLORS.main,
    alignItems: 'center',
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent: 'center',
  },
  first: {
    width: '40%',
    height: '20%',
    margin:10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.xxsRadius,
  },
  ViewText: {
    backgroundColor: COLORS.main,
  },
  Text: {
    color: COLORS.white,
    fontSize: FONTS.h2,
    alignSelf: 'center',
    fontFamily: 'ReemKufiFun-Bold',
  },
});
