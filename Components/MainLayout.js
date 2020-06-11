import React from 'react'
import {connect} from 'react-redux'
import { Router, Scene } from 'react-native-router-flux';
import { Text, View } from 'react-native';
import Home from './Home'
import EmbedImage from './Embedding'
import Extraction from './ExtractImage'
import EmbeddedReview from './EmbeddedReview'
import EmbeddingHeader from './ChildComponents/Embedding/EmbeddingHeader'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from "./ChildComponents/Home/Header"
import EmbeddedReviewHeader from "./ChildComponents/EmbeddedReview/EmbeddedReviewHeader"
const Stack = createStackNavigator();

function MainLayout(){
    return(
      
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={({route, navigation }) => (
                    {
                    header:()=><Header/>,
                    route: {route}, 
                    navigation: {navigation}}
                )}/>
                <Stack.Screen name="EmbedImage" component={EmbedImage} options={({route, navigation }) => (
                    {
                    header:()=><EmbeddingHeader navigation= {navigation}/>,
                    route: {route}, 
                    navigation: {navigation}}
                )}/>
                <Stack.Screen name="Extraction" component={Extraction} options={({route, navigation }) => (
                    {
                    header:()=><Header/>,
                    route: {route}, 
                    navigation: {navigation}}
                )}/>
                <Stack.Screen name="EmbeddedReview" component={EmbeddedReview} options={({route, navigation }) => (
                    {
                    header:()=><EmbeddedReviewHeader navigation= {navigation}/>,
                    route: {route}, 
                    navigation: {navigation}}
                )}/>
            </Stack.Navigator>
        </NavigationContainer>
    
    )

}
export default connect(

)(MainLayout)