import React from 'react'
import {connect} from 'react-redux'
import { Text ,Button,Image, View} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob'
import Canvas, {Image as CanvasImage} from 'react-native-canvas'
import RNFS from 'react-native-fs';
import {getEmbeddedImageBase64,getOriginalImageId,extractHidenInformation} from '../Actions/ImageProcessActions/ImageExtractionAction'
class ExtractImage extends React.Component{
    constructor() {
        super();
        this.state={
            embeddedImage:"",
            originalImageId:1,
        }
    }
    async getDateUri(){
        const {getEmbeddedImageBase64} =this.props
        var RNFetchBlob = require('rn-fetch-blob').default
        const fs = RNFetchBlob.fs;
        const data = await fs.readFile(fs.asset('input7Out.png'), 'base64')
        this.setState({embeddedImage:data})
    }
    handleImageId(id){
        return(this.setState ({originalImageId:id}))
    }
 
    render(){
        const {getOriginalImageId,extractHidenInformation,getEmbeddedImageBase64 } = this.props
        const {embeddedInformaiton} =this.props.ImageExtraction
        const {embeddedImage,originalImageId} = this.state
        return(
            <>
            <View>
            <Text>Try extraction </Text>    
            <Button title = {"Choose a image to extract"} onPress = {()=>this.getDateUri()}/> 
            <Button title = {"Choose the original image"} onPress = {()=>this.handleImageId(13)} />
            <Button title = {"Start Extract"} onPress = {() => extractHidenInformation(1,embeddedImage,originalImageId)}/>
            <Text> {embeddedInformaiton}</Text>
            </View>
            </>
        )
    }

}
const mapStateToProps =(state,ownProps) =>{
    return {
        ImageExtraction : state.ImageExtraction
    }
}
const mapDispatchToProps =(dispatch,ownProps) =>{
    return {
        getEmbeddedImageBase64 :(embeddedImageBase64) => dispatch(getEmbeddedImageBase64(embeddedImageBase64)),
        getOriginalImageId:(originalImageId) => dispatch (getOriginalImageId(originalImageId)),
        extractHidenInformation:(userId, embeddedImage, originalImageId) => dispatch (extractHidenInformation(userId,embeddedImage,originalImageId)),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ExtractImage)