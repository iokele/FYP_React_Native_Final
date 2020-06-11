import { Reducer } from 'redux'
import {EMBEDDING_IMAGE_LOADED, REQUEST_EMBEDDING,REQUEST_EMBEDDING_FAIL,
    EMBEDDING_IMAGE_LOADED_FAILED,LOAD_EMBEDDING_IMAGE, CANCEL_EMBEDDING,CONFIRM_EMBEDDING,EMBEDDING_CANCELED,EMBEDDING_CONFIRMED, CONFIRM_FAIL
,CANCEL_FAIL    } from '../../Actions/ImageProcessActions/ImageEmbeddingAction'

const defaultState = {
    // embeddingRequesting:false,
    // embeddingRequested :false,
    // embeddingRequestFail: false,
    imageLoading:false,
    imageLoaded:false,
    imageLoadedFail:false,
    errorMessage:"",
    embeddedImage: "",
    isCanceling:false,
    isCanceled:false,
    isCancelFail:false,
    isConfirming:false,
    isConfirmed:false,
    isConfirmFail:false,
    cancelFailMessage:"",
    confirmFailMessage:"",

}
export default function ImageEmbeddingReducer (
    state={
        ...defaultState
    },action
) {
    switch(action.type){
        // case REQUEST_EMBEDDING:{
        //     return{
        //         ...state,
        //         embeddingRequesting:true,
        //     }
        // }
        // case REQUEST_EMBEDDING_FAIL:{
        //     return{
        //         ...state,
        //         embeddingRequested:true,
        //         embeddingRequesting:false,
        //         embeddingRequestFail:true,
        //         errorMessage:action.message,

        //     }
        // }
        case LOAD_EMBEDDING_IMAGE:{
            return{
                ...state,
                imageLoading:true,
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
        case CANCEL_EMBEDDING:{
            return{
                ...state,
                isCanceling:true,
            }
        }
        case CANCEL_FAIL:{
            return{
                ...state,
                isCanceling:false,
                isCanceled:true,
                isCancelFail:true,
                cancelFailMessage: action.error,

            }
        }
        case EMBEDDING_CANCELED:{
            return{
                ...state,
                embeddingRequesting:false,
                embeddingRequested :false,
                embeddingRequestFail: false,
                imageLoading:false,
                imageLoaded:false,
                imageLoadedFail:false,
                errorMessage:"",
                embeddedImage: "",
                isCanceling:false,
                isConfirming:false,
                isCanceled:false,
                isCancelFail:false,
                isConfirmed:false,
                isConfirmFail:false,
                cancelFailMessage:"",
                confirmFailMessage:"",
            }
        }
        case CONFIRM_EMBEDDING:{
            return{
                ...state,
                isConfirming:true,
                isComrimed:false,
                isConfirmFail:false,
            }
        }
        case CONFIRM_FAIL:{
            return{
                ...state,
                isConfirmed:true,
                isConfirming:false,
                isConfirmFail:true,
                confirmFailMessage:action.message
            }
        }
        case EMBEDDING_CONFIRMED:{
            return{
                ...state,
                embeddingRequesting:false,
                embeddingRequested :false,
                embeddingRequestFail: false,
                imageLoading:false,
                imageLoaded:false,
                imageLoadedFail:false,
                errorMessage:"",
                embeddedImage: "",
                isCanceling:false,
                isConfirming:false,
                isCanceled:false,
                isCancelFail:false,
                isConfirmed:false,
                isConfirmFail:false,
                cancelFailMessage:"",
                confirmFailMessage:"",
            }
        }
        default:return state
    }
}