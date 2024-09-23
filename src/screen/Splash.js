import React from 'react';
import {
  View, Text, StyleSheet, StatusBar, Dimensions
} from 'react-native';
import LottieView from 'lottie-react-native';
const { width, height } = Dimensions.get('window');
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default class Splash extends React.Component {

  constructor(props) {
    super(props)
    this.ref = React.createRef(null)
    this.state = {

    }
  }
  componentDidMount() {
    this.get_Count()
  }
  async get_Count() {
    let coun = await AsyncStorage.getItem("login")
console.log(coun);
    setTimeout(() => {
      if (coun == 1) {
        //   await AsyncStorage.setItem('login',null)
        //   this.setState({ count: 0 })
        this.props.navigation.navigate("Drawarnav")

      }
      else if (coun == 2) {
        //   await AsyncStorage.setItem('login',null)
        //   this.setState({ count: 0 })
        this.props.navigation.navigate("Choose_page")

      } else {
        //   this.setState({ count: coun })
        this.props.navigation.navigate("Intro")

      }
    }, 9000)
  }
  render() {
    return (
      <>
        <StatusBar barStyle={'light-content'} backgroundColor={'#141E46'} />
        <View style={styles.container}>
          <LottieView
            ref={this.ref}
            source={require('../lottie/66488-fire-feu-fuego.json')} // Replace with your animation file
            autoPlay={true}
            loop={false}
            speed={0.5}
            style={{ width: width, height: height / 2 }}
          />
          <Animatable.Text
            // animation="fadeIn"
            // duration={10000}
            style={styles.text}>زهرة الشرقية</Animatable.Text>
        </View>
      </>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#141E46', // Customize background color
  },
  text: {
    color: '#FFF',
    fontSize: 50,
    alignSelf: 'center',
    fontFamily: 'ReemKufiFun-Bold',
  },
});