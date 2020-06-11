import {put,delay,takeLeading,call} from 'redux-saga/effects'
import {LOAD_EMBEDDING_IMAGE,loadEmbeddingImage
,EMBEDDING_IMAGE_LOADED,loadedEmbeddingImage,REQUEST_EMBEDDING,REQUEST_EMBEDDING_FAIL,failRequestEmbedding
,EMBEDDING_IMAGE_LOADED_FAILED,failLoadedEmbeddingImage, CANCEL_EMBEDDING,canceledEmbedding,confirmedEmbedding,CONFIRM_EMBEDDING,cancelFail,confirmFail} from "../../Actions/ImageProcessActions/ImageEmbeddingAction"
import {getEmbeddedImageID,getEmbeddedImage,testConnection,getTempEmbeddedImage,cancelEmbedding,confirmEmbedding,}from "../../API/APIHelper"
function* fetchRequestEmbedding(dispatch,getState,action){
    try{
        const userId = action.userId;
        const imageBase64 = action.imageBase64;
        const name=action.name;
        const filter = action.filter;
      
        // const embeddedImageId = yield call (getEmbeddedImageID, userId,imageBase64,name,filter)
        const embeddedImage = yield call (getTempEmbeddedImage, userId,imageBase64,name,filter)
        // const testResult = yield call(testConnection,null)
        // const testRsultJson =yield testResult.json();
        // console.log("testResult" + testRsultJson.default_digital_watermark)
        const Json =yield embeddedImage.json()
         if(Json.payload.status=="s"){
            //  yield put(loadEmbeddingImage(Json.payload.embeddedImageId))
            yield put (loadedEmbeddingImage(Json.payload.embeddedImage))
        }
         else{
             yield put(failLoadedEmbeddingImage("Cannot get response from server"))
         }
    }
    catch(e){
        yield put(failLoadedEmbeddingImage(e))
    }

}

function* fetchCancelEmbedding (dispatch,getState,action){
    try{
        const userId =action.userId
        const response = yield call (cancelEmbedding,userId)
        const Json =yield response.json()
        if(Json.status=="s"){
            yield put (canceledEmbedding())
        }
        else{
            yield put (cancelFail("Fail to cancel the embedding"))
        }
    }
    catch(e){
        yield put (cancelFail(e))
    }

}
function* fetchConfirmEmbedding (dispatch,getState,action){
    try{
        const userId =action.userId
        const response = yield call (confirmEmbedding,userId)
        const Json =yield response.json()
        if(Json.status=="s"){
            yield put (confirmedEmbedding())
        }
        else{
            yield put (confirmFail("Fail to confirm the embedding"))
        }
    }
    catch(e){
        yield put (confirmFail(e))
    }
}
// function* fetchLoadEmbeddingImage (dispatch, getState, action){
//     try{
//         const embeddedImageId =action.embeddedImageID
//         const embeddedImage = yield call (getEmbeddedImage, embeddedImageId)
//         const Json =yield embeddedImage.json()
//         if(Json!=null){
//             yield put (loadedEmbeddingImage(Json.payload.embeddedImageCompressedBase64))
//         }
//         else {
//             failLoadedEmbeddingImage("Cannot get embedded image from database")
//         }
//     }
//     catch (e){
//         yield put(failLoadedEmbeddingImage(e))
//     }
    
    
// }
export function*ImageEmbeddingSaga(dispatch,getState){
    yield takeLeading(LOAD_EMBEDDING_IMAGE, fetchRequestEmbedding,dispatch,getState)
    // yield takeLeading (LOAD_EMBEDDING_IMAGE,fetchLoadEmbeddingImage,dispatch,getState)
    yield takeLeading (CANCEL_EMBEDDING, fetchCancelEmbedding,dispatch,getState)
    yield takeLeading (CONFIRM_EMBEDDING,fetchConfirmEmbedding,dispatch,getState)
}