import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import {Container, Header, Left, Right, Content, Body, Button, Row, Col} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import * as colors from '../assets/css/Colors';
import {CommonActions} from '@react-navigation/native';
import {font_title,font_description, api_url, login,login_logo} from '../config/Constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import Snackbar from 'react-native-snackbar';
import {StatusBar, Loader} from '../components/GeneralComponents';

export default class UserRegister extends Component {
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = {
      validation: false,
      isLoding: false,
      password:''
    };
  }

  handleBackButtonClick = () => {
    this.props.navigation.goBack(null);
  };

  logout = () => {
    this.props.navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Logout'}],
      }),
    );
  };

  

  showSnackbar(msg) {
    Snackbar.show({
      title: msg,
      duration: Snackbar.LENGTH_SHORT,
    });
  }

  render() {
    return (
      <Container style={styles.container}>
        <View>
          <StatusBar />
        </View>

        <Content style={styles.content}>
       
     
          <View style={{marginTop:'10%'}} />
          <View style={{padding:'7%'}}>
          <Text style={styles.txt_style}>Create Account</Text>
          <Text style={styles.txt_style2}>Please fill the input blow here</Text>
          </View>
          <View style={{marginTop:'10%'}} />
        <View style={{ width: "80%", alignSelf: "center" }}>
          <TextInput
                 style={styles.input}
                 value={this.state.email}
                 placeholder="User Name"
                 placeholderTextColor='#808080'
                 fontWeight='bold'
                 onChangeText={(TextInputValue) =>
                  this.setState({ email: TextInputValue })
                }

              />
          <Icon style={styles.icon} name="user" size={20} />
         </View>
             <View style={{ width: "80%", alignSelf: "center" }}>
          <TextInput
                 style={styles.input}
                 value={this.state.email}
                 placeholder="Phone Number"
                 placeholderTextColor='#808080'
                 fontWeight='bold'
                 onChangeText={(TextInputValue) =>
                  this.setState({ email: TextInputValue })
                }

              />
          <Icon style={styles.icon} name="phone" size={20} />
         </View>
             <View style={{ width: "80%", alignSelf: "center" }}>
          <TextInput
                 style={styles.input}
                 value={this.state.email}
                 placeholder="Password"
                 placeholderTextColor='#808080'
                 fontWeight='bold'
                 onChangeText={(TextInputValue) =>
                  this.setState({ email: TextInputValue })
                }

              />
          <Icon style={styles.icon} name="lock" size={20} />
         </View>
         <View style={{ width: "80%", alignSelf: "center" }}>
            <TextInput
                style={styles.input}
                value={this.state.email}
                placeholder="Confirm Password"
                placeholderTextColor='#808080'
                fontWeight='bold'
                onChangeText={(TextInputValue) =>
                    this.setState({ email: TextInputValue })
                }
            />  
             <Icon style={styles.icon} name="key" size={20} />
         </View>
              <View style={{ marginTop: "10%" }} />
          <View style={{ width: "80%", alignSelf: "center" }}>
              <Button block style={styles.request_button} onPress={this.login}>
                <Text style={styles.request_button_text}>Sign Up</Text>
              </Button>
            </View>
        <View style ={{margin:20}}/> 
           <Row >
             <Col style={{width:'65%'}}>
              <Text style={styles.signin_text} onPress={this.register}>
                Already have a account?
              </Text>
             </Col>
             <Col>
             <Text style={styles.signin_text1} onPress={this.register}>
              Sign In
            </Text>
             </Col>   
           </Row>
           
       
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1f1a30',
  },
  content: {
    padding: '5%',
  },
  body: {
    alignItems: 'center',
  },
  txt_style: {
    fontSize: 30,
    fontFamily: font_title,
    color:colors.theme_white
  },
  txt_style2: {
    fontSize: 17,
    fontFamily: font_description,
    color:colors.theme_grey
  },
  buttonStyle: {
    borderRadius: 20,
    height: 45,
    width: '90%',
    backgroundColor: colors.theme_bg,
    alignSelf: 'center',
  },
 input: {
    alignSelf:'center',
    height: 55,
    margin: 12,
    width:'115%',
    paddingLeft:'16%',
    borderRadius:20,
    borderWidth: 0.5,
    color:colors.theme_grey,
    borderColor:'#39304d',
    backgroundColor:'#39304d',
  },
  request_button_text: {
    color: '#040720',
    fontSize:15,
    fontWeight:'bold',
    letterSpacing: 0.5,
  },
  request_button: {
    backgroundColor: '#40E0D0',
    alignSelf:'center',
    height: 55,
    width:'80%',
    borderRadius:30
  },
  signin_text: {
    fontSize: 15,
    fontFamily:font_description,
    paddingLeft:'25%',
    color: colors.theme_grey,
    marginBottom: "4%",
  },
  signin_text1: {
    fontSize: 15,
    fontFamily:font_title,
    color: '#40E0D0',
    fontWeight:'bold',
    marginBottom: "4%",
  },
  icon: {
    position: 'absolute',
    color:'#ffffff',
    marginTop:'10%'
  },
  margin_10: {
    margin: 10,
  },
  left: {
    flex: 1,
  },
  img_style: {
    marginTop:10,
    width: 180,
    height: 100,
  },
});
