import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Foat from './Foat.js';
import BigFoat from './BigFoat.js';
import Details from './Details.js';
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
import {COLORS, FONTSFAMILY} from '../customs/Constant.js';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

function Drink() {
  const navigation = useNavigation();

  const [services, setServices] = useState([
    {
      id: 1,
      name: 'نقل',
      title: 'خدمات النقل',
      description: `
  نحن نقدم خدمات النقل السريع والموثوق. فريقنا المدرب يستخدم أحدث التقنيات لضمان توصيل البضائع بأمان وفي الوقت المحدد. سواء كنت بحاجة إلى نقل محلي أو دولي، نحن هنا لتلبية احتياجاتك. نحن نتعامل مع جميع أنواع البضائع، من الصغيرة إلى الكبيرة، مع التركيز على سلامة المنتجات.
      `,
      description1: 'نحن نضمن لك تجربة نقل سلسة وفعالة.',
      image: [
        {avatar: require('../Img/nakl/photo_60123626303558626f49_y.jpg')},
        {avatar: require('../Img/nakl/photo_6012362630355862643_y.jpg')},
        {avatar: require('../Img/nakl/photo_6012362630355862644_y.jpg')},
        {avatar: require('../Img/nakl/photo_6012362630355862656_y.jpg')},
        {avatar: require('../Img/nakl/photo_6012362630355862654_x.jpg')},
        {avatar: require('../Img/nakl/photo_6012362630355862679_y.jpg')},
        {avatar: require('../Img/nakl/photo_6012362630355862726_y.jpg')},
      ],
    },
    {
      id: 2,
      name: 'تخزين',
      title: 'خدمات التخزين',
      description: `
  نقدم خدمات التخزين الآمن والمريح. لدينا مرافق حديثة مجهزة بأفضل أنظمة الأمان لضمان حماية ممتلكاتك. سواء كنت بحاجة إلى تخزين قصير أو طويل الأمد، نحن هنا لمساعدتك. نحن نقدم خيارات مرنة تناسب احتياجاتك، مع إمكانية الوصول السهل إلى ممتلكاتك في أي وقت.
      `,
      description1: 'تخزين آمن وموثوق لممتلكاتك الثمينة.',
      image: [
        {avatar: require('../Img/store/photo_6012362630355862725_y.jpg')},
        {avatar: require('../Img/store/photo_6012362630355862720_y.jpg')},
        {avatar: require('../Img/store/photo_6012362630355862716_y.jpg')},
        {avatar: require('../Img/store/photo_6012362630355862718_y.jpg')},
        {avatar: require('../Img/store/photo_6012362630355862715_y.jpg')},
        {avatar: require('../Img/store/photo_6012362630355862709_y.jpg')},
      ],
    },
    {
      id: 3,
      name: 'شراء الأثاث',
      title: 'خدمات شراء الأثاث',
      description: `
      نساعدك في شراء أفضل الأثاث المستعمل والجديد بأسعار تنافسية. نحن نعمل مع مجموعة متنوعة من الموردين لضمان الجودة والاختيار. يمكنك الاعتماد علينا في تلبية احتياجاتك الشرائية، سواء كنت تبحث عن أثاث منزلي أو مكتبي. نقدم استشارات مخصصة لمساعدتك في اتخاذ القرار الصحيح.
      `,
      description1: 'نساعدك في العثور على أفضل العروض والأثاث.',
      image: [{avatar: require('../Img/buy.jpg')}],
    },
    {
      id: 4,
      name: 'بيع الأثاث',
      title: 'خدمات بيع الأثاث',
      description: `
      نقدم لك أفضل خدمات بيع الأثاث المستعمل والجديد لتحقيق أرباح أعلى. فريقنا المحترف يساعدك في تسويق منتجاتك بفعالية من خلال استراتيجيات مبتكرة. نحن هنا لدعمك في كل خطوة، بدءًا من تحديد السعر المناسب إلى الوصول إلى العملاء المحتملين. نستخدم تقنيات التسويق الرقمي لتعزيز مبيعاتك.
      `,
      description1: 'استراتيجيات مبتكرة لزيادة مبيعات الأثاث.',
      image: [{avatar: require('../Img/sell.jpg')}],
    },
    {
      id: 5,
      name: 'الاماكن',
      title: 'استكشاف الأماكن',
      description: `
  استكشف أماكن العمل المتنوعة مع خدماتنا المتخصصة. نقدم لك خيارات متعددة للوصول إلى أفضل المواقع التي تلبي احتياجاتك العملية. نحن هنا لدعمك في العثور على المساحات المناسبة لتحقيق أهدافك، سواء كنت تبحث عن مكاتب، مساحات عمل مشتركة، أو مواقع تجارية.
      `,
      description1: 'نجعل تجربتك في العمل أكثر سهولة وفعالية.',
      locations: [
        {name: 'الأهرامات'},
        {name: 'البحر الأحمر'},
        {name: 'الأقصر'},
        {name: 'شرم الشيخ'},
      ],
      image: [{avatar: null}],
    },
    {
      id: 6,
      name: 'السيارات',
      title: 'خدمات النقل بالسيارات',
      description: `
نقدم مجموعة واسعة من السيارات لتلبية احتياجاتك. نحن هنا لمساعدتك في الاختيار المناسب. جميع سياراتنا تأتي مع ضمان الجودة والخدمة الممتازة. نحن نقدم أيضًا خيارات تمويل مرنة لتسهيل النقل.
  `,
      description1: 'اختيار واسع من السيارات ذات الجودة العالية.',
      image: [
        {avatar: require('../Img/car/photo_6012362630355862657_x.jpg')},
        {avatar: require('../Img/car/photo_6012362630355862707_y.jpg')},
        {avatar: require('../Img/car/photo_6012362630355862734_y.jpg')},
        {avatar: require('../Img/car/photo_6019379408621649573_y.jpg')},
        {avatar: require('../Img/car/photo_6012362630355862735_x.jpg')},
        {avatar: require('../Img/car/photo_60193794086216495745_y.jpg')},
      ],
    },
  ]);
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={'#141E46'} />
      <Animatable.View
        // animation="rubberBand"
        // duration={5000}
        style={{flex: 1, backgroundColor: '#141E46'}}>
        <View style={styles.headerbar}>
          <Text style={styles.textheader}>خدماتنا</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            alignSelf: 'center',
            margin: 5,
            width: '100%',
            marginVertical: 15,
            alignItems: 'center',
          }}>
          {services.map((item, i) => (
            <TouchableOpacity
              style={{
                width: 150,
                height: 100,
                marginVertical: 10,
                borderRadius: 30,
                backgroundColor: COLORS.background,
                borderWidth: 2,
                borderColor: COLORS.white,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => {
                navigation.navigate('Details', {
                  name: item,
                });
              }}>
              <Text style={styles.titleItems}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Animatable.View>
    </>
  );
}

const styles = StyleSheet.create({
  headerbar: {
    backgroundColor: '#141E46',
    height: height / 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textheader: {
    fontSize: 25,
    color: '#fff',
    alignSelf: 'center',
    fontFamily: FONTSFAMILY.Generator_Black,
    // marginLeft: "50%",
  },
  titleItems: {
    fontSize: 30,
    color: '#fff',
    alignSelf: 'center',
    fontFamily: FONTSFAMILY.Main,
    // marginLeft: "50%",
  },
});
function Second() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Drink"
        component={Drink}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Details"
        component={Details}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default Second;
