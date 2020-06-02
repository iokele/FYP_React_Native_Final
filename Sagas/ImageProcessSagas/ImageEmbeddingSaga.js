import {put,delay,takeLeading} from 'redux-saga/effects'
import {LOAD_EMBEDDING_IMAGE,loadEmbeddingImage,LOAD_EMBEDDING_INFORMATION,loadEmbeddingInformation
,EMBEDDING_IMAGE_LOADED,loadedEmbeddingImage,EMBEDDING_INFORMATION_LOADED,loadedEmbeddingInformation
,EMBEDDING_IMAGE_LOADED_FAILED,failLoadedEmbeddingImage,EMBEDDING_INFORMATION_LOADED_FAILED,failLoadedEmbeddingInformation} from "../../Actions/ImageProcessActions/ImageEmbeddingAction"

function* fetchEmbeddingInformation(dispatch,getState,action){
    try{
        yield delay(100)

    }
    catch(e){
    }

}
export function*ImageEmbeddingSaga(dispatch,getState){
    yield takeLeading(LOAD_EMBEDDING_INFORMATION, fetchEmbeddingInformation,dispatch,getState)
}