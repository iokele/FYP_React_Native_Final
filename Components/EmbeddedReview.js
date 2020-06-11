//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image ,Modal,ActivityIndicator} from 'react-native';
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
    const {embeddingRequesting,embeddingRequested, imageLoaded,errorMessage,embeddedImage,isCanceling,isConfirming,imageLoading} =this.props.ImageEmbedding
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
         {imageLoading&&<CustomProgressBar3/>}
          {isCanceling&&<CustomProgressBar/>}
          {isConfirming&&<CustomProgressBar2/>}
        </View>

      </View>
    );
  }
}
const CustomProgressBar = ({ visible }) => (
  <Modal onRequestClose={() => null} visible={visible}>
    <View style={{ flex: 1, backgroundColor: '#dcdcdc', alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ borderRadius: 10, backgroundColor: 'white', padding: 25 }}>
        <Text style={{ fontSize: 20, fontWeight: '200' }}>Canceling</Text>
        <ActivityIndicator size="large" />
      </View>
    </View>
  </Modal>
);
const CustomProgressBar2 = ({ visible }) => (
  <Modal onRequestClose={() => null} visible={visible}>
    <View style={{ flex: 1, backgroundColor: '#dcdcdc', alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ borderRadius: 10, backgroundColor: 'white', padding: 25 }}>
        <Text style={{ fontSize: 20, fontWeight: '200' }}>Confriming</Text>
        <ActivityIndicator size="large" />
      </View>
    </View>
  </Modal>
);
const CustomProgressBar3 = ({ visible }) => (
  <Modal onRequestClose={() => null} visible={visible}>
    <View style={{ flex: 1, backgroundColor: '#dcdcdc', alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ borderRadius: 10, backgroundColor: 'white', padding: 25 }}>
        <Text style={{ fontSize: 20, fontWeight: '200' }}>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    </View>
  </Modal>
);
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

