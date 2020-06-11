import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Thumbnail, Button, Icon, Right, Row} from 'native-base';

// create a component
class Header extends React.Component {
    constructor() {
        super();
    }

    render(){
        return (
            <View style = {styles.header}>
               <Thumbnail style = {styles.thumbnail} source = {require('./mmexport1576805503587.jpg')}/>
               <Button style = {styles.icon}
               dark transparent onPress={()=>this.props.navigation.goBack()}>
                   <Icon name="menu" />
                 </Button>
            </View>
         );
    }
}


// define your styles
const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      height: 80,
      paddingTop: 10,
      justifyContent: 'space-between',
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: 'black',
    //   backgroundColor: '#324ea8'
    },

    thumbnail: {
        marginLeft: 5
    },

    icon: {
        marginRight: 5,
        paddingTop: 20
    }

});
export default Header;

