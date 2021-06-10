import React, {Component} from 'react';
import {View, StyleSheet, Image,TouchableOpacity} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import {login_logo} from '../config/Constants';
import * as colors from '../assets/css/Colors';
import AsyncStorage from '@react-native-community/async-storage';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

 login_screen(){
    RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({interval: 10000, fastInterval: 5000})
    .then(data => {
      this.props.navigation.navigate('UserLogin');
    }).catch(err => {
       
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.login_screen() } activeOpacity={1}>
        <View style={styles.image_view}>
    
          <Image
            style={{flex: 1, width: undefined, height: undefined}}
            source={login_logo}
            onPress={this.login_screen}
          />
       
        </View>
         </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.theme_bg,
  },
  image_view: {
    height: 160,
    width: 290,
  },
});
