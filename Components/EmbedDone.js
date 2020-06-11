//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import EmbeddoneFooter from './ChildComponents/EmbedDone/EmbedDoneFooter'
import {connect} from 'react-redux'

// create a component
class Embeddone extends Component {
  
  render() {
    const {embeddedImage} =this.props.ImageEmbedding
    return (
      <View style={styles.container}>
        <View style = {styles.imageView}>
          <Image style = {styles.imageStyle} source = {{uri:'data:image/jpeg;base64,'+embeddedImage}} />
        </View>
        <View style = {styles.footer}>
            <EmbeddoneFooter/>
        </View>
        
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    alignContent: 'center',
    backgroundColor: 'powderblue'
  },
  imageView: {
    flex: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageStyle: {
    height: 80 + '%',
    width: 90 + '%',
    resizeMode: 'stretch'
  },

  footer: {
      flex: 1
  }
});

//make this component available to the app
const mapStateToProps =(state,ownProps) =>{
    return {
        ImageEmbedding:state.ImageEmbedding
    }
}
const mapDispatchToProps =(dispatch,ownProps) =>{
    return {
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Embeddone)