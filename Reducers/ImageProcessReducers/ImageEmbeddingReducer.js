import { Reducer } from 'redux'
import {EMBEDDING_IMAGE_LOADED, REQUEST_EMBEDDING,REQUEST_EMBEDDING_FAIL,
    EMBEDDING_IMAGE_LOADED_FAILED,LOAD_EMBEDDING_IMAGE,
    } from '../../Actions/ImageProcessActions/ImageEmbeddingAction'

const defaultState = {
    embeddingRequesting:false,
    embeddingRequested :false,
    embeddingRequestFail: false,
    imageLoading:false,
    imageLoaded:false,
    imageLoadedFail:false,
    errorMessage:"",
    embeddedImage: "",

}
export default function ImageEmbeddingReducer (
    state={
        ...defaultState
    },action
) {
    switch(action.type){
        case REQUEST_EMBEDDING:{
            return{
                ...state,
                embeddingRequesting:true,
            }
        }
        case REQUEST_EMBEDDING_FAIL:{
            return{
                ...state,
                embeddingRequested:true,
                embeddingRequesting:false,
                embeddingRequestFail:true,
                errorMessage:action.message,

            }
        }
        case LOAD_EMBEDDING_IMAGE:{
            return{
                ...state,
                imageLoading:true,
                embeddingRequested:true,
            }
        }
        case EMBEDDING_IMAGE_LOADED:{
            return{
                ...state,
                imageLoading:false,
                imageLoaded:true,
                embeddedImage:action.embeddedImage
            }
        }
        case EMBEDDING_IMAGE_LOADED_FAILED:{
            return{
                ...state,
                imageLoaded:true,
                imageLoadedFail:true,
                errorMessage:action.message
            }
        }
        default:return state
    }
}