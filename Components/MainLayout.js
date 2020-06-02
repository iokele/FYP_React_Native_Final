import React from 'react'
import {connect} from 'react-redux'
import { Router, Scene } from 'react-native-router-flux';
import { Text } from 'react-native';
import Home from './Home'
const MainLayout =() =>{
    return(
        <Home/>
    )

}
export default connect(

)(MainLayout)