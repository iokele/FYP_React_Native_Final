import { Reducer } from 'redux'
import {LOAD_EMBEDDING_INFORMATION,EMBEDDING_INFORMATION_LOADED,EMBEDDING_IMAGE_LOADED,
    EMBEDDING_IMAGE_LOADED_FAILED,EMBEDDING_INFORMATION_LOADED_FAILED,LOAD_EMBEDDING_IMAGE,
    } from '../../Actions/ImageProcessActions/ImageEmbeddingAction'

const defaultState = {
    dataloading:false,
    dataloaded:false,
    imageLoading:false,
    imageLoaded:false,
    dataLoadedFail:false,
    imageLoadedFail:false,
    informationError:"",
    imageError:"",
    embeddingInformaiont:'',
    embeddingImage: null,

}
export default function ImageEmbeddingReducer (
    state={
        ...defaultState
    },action
) {
    switch(action.type){
        case LOAD_EMBEDDING_INFORMATION:{
            return{
                ...state,
                dataloading:true,
            }
        }
        case EMBEDDING_INFORMATION_LOADED:{
            return{
                ...state,
                dataloading:false,
                dataloaded:true,
                embeddingInformaiont: action.embeddingInformation,

            }
        }
        case EMBEDDING_INFORMATION_LOADED_FAILED:{
            return{
                ...state,
                dataloaded:true,
                dataLoadedFail:true,
                informationError: action.message,
            }
        }
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
                embeddingImage:action.embeddingImage
            }
        }
        case EMBEDDING_IMAGE_LOADED_FAILED:{
            return{
                ...state,
                imageLoaded:true,
                imageLoadedFail:true,
                imageError:action.message
            }
        }
        default:return state
    }
}