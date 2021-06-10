import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Keyboard,
  FlatList,
} from 'react-native';
import {
  Header,
  Row,
  Col,
  Content,
  Body,
  Title,
  Card,
  CardItem,
  Container,
  Left,
  Right,
  Thumbnail,
  List,
  Tabs,
  Tab,
  TabHeading,
  ListItem,
} from 'native-base';
import {Icon as Icn} from 'react-native-elements';
import * as colors from '../assets/css/Colors';
import {
  font_description,
  font_title,
} from '../config/Constants';
import {StatusBar} from '../components/GeneralComponents';
import axios from 'axios';
import Snackbar from 'react-native-snackbar';
import LottieView from 'lottie-react-native';

export default class Rewards extends Component {
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


  showSnackbar(msg) {
    Snackbar.show({
      title: msg,
      duration: Snackbar.LENGTH_SHORT,
    });
  }

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
            toolbarDefaultBorder: colors.theme_bg,
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
                  onPress={this.handleBackButtonClick}
                  name="arrow-back"
                  size={24}
                  color="#FFFFFF"
                />
              </Left>
            </Col>
            <Col style={{height: '100%', width: '85%', alignSelf: 'center'}}>
              <Body>
                <Title style={styles.title}>My Rewards</Title>
              </Body>
            </Col>
          </Row>
        </Header>

