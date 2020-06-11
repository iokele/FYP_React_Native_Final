import React from 'react'
import {connect} from 'react-redux'
import { Image, View,StyleSheet,Modal,ActivityIndicator,TouchableOpacity} from 'react-native';
import { Container, Footer, FooterTab, Button, Icon, Text,Tab,Tabs ,ScrollableTab} from 'native-base';
import RNFetchBlob from 'rn-fetch-blob'
import Canvas, {Image as CanvasImage} from 'react-native-canvas'
import RNFS from 'react-native-fs';
import {requestEmbedding,cancelEmbedding,confirmEmbedding,loadEmbeddingImage} from "../Actions/ImageProcessActions/ImageEmbeddingAction"
class EmbedImage extends React.Component {
    constructor() {
        super();
        this.state={
            // data:"",
            // MAX_WIDTH : 1280,
            // MAX_HEIGHT : 720,
            // MAX_SIZE : 100000, // 100kb
            uploaded:false,
        }
//        this.handleClick=this.handleClick.bind(this)
    }
async getDateUri(){
    const {loadEmbeddingImage} =this.props
    var RNFetchBlob = require('rn-fetch-blob').default
    const fs = RNFetchBlob.fs;
    const data = await fs.readFile(fs.asset('input7.png'), 'base64')
    loadEmbeddingImage(1,data,"input7","mosaic")
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
// getDataUri(url) {
//     var RNFetchBlob = require('rn-fetch-blob').default
//     const fs = RNFetchBlob.fs;
//     let imagePath = null;
//     RNFetchBlob.config({
//         fileCache: true
//     })
//     .fetch("GET", url)
//   // the image is now dowloaded to device's storage
//     .then(resp => {
//     // the image path you can use it directly with Image component
//     imagePath = resp.path();
//     return resp.readFile("base64");
//   })
//   .then(base64Data => {
//     // here's base64 encoded image
//     console.log(base64Data);
//     // remove the file from storage
//     return fs.unlink(imagePath);
//   });        
// }



// async getBase64Test (){
//     var RNFS = require('react-native-fs')
//     // const rootPath = RNFS.DocumentDirectoryPath;
    
//     // RNFS.readDir(RNFS.DocumentDirectoryPath).then(files => {
//     //     files.map((file)=>console.log(file.name))
//     // })
//     // var path= rootPath + "/" +"input.png"
//        base64data = await RNFS.readFile(require('./input7.png'), 'base64').then();
//     console.log(rootPath);
//     console.log(base64data)
// }
    handleUpload(){
        this.setState({uploaded:true})
    }
    render(){
        const {embeddingRequesting,embeddingRequested, imageLoaded,errorMessage,embeddedImage,imageLoading,isFileReading} =this.props.ImageEmbedding
        const {cancelEmbedding,confirmEmbedding} =this.props
        const {uploaded} =this.state
        return(
            <View style={styles.container}>
                <View style = {styles.header}>
                </View>
                
                <TouchableOpacity onPress={()=>this.handleUpload()}>
                <View style = {styles.imageView}>
                {uploaded?
                (
                <Image style= {styles.imageStyle} source={require('./input7.png')}/>
                ): (
                    
                        <Image style ={styles.imageStyle} source ={require('./uploadEdit.png')} />  
                )
                }
                 </View>
                 </TouchableOpacity>
               
                {isFileReading&&<CustomProgressBar/>}
                {/* {uri:'data:image/jpeg;base64,'+embeddedImage} */}
              
            </View>
        )
    }
}

const CustomProgressBar = ({ visible }) => (
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
        loadEmbeddingImage :(userId, imageBase64, name,filter) => dispatch(loadEmbeddingImage(userId, imageBase64,name, filter)),
        cancelEmbedding:(userId) => dispatch(cancelEmbedding(userId)),
        confirmEmbedding:(userId) => dispatch (confirmEmbedding(userId)),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(EmbedImage)

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
      height: 80 + '%',
      width: 90 + '%',
      resizeMode: 'stretch'
    },
  });