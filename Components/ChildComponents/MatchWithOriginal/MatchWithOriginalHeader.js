//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Icon} from 'native-base';

// create a component
export default function MatchHeader() {
        return (
           <View style = {styles.header}>
              <Button style = {styles.backIcon} dark transparent onPress = {()=>this.props.navigation.goBack()}>
                  <Icon name = "ios-arrow-back"/>
              </Button>
              <Text style = {styles.text}>
                  Match Original Image
              </Text>
              <Button style = {styles.icon}
              dark transparent onPress={()=>this.props.navigation.goBack()}>
                  <Icon name="md-skip-forward" />
                </Button>
           </View>
        );
    }


// define your styles
const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      height: 80,
      paddingTop: 10,
      justifyContent: 'space-between',
      alignContent: 'center',
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: 'black'
    },

    backIcon: {
        marginLeft: 5,
        paddingTop: 20
    },

    text: {
        textAlign: 'center',
        fontSize: 20,
        paddingTop: 15
    },
    icon: {
        marginRight: 5,
        paddingTop: 20,
    }

});