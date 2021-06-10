import { Dimensions } from 'react-native';

//api urls
export const api_url = "http://8429d29d198c.ngrok.io"; 
export const img_url = "http://8429d29d198c.ngrok.io/uploads/service_images/";
//export const add_branch = "/api/add_branch";
export const login = "/api/login"; 
export const register = "/api/register";


//Font Family
export const font_title = "TitilliumWeb-Bold";
export const font_description = "TitilliumWeb-Regular";

//Map
export const GOOGLE_KEY = "AIzaSyANEyjTe14VXymczqhtl62yGLy7khKOlqM";
export const LATITUDE_DELTA = 0.0150;
export const LONGITUDE_DELTA =0.0152;
export const DEFAULT_PADDING = { top: 40, right: 40, bottom: 40, left: 40 };

//images and lottie views 
export const login_logo = require('.././assets/img/login_logo.png');
export const start = require('.././assets/img/start.png');
export const stop = require('.././assets/img/stop.png');

export const splash_img = require('.././assets/json/splash.json'); 


//Size
export const screenHeight = Math.round(Dimensions.get('window').height);
export const screenWidth = Math.round(Dimensions.get('window').width);
export const height_40 = Math.round(40 / 100 * screenHeight);
export const height_45 = Math.round(45 / 100 * screenHeight);
export const height_50 = Math.round(50 / 100 * screenHeight);
export const height_60 = Math.round(60 / 100 * screenHeight);
export const height_70 = Math.round(70 / 100 * screenHeight);
export const height_35 = Math.round(35 / 100 * screenHeight);
export const height_20 = Math.round(20 / 100 * screenHeight);
export const height_30 = Math.round(30 / 100 * screenHeight);
export const width_80 = Math.round(80 / 100 * screenWidth);
export const width_40 = Math.round(40 / 100 * screenWidth);