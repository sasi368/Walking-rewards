import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native'; 
import {GOOGLE_KEY} from './src/config/Constants'; 
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const {width, height} = Dimensions.get('window')

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

class MapComponent extends Component {
  constructor() {
    super()
    this.state = {
      initialPosition: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0,
      },
    }
  }

  componentDidMount() {
    Geolocation.getCurrentPosition((position) => {
      var lat = parseFloat(position.coords.latitude)
      var long = parseFloat(position.coords.longitude)

      var initialRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }

      this.setState({initialPosition: initialRegion})
    },
    (error) => alert(JSON.stringify(error)),
    {enableHighAccuracy: false, timeout: 20000});
  }


  enable_gps(){
    RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({interval: 10000, fastInterval: 5000})
    .then(data => {
      this.props.navigation.navigate('Splash');
    }).catch(err => {
       
    });
  }

  renderScreen = () => {
      return (
        <View style={styles.container}>
        <Button
              onPress={this.enable_gps.bind(this)}
              title="Enable GPS"
        
            />
          <MapView
            style={styles.map}
            initialRegion={this.state.initialPosition}/>
        </View>
      );
  }

  render() {
    return (
      this.renderScreen()
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default MapComponent;