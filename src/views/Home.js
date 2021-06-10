import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
} from 'react-native'; 
import {GOOGLE_KEY, font_title,font_description,start,stop} from '../config/Constants';
import MapView, {
  Marker,
  AnimatedRegion,
  Polyline,
  PROVIDER_GOOGLE
} from "react-native-maps";
import haversine from "haversine";
import * as colors from '../assets/css/Colors';
import {StatusBar} from '../components/GeneralComponents';
import Geolocation from '@react-native-community/geolocation';
import {
  Content,
  Container,
  Header,
  Body,
  Title,
  Left,
  Row,
  Col,
  Card,
  Fab,
} from 'native-base';
import {Icon as Icn, Button} from 'react-native-elements';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
// const LATITUDE = 29.95539;
// const LONGITUDE = 78.07513;
const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.drawer = this.drawer.bind(this);
    this.state = {
     fab_active: false,
     latitude: LATITUDE,
      longitude: LONGITUDE,
      routeCoordinates: [],
      distanceTravelled: 0,
      prevLatLng: {},
      coordinate: new AnimatedRegion({
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: 0,
        longitudeDelta: 0
      })
    };
  }

  drawer = () => {
    this.props.navigation.toggleDrawer();
  };


  enable_gps(){
    RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({interval: 10000, fastInterval: 5000})
    .then(data => {
      this.props.navigation.navigate('Home');
    }).catch(err => {
       
    });
  }


   componentDidMount() {
    // this.requestCameraPermission();
     Geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        });
      },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 }
    );
    const { coordinate } = this.state;
    this.watchID =  Geolocation.watchPosition(
      position => {
        const { routeCoordinates, distanceTravelled } = this.state;
        const { latitude, longitude } = position.coords;

        const newCoordinate = {
          latitude,
          longitude
        };
        console.log({ newCoordinate });

        if (Platform.OS === "android") {
          if (this.marker) {
            this.marker._component.animateMarkerToCoordinate(
              newCoordinate,
              500
            );
          }
        } else {
          coordinate.timing(newCoordinate).start();
        }

        this.setState({
          latitude,
          longitude,
          routeCoordinates: routeCoordinates.concat([newCoordinate]),
          distanceTravelled:
            distanceTravelled + this.calcDistance(newCoordinate),
          prevLatLng: newCoordinate
        });
      },
      error => console.log(error),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
        distanceFilter: 10
      }
    );
  }

  componentWillUnmount() {
   Geolocation.clearWatch(this.watchID);
  }

  getMapRegion = () => ({
    latitude: this.state.latitude,
    longitude: this.state.longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA
  });

  calcDistance = newLatLng => {
    const { prevLatLng } = this.state;
    return haversine(prevLatLng, newLatLng) || 0;
  };

  requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Location Access Permission",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  render() {
    return (
        <Container>
        <View>
          <StatusBar />
        </View>
        <Header
          androidStatusBarColor={colors.theme_bg}
          style={{
            backgroundColor: colors.theme_bg,
            toolbarDefaultBorder: '#FFFFFF',
          }}>
          <Row>
            <Col
              style={{
                height: '100%',
                width: '15%',
                alignSelf: 'center',
                justifyContent: 'center',
              }}>
              <Left style={styles.header}>
                <Icn
                  onPress={() => this.props.navigation.toggleDrawer()}
                  name="menu"
                  type="fontawesome"
                  size={30}
                  color="#FFFFFF"
                />
              </Left>
            </Col>
            <Col style={{height: '100%', width: '85%', alignSelf: 'center'}}>
              <Body>
                <Title style={styles.title}>Tracking</Title>
              </Body>
            </Col>
          </Row>
        </Header>
        <View style={styles.container}>
       
          <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            showUserLocation
            followUserLocation
            loadingEnabled
            region={this.getMapRegion()}
          >
            <Polyline coordinates={this.state.routeCoordinates} strokeWidth={6} />
            <Marker coordinate={this.getMapRegion()} >
              <Image
                source={require(".././assets/img/person.png")}
                style={{ height: 50, width: 50 }}
              />
            </Marker>
          </MapView>
        <View style={styles.buttonContainer}>
       
          
          <Text style={{fontSize:25,fontFamily:font_title,color:colors.theme_white,marginLeft:10}}>
            {parseFloat(this.state.distanceTravelled).toFixed(2)} km
          </Text>   

        </View>
          <Fab
            active={this.state.fab_active}
            direction="left"
            containerStyle={{ marginBottom:135 }}
            style={{ backgroundColor: "#40E0D0" }}
            position="bottomRight"
            onPress={() => this.setState({ fab_active: !this.state.fab_active })}>
            <Icn name="people" style={{ color:colors.theme_bg }}/>
            <Button style={{ backgroundColor: '#40E0D0' }}>
              <Icn name="pause" type='antdesign' style={{ color:'#40E0D0' }}/>
            </Button>
            <Button style={{ backgroundColor: '#40E0D0' }}>
              <Icn name="playcircleo" type='antdesign' style={{ color:'#40E0D0'}}/>
            </Button>
          </Fab> 
        </View>
        
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:colors.theme_bg
  },
  location_markers: {
    position: 'absolute',
  },
  map: {
    width:'100%',
    height:'85%',
  },
  title: {
    fontSize: 23,
    fontFamily: font_title,
    color: '#FFFFFF',
    marginTop: 15,
    marginRight: 30,
  },
  header: {
    alignSelf: 'center',
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 20,
    backgroundColor: "transparent"
  },
   img_style: {
    marginLeft:10,
    width: 50,
    height: 50,
  },
});
