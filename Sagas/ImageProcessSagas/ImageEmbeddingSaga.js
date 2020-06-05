import {put,delay,takeLeading} from 'redux-saga/effects'
import {LOAD_EMBEDDING_IMAGE,loadEmbeddingImage
,EMBEDDING_IMAGE_LOADED,loadedEmbeddingImage,REQUEST_EMBEDDING,REQUEST_EMBEDDING_FAIL,failRequestEmbedding
,EMBEDDING_IMAGE_LOADED_FAILED,failLoadedEmbeddingImage,} from "../../Actions/ImageProcessActions/ImageEmbeddingAction"
import {getEmbeddedImageID,getEmbeddedImage}from "../../API/APIHelper"
function* fetchRequestEmbedding(dispatch,getState,action){
    try{
        const userId = action.userId;
        const imageBase64 = action.imageBase64;
        const filter = action.filter;
        const embeddedImageId = yield call (getEmbeddedImageID(userId,imageBase64,filter))
        if(embeddedImageId!=null){
            yield put(loadEmbeddingImage(embeddedImageId))
        }
        else{
            yield put(failRequestEmbedding("Cannot get response from server"))
        }
    }
    catch(e){
        yield put(failRequestEmbedding(e))
    }

}

function* fetchLoadEmbeddingImage (dispatch, getState, action){
    try{

        const embeddedImage = yield call (getEmbeddedImage(action.embeddedImageId))
        if(embeddedImage!=null){
            yield put (loadedEmbeddingImage(embeddedImageId))
        }
        else {
            failLoadedEmbeddingImage("Cannot get embedded image from database")
        }
    }
    catch (e){
        yield put(failLoadedEmbeddingImage(e))
    }
    
    
}
export function*ImageEmbeddingSaga(dispatch,getState){
    yield takeLeading(REQUEST_EMBEDDING, fetchRequestEmbedding,dispatch,getState)
    yield takeLeading (LOAD_EMBEDDING_IMAGE,fetchLoadEmbeddingImage,dispatch,getState)
}