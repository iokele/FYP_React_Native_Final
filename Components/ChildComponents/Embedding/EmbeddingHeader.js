//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Icon, Right, Row} from 'native-base';
import {connect} from 'react-redux'
import {styles} from "./style"
import {requestEmbedding,cancelEmbedding,confirmEmbedding,loadEmbeddingImage,readingFile} from "../../../Actions/ImageProcessActions/ImageEmbeddingAction"

// create a component
 class EmbeddingHeader extends React.Component {
    async getDateUri(){
        const {loadEmbeddingImage,imageLoaded,readingFile} =this.props
        var RNFetchBlob = require('rn-fetch-blob').default
        const fs = RNFetchBlob.fs;
        await readingFile()
        const data = await fs.readFile(fs.asset('input7.png'), 'base64')
        loadEmbeddingImage(1,data,"input7","mosaic")
        this.props.navigation.navigate("EmbeddedReview")
        
    // const uriBase64 ='data:image/png;base64,' +data
    // const ImageResizer = require ('react-native-image-resizer');
    // const resizedImageUrl = await ImageResizer.createResizedImage(uriBase64, 200, 80, 'PNG', 80, 0, RNFS.DocumentDirectoryPath);
    // const base64 = await RNFS.readFile(resizedImageUrl, 'base64');
    
    //  return fs.unlink(fs.asset('input7.png'))
    //    fs.stat(fs.asset('input7.png')).then(stats=>{
    //        stats.readFile("base64");
    //    })
    //    .then(base64Data => {
    //     // here's base64 encoded image
    //     console.log(base64Data);
    //     // remove the file from storage
    //   }); 
    }
     render(){
        return (
            <View style = {styles.header}>
               <Button style = {styles.backIcon} dark transparent onPress = {()=>this.props.navigation.goBack()}>
                   <Icon name = "ios-arrow-back"/>
               </Button>
               <Text style = {styles.text}>
                   Embedding
               </Text>
               <Button style = {styles.icon} 
                dark transparent onPress={()=>this.getDateUri()}>
                   <Text > Review </Text>
                 </Button>
            </View>
         );
     }
    }
    const mapStateToProps =(state,ownProps) =>{
        return {
            ImageEmbedding:state.ImageEmbedding
        }
    }
    const mapDispatchToProps =(dispatch,ownProps) =>{
        return {
            loadEmbeddingImage :(userId, imageBase64, name,filter) => dispatch(loadEmbeddingImage(userId, imageBase64,name, filter)),
            readingFile:() => dispatch(readingFile()),
        }
    }
    export default connect(
        mapStateToProps,
        mapDispatchToProps,
    )(EmbeddingHeader)

// define your styles
// const styles = StyleSheet.create({
//     header: {
//       flexDirection: 'row',
//       height: 80,
//       paddingTop: 10,
//       justifyContent: 'space-between',
//       alignContent: 'center',
//       borderBottomWidth: StyleSheet.hairlineWidth,
//       borderBottomColor: 'black'
//     },

//     backIcon: {
//         marginLeft: 5,
//         paddingTop: 20
//     },

//     text: {
//         textAlign: 'center',
//         fontSize: 20,
//         paddingTop: 15
//     },
//     icon: {
//         marginRight: 5,
//         paddingTop: 20,
//     }

// });