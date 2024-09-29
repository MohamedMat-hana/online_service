// import React, { useEffect } from 'react';
// import {
//   Text,
//   View,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   StatusBar,
//   ScrollView,
//   Dimensions,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { BackHandler } from 'react-native';
// import * as Animatable from 'react-native-animatable';

// const { width, height } = Dimensions.get('window');

// const First = () => {
//   const navigation = useNavigation();

//   useEffect(() => {
//     const backAction = () => {
//       BackHandler.exitApp();
//       return true;
//     };

//     const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

//     return () => {
//       backHandler.remove();
//     };
//   }, []);

//   const map = [
//     {
//       title: "مفرش",
//       image: require('../Img/bed11.jpg'),
//     },
//     {
//       title: "مفرش",
//       image: require('../Img/bed12.jpg'),
//     },
//     {
//       title: "مفرش",
//       image: require('../Img/bed13.jpg'),
//     },
//     {
//       title: "مفرش",
//       image: require('../Img/bed14.jpg'),
//     },
//     {
//       title: "مفرش",
//       image: require('../Img/bed11.jpg'),
//     },
//     {
//       title: "مفرش",
//       image: require('../Img/bed12.jpg'),
//     },
//     {
//       title: "مفرش",
//       image: require('../Img/bed13.jpg'),
//     },
//     {
//       title: "مفرش",
//       image: require('../Img/bed14.jpg'),
//     },
//     {
//       title: "مفرش",
//       image: require('../Img/bed11.jpg'),
//     },
//     {
//       title: "مفرش",
//       image: require('../Img/bed12.jpg'),
//     },
//     {
//       title: "مفرش",
//       image: require('../Img/bed13.jpg'),
//     },
//     {
//       title: "مفرش",
//       image: require('../Img/bed14.jpg'),
//     },
//     {
//       title: "مفرش",
//       image: require('../Img/bed14.jpg'),
//     },
//     {
//       title: "مفرش",
//       image: require('../Img/bed14.jpg'),
//     },
//     {
//       title: "مفرش",
//       image: require('../Img/bed14.jpg'),
//     },
//   ];

//   return (
//     <>
//       <StatusBar barStyle={'light-content'} backgroundColor={"#141E46"} />
//       <ScrollView>
//         <View style={styles.header}>
//           <View style={styles.first}>
//             <View
//               animation="tada"
//               duration={4000}
//               style={{
//                 flexDirection: "row",
//                 flexWrap: "wrap",
//                 alignItems: "center",
//                 alignSelf: "center",
//                 justifyContent: "center",
//               }}
//             >
//               {map.map((item, index) => (
//                 <TouchableOpacity
//                   onPress={() => {
//                     navigation.navigate("Details", {
//                       name: item,
//                     });
//                   }}
//                   style={styles.Button}
//                   key={index}
//                 >
//                   <Image
//                     source={item.image}
//                     style={styles.image}
//                   />
//                   <Text style={styles.Text}>{item.title}</Text>
//                 </TouchableOpacity>
//               ))}
//             </View>
//           </View>
//           <View style={{ height: 80 }}></View>
//         </View>
//       </ScrollView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     flex: 1,
//     backgroundColor: "#15133C20",
//   },
//   first: {
//     width: width,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     flexWrap: "wrap",
//     alignItems: 'center',
//     alignSelf: "center",
//     backgroundColor: "#141E46",
//   },
//   Button: {
//     width: width / 2.4,
//     height: height / 5,
//     padding: 0,
//     borderRadius: 7,
//     margin: 10,
//     alignItems: "center",
//     justifyContent: 'center',
//     backgroundColor: "#fff",
//   },
//   image: {
//     resizeMode: 'contain',
//     height: "60%",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   Text: {
//     marginTop: 10,
//     color: "#141E46",
//     fontSize: 18,
//     alignSelf: "center",
//     fontFamily: "Generator Black",
//   },
// });

// export default First;

import React, { useState, useEffect, useCallback } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BackHandler } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { COLORS, RADIUS, MARGIN, FONTS } from '../customs/Constant';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window');

const First = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const [dataSource, setDataSource] = useState(null);
  const store_Count = async () => {
    await AsyncStorage.setItem("login", '1')
    console.log("login=1");
}


  const backAction = useCallback(() => {
    BackHandler.exitApp();
    return true;
  }, []);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => {
      backHandler.remove();
    };
  }, [backAction]);

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

  const renderItem = useCallback(
    (item, index) => (

      <TouchableOpacity
        key={index}
        style={styles.button}
        onPress={() => {
          store_Count(),
          navigation.navigate("Details", {
            name: item,
          });
          console.log(item)
        }}
      >

        <Image source={{ uri: item.avatar }} style={styles.image} />
        <Text style={styles.text}>{item.name}</Text>

      </TouchableOpacity>
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
        <ScrollView>
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

  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 10,
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
  button: {
    width: width / 2.4,
    height: height / 5,
    padding: 0,
    borderRadius: RADIUS.xxsRadius,
    margin: MARGIN.xsMargin,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  image: {
    resizeMode: 'contain',
    width: "60%",
    height: "60%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    margin: MARGIN.xsMargin,
    color: COLORS.main,
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

export default First;
