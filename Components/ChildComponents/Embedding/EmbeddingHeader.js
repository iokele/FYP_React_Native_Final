//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Icon, Right, Row} from 'native-base';
import {connect} from 'react-redux'
import {styles} from "./style"
import {requestEmbedding,cancelEmbedding,confirmEmbedding,loadEmbeddingImage} from "../../../Actions/ImageProcessActions/ImageEmbeddingAction"
// create a component
 class EmbeddingHeader extends React.Component {

     render(){
        //  const {confirmEmbedding} = this.props
        return (
            <View style = {styles.header}>
               <Button style = {styles.backIcon} dark transparent onPress = {()=>this.props.navigation.goBack()}>
                   <Icon name = "ios-arrow-back"/>
               </Button>
               <Text style = {styles.text}>
                   Embedding
               </Text>
               <Button style = {styles.icon}
                dark transparent onPress={()=>this.props.navigation.navigate("EmbeddedReview")}>
                   <Text > Review </Text>
                 </Button>
            </View>
         );
     }
    }
    const mapStateToProps =(state,ownProps) =>{
        return {

        }
    }
    const mapDispatchToProps =(dispatch,ownProps) =>{
        return {
          
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