import React from 'react'
import {connect} from 'react-redux'
import { Router, Scene } from 'react-native-router-flux';
import { Text, View } from 'react-native';
import Home from './Home'
import EmbedImage from './EmbedImage'
const MainLayout =() =>{
    return(
        <View> 
        <Home/>
        <EmbedImage/>
        </View>
    )

}
export default connect(

)(MainLayout)