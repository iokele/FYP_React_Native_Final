//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {Button, Icon} from 'native-base';
import {connect} from 'react-redux'
// create a component
class EmbeddingReview extends Component {
    constructor() {
        super();
        this.state={
        }
    }
  render() {
    const {embeddingRequesting,embeddingRequested, imageLoaded,errorMessage,embeddedImage} =this.props.ImageEmbedding
    return (
      <View style={styles.container}>
        <View style = {styles.header}>
        </View>
        <View style = {styles.imageView}>
        {imageLoaded&&
         (<>
         <Image style= {styles.imageStyle} source={{uri:'data:image/jpeg;base64,'+embeddedImage}}/>
         <Button style = {{marginTop: 10}} transparent >
                  <Icon style = {{fontSize: 40}} name = "md-refresh"/>
                  <Text>Refresh Your Effect</Text>
        </Button>
        </>)
         }
          
        </View>
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
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(EmbeddingReview)
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
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageStyle: {
    height: 60 + '%',
    width: 90 + '%',
    resizeMode: 'stretch'
  },
});

//make this component available to the app

