import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Icon, Right, Row} from 'native-base';
import {connect} from 'react-redux'
import {styles} from "./style"
import {readingFile,getEmbeddedImageBase64} from "../../../Actions/ImageProcessActions/ImageExtractionAction"

class ExtractionHeader extends React.Component {
    async getDateUri(){
        var RNFetchBlob = require('rn-fetch-blob').default
        const fs = RNFetchBlob.fs;
        await readingFile()
        const data = await fs.readFile(fs.asset('input7Out.png'), 'base64')
        getEmbeddedImageBase64(data)
        this.props.navigation.navigate("EmbeddedReview")
        
    }
     render(){
        return (
            <View style = {styles.header}>
               <Button style = {styles.backIcon} dark transparent onPress = {()=>this.props.navigation.goBack()}>
                   <Icon name = "ios-arrow-back"/>
               </Button>
               <Text style = {styles.text}>
                   Extraction
               </Text>
               <Button style = {styles.icon} 
                dark transparent onPress={()=>this.getDateUri()}>
                   <Text > Next </Text>
                 </Button>
            </View>
         );
     }
    }
    const mapStateToProps =(state,ownProps) =>{
        return {
            ImageExtraction:state.ImageExtraction
        }
    }
    const mapDispatchToProps =(dispatch,ownProps) =>{
        return {
            readingFile:() => dispatch(readingFile()),
        }
    }
    export default connect(
        mapStateToProps,
        mapDispatchToProps,
    )(ExtractionHeader)