import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import {Container, Header, Left, Right, Content, Body} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button} from 'react-native-elements';
import * as colors from '../assets/css/Colors';
import {CommonActions} from '@react-navigation/native';
import {font_title, profile_icon, api_url, login} from '../config/Constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import Snackbar from 'react-native-snackbar';
import {StatusBar, Loader} from '../components/GeneralComponents';

export default class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = {
      validation: false,
      isLoding: false,
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
        <Header androidStatusBarColor={colors.theme_bg} style={styles.header}>
          <Loader visible={this.state.isLoding} />
          <Left style={styles.left}>
            <TouchableOpacity
              style={{width: 100}}
              onPress={() => this.handleBackButtonClick()}
              activeOpacity={1}>
              <FontAwesome
                name="chevron-left"
                size={20}
                color="black"
                style={{marginLeft: 10}}
              />
            </TouchableOpacity>
          </Left>
        </Header>
        <Content style={styles.content}>
          <View style={styles.content}>
          <Text>Home</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.theme_fg,
  },
  header: {
    backgroundColor: colors.theme_white,
  },
  content: {
    padding: '5%',
  },
  body: {
    alignItems: 'center',
  },
  txt_style: {
    fontSize: 35,
    fontFamily: font_title,
  },
  buttonStyle: {
    borderRadius: 20,
    height: 45,
    width: '90%',
    backgroundColor: colors.theme_bg,
    alignSelf: 'center',
  },
  inputStyle: {
    fontSize: 18
  },
  margin_10: {
    margin: 10,
  },
  left: {
    flex: 1,
  },
  img_style: {
    width: 50,
    height: 50,
  },
});
