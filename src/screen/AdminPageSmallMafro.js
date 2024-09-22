

import React, { useState, useCallback, useEffect,useRef } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  Dimensions,
  ScrollView,
  StatusBar,
  ActivityIndicator,
  Image,
  SafeAreaView,
  PermissionsAndroid,
  Button
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS, MARGIN, FONTS, FONTSFAMILY, RADIUS } from '../customs/Constant';
const { width, height } = Dimensions.get('window');
import RNFetchBlob from 'rn-fetch-blob'
 import { useNavigation } from '@react-navigation/native';
import { BackHandler } from 'react-native';
import LottieView from 'lottie-react-native';

import ImagePicker from 'react-native-image-crop-picker';
import { removeMasssage } from '../../config/helperFunction';
const AdminPageSmallMafro = ({ navigation }) => {
  const animationRef = useRef(null);

  const [photoBase64, setPhotoBase64] = useState(null);
  const [photoData, setPhotoData] = useState(null);
  const [photoUri, setPhotoUri] = useState("");
  const [name, setname] = useState('');
  const [price, setprice] = useState('');
  const store_Count = async () => {
    await AsyncStorage.setItem("login", '2')
    console.log("done");
    // this.props.navigation.navigate("Liberarylogorsing")

  }

  const backAction = useCallback(() => {
    navigation.navigate('Choose_page')

    return true;
  }, []);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => {
      backHandler.remove();
    };
  }, [backAction]);



  useEffect(() => {
    requestCameraPermission();
  }, []);

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const choicefile = () => {
     ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true
    }).then(image => {
      // setPhotoBase64(image)
      setPhotoData(image);
      // handleUpload(image)
    });
  };

 
  const handleUpload = () => {
    if (!photoData) {
      Alert.alert('Error', 'Please select a photo.');
      return;
    }
    else if (!name) {
      Alert.alert('Error', 'Please select a name.');
      return;
    }
    else if (!price) {
      Alert.alert('Error', 'Please select a price.');
      return;
    }
    RNFetchBlob.fetch(
      'POST',
      `https://market-app-server.onrender.com/api/SmallMaphro`,
      {
        Authorization: 'Bearer access-token',
        otherHeader: 'foo',
        'Content-Type': 'multipart/form-data',
      },
      [
        // element with property `filename` will be transformed into `file` in form data
        {
          name: 'avatar',
          filename: 'avatar.png',
          type: 'image/png',
          data: photoData['data'],
        },
        {
          name: 'price',
          data: price,
        },
        {
          name: 'name',
          data: name,
        },
      ],
    )
      .then((resp) => {
        // this.setState({loading: false});

        let data = resp.data.trim();
        console.log(data)

        setPhotoBase64(null);
        setPhotoData(null);
        setPhotoUri("");
        setname('');
        setprice('');
      })
      .catch((err) => {
        // ...
        // Alert.alert("ادخل")
      });




 
  };
  return (
    <>
      <View style={styles.container}>
        <ScrollView >
          <View style={styles.container1}>
          <View style={{ flexDirection: "row",
            alignItems:"center",
            justifyContent:"space-evenly",
            // backgroundColor:"#000",
            width:width }}>
              <View style={{width:50}}> 
              </View>
              <Text style={styles.headertext1}>اضافة و حذف</Text>

              <TouchableOpacity onPress={() => {
                navigation.navigate('Drawarnav');
              }}
              style={{
                borderRadius:10,
                // padding:5,
                // backgroundColor:COLORS.white
              }}
              >
                  <LottieView
                        ref={animationRef}
                        source={require('../../src/lottie/home.json')} // Replace with your animation file
                        autoPlay={true}
                        loop={true}
                        speed={0.5}
                        style={{ width: 50, height: 50 }}
                    />
              {/* <Text style={[styles.headertext1,{
                fontSize:10,
                fontWeight:"bold",
                color:COLORS.main}]}>الي صفحة العرض</Text> */}

              </TouchableOpacity>
            </View>





            <TextInput
              style={styles.inputsec}
              placeholder={"الاسم"}
              placeholderTextColor={COLORS.gray}
              onChangeText={(text) => setname(text)}
              value={name}
            />

            <TextInput
              style={styles.inputsec}
              placeholder={"السعر"}
              placeholderTextColor={COLORS.gray}
              onChangeText={(text) => setprice(text)}
              value={price}
              maxLength={5}
              keyboardType="number-pad"
            />


            <TouchableOpacity
              style={styles.launchCamerabutton}
              onPress={() => {

                choicefile()
              }}  >
              <Text style={styles.launchCamerabuttonText}>ادخل صوره</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.button}
              onPress={() => {
                Alert.alert("اضافه",`تم اضافه ${ name}` ),
                handleUpload()

              }}>
              <Text style={styles.buttonText}>اضافه</Text>
            </TouchableOpacity>

            {/* {photoData ==null ?(
              null
              ):(
                
                <Image source={{ uri: photoData }}
                style={{ width: 200, height: 200 }}
                resizeMode="contain"
              />
                )} */}


          </View>
          <View>
            <Text style={[styles.headertext1, { fontSize: FONTS.h1 }]}>_________________</Text>

            <Text style={[styles.headertext1, { fontSize: FONTS.h1 }]}>المنتجات</Text>

            {Add()}
          </View>
        </ScrollView>
      </View>
    </>
  );
};
const Add = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const [dataSource, setDataSource] = useState(null);
  const [posts, setPosts] = useState({});

  useEffect(() => {
    fetch("https://market-app-server.onrender.com/api/SmallMaphro")
      .then((response) => response.json())
      .then((responseJson) => {
        setIsLoading(false);
        setDataSource(responseJson.data);
      })

      .catch((err) => {
        console.log(err, "err");
      });
  }, []);
  const DeleteData = (id, e) => {
    console.log("Deleting data with id:", id);

    axios.delete(`https://market-app-server.onrender.com/api/SmallMaphro/${id}`, {
      headers: {
        Accept: "application/json",
      },
    })
      .then(() => {
        console.log("Data is deleted");
       
        // Update the state after successful deletion
        setDataSource(dataSource.filter(item => item._id !== id));
      })
      .catch((error) => {
        console.log("Error deleting data:", error);
      });
  };
  const renderItem = useCallback(
    (item, index) => (

      <View
        key={index}
        style={styles.button1}
        onPress={() => {
          console.log(item)
        }}
      >
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: "center",
          // flexWrap: 'wrap',
          // backgroundColor:"#000",
          height: "50%"
        }}>
          <TouchableOpacity onPress={(e) =>{
             removeMasssage(),
             DeleteData(item._id, e)}}>
            
            <MaterialCommunityIcons name="trash-can" color={COLORS.main} size={25} />

          </TouchableOpacity>
          <Image source={{ uri: item.avatar }}
            style={styles.image} />

        </View>
        <Text style={styles.text}>{item.name}</Text>

      </View>
    ),
    [navigation]
  );

  if (isLoading) {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <View style={styles.containerLoading}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      </>
    );
  } else if (!dataSource || !dataSource.dataOfBack) {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
          <Text style={{ color: COLORS.red }}>لا يوجد منتجات</Text>
        </View>
      </>
    );
  }

  else {
    return (
      <>
        <StatusBar barStyle={'light-content'} backgroundColor={COLORS.main} />
        <ScrollView >
          <View style={styles.header}>
            <View style={styles.first}>
              <View style={styles.itemsWrapper}>{dataSource.dataOfBack.map(renderItem)}</View>
            </View>
            <View style={styles.spacing}></View>
          </View>
        </ScrollView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: "center",
    backgroundColor: COLORS.main, // Adjust the background color
  },
  container1: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  headertext1: {
    color: COLORS.white,
    fontSize: 40,
    alignSelf: 'center',
    fontFamily: FONTSFAMILY.Main,

  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputsec: {
    width: width / 1.5,
    fontSize: 20,
    marginBottom: 8,
    paddingHorizontal: 10,
    borderRadius: 15,
    color: COLORS.white,
    backgroundColor: COLORS.facebook,
    fontFamily: FONTSFAMILY.Generator_Black,
    // alignSelf: "stretch",
    // alignItems: "center",
    justifyContent: "flex-end",
    textAlign: "right"
  },
  button: {
    width: width / 1.5,
    height: height / 13,
    backgroundColor: COLORS.facebook,
    borderColor: COLORS.white,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 8,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: COLORS.white,
    textAlign: 'center',
    fontSize: 25,
    fontFamily: FONTSFAMILY.Main,

  },
  launchCamerabutton: {
    width: width / 1.5,
    height: height / 13,
    backgroundColor: COLORS.facebook,
    // borderColor: COLORS.white,
    borderRadius: 10,
    // borderWidth: 1,
    marginBottom: 8,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  launchCamerabuttonText: {
    color: COLORS.white,
    textAlign: 'center',
    fontSize: 25,
    fontFamily: FONTSFAMILY.Generator_Black,

  },
  header: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  containerLoading: {
    flex: 1,
    // backgroundColor: COLORS.main,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center"
  },
  first: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: COLORS.main,
  },
  button1: {
    width: width / 2.4,
    height: height / 5,
    borderRadius: RADIUS.xxsRadius,
    margin: MARGIN.xsMargin,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    padding: 4
  },
  image: {
    resizeMode: "cover",
    width: "80%",
    height: "100%",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    margin: MARGIN.xsMargin,
    color: COLORS.white,
    fontSize: FONTS.h7,
    padding: 3,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignSelf: 'center',
    fontFamily: 'Generator Black',
    backgroundColor: COLORS.main
  },
  text1: {
    color: COLORS.white,
    fontSize: FONTS.h7,
    alignSelf: 'center',
    fontFamily: 'Generator Black',
  },
  itemsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  spacing: {
    height: 80,
  },
});

export default AdminPageSmallMafro;

// SmallMaphro