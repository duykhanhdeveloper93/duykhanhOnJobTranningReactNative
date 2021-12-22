import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from 'react-native';

const Design2 = () => {


  return (
    <ImageBackground style={{ flex: 1 }}
      source={require('../imageFolder2/dog.png')}>
      <View style={{  backgroundColor: 'rgba(0, 0, 0, 0.7)', flex: 1 }}>
        <Image source={require('../imageFolder2/Dogdom.png')} style={{ marginTop: 100, alignSelf: 'center' }} />
        <View style={{ alignItems: 'center', flexDirection: 'row', backgroundColor: 'rgba(255, 255, 255, 0.25)', borderRadius: 30, marginLeft: 20, marginRight: 20, marginTop: 50 }}>

          <Text style={{ fontSize: 15, color: 'white', margin: 20 }}>+86</Text>
          <Image></Image>
          <TextInput style={{ flex: 1, marginLeft: 1, fontSize: 15, color: 'white'}} />

        </View>

        <View style={{ alignItems: 'center', backgroundColor: 'red', borderRadius: 30, marginLeft: 20, marginRight: 20, marginTop: 10 }}>

          <Text style={{ fontSize: 15, color: 'white', margin: 20 }}>Get Captcha</Text>
          <Image></Image>


        </View>

        <View style={{ borderRadius: 30, marginLeft: 30, marginRight: 20, marginTop: 10 }}>
          <Text style={{ fontSize: 12, color: 'white', margin: 2}} >Password to Login</Text>
        </View>
        <View style={{flex: 1}} />
        <View style={{ alignItems: 'center', borderRadius: 30 }}>
          <Text style={{ fontSize: 12, color: 'white', margin: 2}} >By signing in, you agree to the User Agreement</Text>
          <Text style={{ fontSize: 12, color: 'white', margin: 2}} >and Privacy Terms.</Text>
        </View>

      </View>

      

    </ImageBackground>
  );
};
export default Design2;