        <ScrollView>
          <Content style={styles.padding_6}>
            <View style={{padding:10}}>
              <Row style={{padding:5}}>
                <Col style={{width: '15%'}}>
                  <Text style={{fontSize: 14, fontFamily: font_description, color:colors.theme_grey}}>
                    Coins
                  </Text>
                </Col>
              </Row>
              <Row style={{padding:5}}>
              <Col>
               <Text style={{fontSize: 16, fontFamily: font_title, color:colors.theme_white}}>
                    Your available reward coins:
              </Text>
              </Col>
              <Col style={{width:'30%'}}>
              <Text style={{fontSize:15, color:colors.theme_white, padding:10,textAlign: 'center', fontFamily: font_title,backgroundColor:'#40E0D0',borderRadius:10}}>50 coins</Text>
              </Col>
              </Row>
               <Row style={{padding:5}}>
               <Text style={{fontSize: 14, fontFamily: font_description,color:colors.theme_grey}}>
                    Preferred currency
                  </Text>              
              </Row>
              <Row style={{padding:5}}>
              <Text style={{fontSize: 16, fontFamily: font_title,color:colors.theme_white}}>
                    Rupee
              </Text>
              </Row>
            </View>
            <View style={{margin: 10}} />
                <Tabs tabBarUnderlineStyle={{backgroundColor:'#40E0D0'}}>
              <Tab heading={ <TabHeading style={{ backgroundColor:colors.theme_bg}} ><Text style={{color:'#ffffff'}}>Today Rewards</Text></TabHeading>}>         
                 <View style={{backgroundColor:colors.theme_bg}}>
                  <View style={{marginTop:20}} />
             <Card style={{backgroundColor:'#39304d',padding:10,width:'90%',alignSelf:'center',borderRadius:5,borderColor:'#39304d'}}>
                   <CardItem style={{backgroundColor:'#39304d'}}> 
                   <Row>
                    <Icn active name='award' type='feather' color='#40E0D0' />
                    <Col>
                    <Text style={{color:'#40E0D0',fontFamily:font_title}}>Award 3</Text>
                     <Text style={{fontSize: 14, fontFamily: font_description,color:colors.theme_white}}>Some descriptions</Text>
                    </Col>
                    <Right> 
                      <Icn name="arrow-forward" color='#40E0D0'  />
                    </Right>
                  </Row>
                   </CardItem>
                </Card>
                   <Card style={{backgroundColor:'#39304d',padding:10,width:'90%',alignSelf:'center',borderRadius:5,borderColor:'#39304d'}}>
                   <CardItem style={{backgroundColor:'#39304d'}}> 
                   <Row>
                    <Icn active name='award' type='feather' color='#40E0D0' />
                    <Col>
                    <Text style={{color:'#40E0D0',fontFamily:font_title}}>Award 3</Text>
                     <Text style={{fontSize: 14, fontFamily: font_description,color:colors.theme_white}}>Some descriptions</Text>
                    </Col>
                    <Right> 
                      <Icn name="arrow-forward" color='#40E0D0'  />
                    </Right>
                  </Row>
                   </CardItem>
                </Card>
                  <Card style={{backgroundColor:'#39304d',padding:10,width:'90%',alignSelf:'center',borderRadius:5,borderColor:'#39304d'}}>
                   <CardItem style={{backgroundColor:'#39304d'}}> 
                   <Row>
                    <Icn active name='award' type='feather' color='#40E0D0' />
                    <Col>
                    <Text style={{color:'#40E0D0',fontFamily:font_title}}>Award 3</Text>
                     <Text style={{fontSize: 14, fontFamily: font_description,color:colors.theme_white}}>Some descriptions</Text>
                    </Col>
                    <Right> 
                      <Icn name="arrow-forward" color='#40E0D0'  />
                    </Right>
                  </Row>
                   </CardItem>
                </Card>
                </View>
              </Tab>
              <Tab heading={ <TabHeading style={{ backgroundColor:colors.theme_bg}} ><Text style={{color:'#ffffff'}}>History</Text></TabHeading>}>
                 <View style={{backgroundColor:colors.theme_bg}} >
                  <View style={{marginTop:20}} />
               <Card style={{backgroundColor:'#39304d',padding:10,width:'90%',alignSelf:'center',borderRadius:5,borderColor:'#39304d'}}>
                   <CardItem style={{backgroundColor:'#39304d'}}> 
                   <Row>
                    <Icn active name='award' type='feather' color='#40E0D0' />
                    <Col>
                    <Text style={{color:'#40E0D0',fontFamily:font_title}}>Award 3</Text>
                     <Text style={{fontSize: 14, fontFamily: font_description,color:colors.theme_white}}>Some descriptions</Text>
                    </Col>
                    <Right> 
                      <Icn name="arrow-forward" color='#40E0D0'  />
                    </Right>
                  </Row>
                   </CardItem>
                </Card>
                <Card style={{backgroundColor:'#39304d',padding:10,width:'90%',alignSelf:'center',borderRadius:5,borderColor:'#39304d'}}>
                   <CardItem style={{backgroundColor:'#39304d'}}> 
                   <Row>
                    <Icn active name='award' type='feather' color='#40E0D0' />
                    <Col>
                    <Text style={{color:'#40E0D0',fontFamily:font_title}}>Award 3</Text>
                     <Text style={{fontSize: 14, fontFamily: font_description,color:colors.theme_white}}>Some descriptions</Text>
                    </Col>
                    <Right> 
                      <Icn name="arrow-forward" color='#40E0D0'  />
                    </Right>
                  </Row>
                   </CardItem>
                </Card>
                 <Card style={{backgroundColor:'#39304d',padding:10,width:'90%',alignSelf:'center',borderRadius:5,borderColor:'#39304d'}}>
                   <CardItem style={{backgroundColor:'#39304d'}}> 
                   <Row>
                    <Icn active name='award' type='feather' color='#40E0D0' />
                    <Col>
                    <Text style={{color:'#40E0D0',fontFamily:font_title}}>Award 3</Text>
                     <Text style={{fontSize: 14, fontFamily: font_description,color:colors.theme_white}}>Some descriptions</Text>
                    </Col>
                    <Right> 
                      <Icn name="arrow-forward" color='#40E0D0'  />
                    </Right>
                  </Row>
                   </CardItem>
                </Card>
                </View>
              </Tab>

           </Tabs>
               <View style={{marginTop:'60%'}} />
          </Content>
          
      

        </ScrollView>

      </Container>

    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: font_title,
    color: '#FFFFFF',
    marginTop: 15,
    marginRight: 30,
  },
  header: {
    alignSelf: 'center',
  },
  padding_6: {
    padding: '3%',
    backgroundColor:colors.theme_bg
  },
  padding_20: {
    padding: 20,
  },
});
