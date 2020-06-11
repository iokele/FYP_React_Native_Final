import { Reducer } from 'redux'
import {EXTRACTED_HIDEN_INFORMATION,EXTRACT_HIDEN_INFORMATION,EXTRACT_HIDEN_INFORMATION_FAIL,GET_EMBEDDED_IMAGE_BASE64,
    GET_ORIGINAL_IMAGE_ID,CLEAR_FORM} from "../../Actions/ImageProcessActions/ImageExtractionAction"

    const defaultState = {
        isLoading:false,
        isLoaded:false,
        isLoadedFail:false,
        error:"",
        embeddedImage:"",
        originalImageId:0,
        embeddedInformaiton:"",
    }
    export default function ImageExtractionReducer( 
        state={ 
            ...defaultState }
        ,action ) 
        {
            switch(action.type){
                case EXTRACT_HIDEN_INFORMATION :{
                    return {
                        ...state,
                        isLoading:true,
                    }
                }
                case EXTRACTED_HIDEN_INFORMATION: {
                    return {
                        ...state,
                        isLoading:false,
                        isLoaded:true,
                        embeddedInformaiton:action.embeddedInformaiton
                    }
                }
                case EXTRACT_HIDEN_INFORMATION_FAIL: {
                    return {
                        ...state,
                        isLoading:false,
                        isLoaded:true,
                        error:action.message,
                    }
                }
                case GET_EMBEDDED_IMAGE_BASE64: {
                    return {
                        ...state,
                        embeddedImage: action.embeddedImageBase64
                    }
                }
                case GET_ORIGINAL_IMAGE_ID: {
                    return {
                        ...state,
                        originalImageId:action.originalImageId,
                    }
                }
                case CLEAR_FORM:{
                    defaultState
                }
                default:return state
            }
        }