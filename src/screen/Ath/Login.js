import React, {useState, useRef} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  Dimensions,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {COLORS, MARGIN, FONTS, FONTSFAMILY} from '../../customs/Constant';
import axios from 'axios';
import LottieView from 'lottie-react-native';
import Entypo from 'react-native-vector-icons/Entypo';
const {width, height} = Dimensions.get('window');
import {WelcomeMasssage} from '../../../config/helperFunction';

const Login = ({navigation}) => {
  const animationRef = useRef(null);
  const [email, setEmail] = useState('');
  const [EmailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [PassError, setPassError] = useState('');
  const [loading, setLoading] = useState(false); // Correct initialization

  const [secureTextEntry, setsecureTextEntry] = useState(true);

  const validateEmail = email => {
    let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if (reg.test(email) === false) {
      return false;
    } else {
      return true;
    }
  };

  const validatePassword = password => {
    var pass = /^(?=.*\d)(?=.*)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    return pass.test(password);
  };

  const signup = value => {
    let error = 0;
    // admin enter

    //email

    if (email == '') {
      error++;
      setEmailError('يرجى ادخال البريد الالكتروني');
    } else if (!validateEmail(email)) {
      error++;
      setEmailError('البريد الالكترونى الذى ادخلته غير صحيح ');
    } else {
      setEmailError('');
    }

    //password
    if (password.trim() == '') {
      error++;
      setPassError('يجب ادخال كلمه مرور');
    } else if (password.length > 20) {
      error++;
      setPassError('كلمه المرور يجب ألا تزيد عن 20 حرف و رقم');
    } else if (!validatePassword(password)) {
      error++;
      setPassError('كلمة المرور غير صحيحة');
    } else {
      setPassError('');
    }

    if (error == 0) {
      console.log(error);
      handleSignUp();
    } else {
      console.log(error);
    }
  };

  const handleSignUp = async () => {
    setLoading(true); // Show loading spinner

    try {
      const response = await axios.post(
        'https://market-app-server.onrender.com/api/user/login',
        {
          email,
          password,
        },
      );
      if (email == 'admin@gmail.com' && password == 'Admin1&Admin') {
        navigation.navigate('Choose_page');
      } else if (response && response.data) {
        WelcomeMasssage(),
          console.log('Sign Up Successful', response.data.users);
        navigation.navigate('Drawarnav');
      } else {
        console.log('Error=', 'Sign-up failed. Please try again.');
      }
    } catch (error) {
      // Alert.alert('حدث خطأ اثناء الاتصال بالخادم من فضلك حاول مجددا')

      const errorMessage =
        error.response.data.message || 'Sign-up failed. Please try again.';

      Alert.alert('خطأ', 'البيانات غير صحيحة');
    }
    setLoading(false); // Hide loading spinner
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.FirstHeader}>
          <Text style={styles.header}>تسجيل دخول</Text>

          <LottieView
            ref={animationRef}
            source={require('../../lottie/Animation - 1700858581453(1).json')} // Replace with your animation file
            autoPlay={true}
            loop={false}
            speed={1}
            style={{width: width, height: height / 3}}
          />
          {renderInput('البريد الالكتروني', email, setEmail)}
          {EmailError == '' ? null : (
            <View style={styles.ErrorView}>
              <Text style={styles.TextErorr}>{EmailError}</Text>
            </View>
          )}
          <View style={styles.viewinputsec}>
            <TextInput
              style={styles.inputsec}
              placeholder={'كلمة السر'}
              placeholderTextColor={COLORS.gray}
              onChangeText={text => setPassword(text)}
              value={password}
              secureTextEntry={secureTextEntry ? true : false}></TextInput>
            <TouchableOpacity
              onPress={() => {
                if (secureTextEntry == true) {
                  setsecureTextEntry(false);
                } else {
                  setsecureTextEntry(true);
                }
              }}>
              <Entypo
                name={secureTextEntry ? 'eye-with-line' : 'eye'}
                color={COLORS.gray}
                size={23}
              />
            </TouchableOpacity>
          </View>
          {PassError == '' ? null : (
            <View style={styles.ErrorView}>
              <Text style={styles.TextErorr}>{PassError}</Text>
            </View>
          )}
          <TouchableOpacity style={styles.button} onPress={() => signup()}>
            {loading ? (
            <ActivityIndicator size="large" color={COLORS.white} />
          ) : (
            
              <Text style={styles.buttonText}>دخول</Text>
          )}
                      </TouchableOpacity>

          <TouchableOpacity
            style={styles.button1}
            onPress={() => {
              navigation.navigate('Signup');
            }}>
            <Text style={styles.buttonText1}>ليس لديك حساب؟ انشاء حساب</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const renderInput = (placeholder, value, setValue) => (
  <TextInput
    style={styles.input}
    placeholder={placeholder}
    placeholderTextColor={COLORS.gray}
    onChangeText={text => setValue(text)}
    value={value}
  />
);

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: COLORS.main,
  },
  FirstHeader: {
    // flex:1,
    height: height,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:COLORS.black
    // alignSelf:"center",
  },
  viewinputsec: {
    width: width / 1.3,
    height: height / 15,
    borderColor: COLORS.gray,
    backgroundColor: COLORS.facebook,
    borderBottomWidth: 3,
    borderRadius: 10,
    marginBottom: 10,
    // padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputsec: {
    width: width / 1.5,
    fontSize: 20,
    marginBottom: -8,
    paddingHorizontal: 10,
    color: COLORS.white,
    // backgroundColor:COLORS.gray,
    fontFamily: FONTSFAMILY.Generator_Black,
    // alignSelf: "stretch",
    // alignItems: "center",
    justifyContent: 'flex-end',
    textAlign: 'right',
  },
  header: {
    color: COLORS.white,
    fontSize: 40,
    alignSelf: 'center',
    fontFamily: FONTSFAMILY.Main,
  },
  ErrorView: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },

  TextErorr: {
    // height:  20 ,
    color: COLORS.error,
    fontSize: 13,
    // alignSelf: "center"
  },
  input: {
    width: width / 1.3,
    height: height / 15,
    fontSize: 20,
    borderColor: COLORS.gray,
    backgroundColor: COLORS.facebook,
    borderBottomWidth: 3,
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    color: COLORS.white,
    fontFamily: FONTSFAMILY.Generator_Black,
    textAlign: 'right',
    // keyboardType == 'secureTextEntry'?(secureTextEntry='secureTextEntry'):(secureTextEntry="sdd")}
    // alignItems: "center",
  },
  button: {
    width: width / 1.5,
    height: height / 13,
    backgroundColor: COLORS.facebook,
    borderColor: COLORS.white,
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: COLORS.white,
    textAlign: 'center',
    fontSize: 25,
    fontFamily: FONTSFAMILY.Main,
  },
  button1: {
    width: width / 1.5,
    // height: height / 13,
    // backgroundColor: COLORS.facebook,
    // borderColor: COLORS.white,
    // borderRadius: 10,
    // borderWidth: 1,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText1: {
    color: COLORS.white,
    textAlign: 'center',
    fontSize: 15,
    fontFamily: FONTSFAMILY.Generator_Black,
    textDecorationLine: 'underline',
  },
});

export default Login;
