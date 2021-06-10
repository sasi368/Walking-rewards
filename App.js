import React, { Fragment } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import * as colors from './src/assets/css/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import { Content, Container, Header, Body, Radio, Title, Left, Row, Col, Right, Button as Btn, Card, CardItem, List, ListItem, Thumbnail} from 'native-base';
import { ScrollView, Text, View, Image } from 'react-native';
import { Icon as Icn } from 'react-native-elements';
import {font_title,font_description} from './src/config/Constants'; 

/* Screens */
import Splash from './src/views/Splash';
import Home from './src/views/Home';
import UserLogin from './src/views/UserLogin';
import UserRegister from './src/views/UserRegister'; 
import Logout from './src/views/Logout';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

Icon.loadFont()

function CustomDrawerContent(props) {

  return (
    <DrawerContentScrollView {...props}>
      <View style={{ padding:20, flexDirection:'column', borderBottomWidth:0.1, borderColor:colors.theme_fg, alignItems:'flex-start' }}>
        <Image style={{ backgroundColor:colors.theme_grey,width: 80, height: 80, borderRadius: 60 / 2, overflow: "hidden", borderWidth: 1,alignSelf:'center', }} source={ require('./src/assets/img/man.png')} />
        <View style={{ margin: 5 }} />
        <View style={{alignSelf:'center'}} >
          <Text style={{ color:colors.theme_fg, fontFamily:font_title, fontSize:20 }} >User Name</Text>
        </View>
      </View>
      <View style={{marginTop:'16%'}} />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
function MyDrawer() {
  return (
    <Drawer.Navigator 
      drawerContent={props => <CustomDrawerContent {...props} />} 
      initialRouteName="Home"
      drawerStyle={{ width: '65%', backgroundColor: colors.theme_bg }}
      drawerContentOptions={{
        activeTintColor: colors.theme_fg, 
        inactiveTintColor: colors.theme_fg,
        labelStyle: { fontSize: 15, fontFamily:font_title },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ 
          drawerIcon: ({ tintColor }) => (
              <Icn name='home' type='antdesign' color={colors.theme_fg} size={25} />
          ),
        }}
      />
      <Drawer.Screen
        name="MyRewards"
        component={UserLogin}
        options={{ 
          drawerIcon: ({ tintColor }) => (
              <Icn name='award' type='feather' color={colors.theme_fg} size={25} />
          ),
        }}
      />
   
      <Drawer.Screen
        name="Logout"
        component={Splash}
        options={{ 
          drawerIcon: ({ tintColor }) => (
              <Icn name='exit-to-app' type='MaterialIcons' color={colors.theme_fg} size={28} />
          ),
        }}
      />

    </Drawer.Navigator>
  );
}


function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Splash" >

        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={MyDrawer} />
        <Stack.Screen name="UserLogin" component={UserLogin} />
        <Stack.Screen name="UserRegister" component={UserRegister} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;