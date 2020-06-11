import {put,delay,takeLeading,call} from 'redux-saga/effects'
import {EXTRACT_HIDEN_INFORMATION,EXTRACTED_HIDEN_INFORMATION,extractedHidenInformation,failExtractHidenInformation} from '../../Actions/ImageProcessActions/ImageExtractionAction'
import {getHiddenInformation} from "../../API/APIHelper"


function* fetchExtractHidenInformation (dispatch,getState,action) {
    try{
            const userId = action.userId 
            const embeddedImage =action.embeddedImage
            const originalImageId =action.originalImageId
            const hiddenInformation = yield call (getHiddenInformation, userId,embeddedImage,originalImageId)
            const Json = yield hiddenInformation.json()
            if(Json.payload.hiddenInformation!=null){

                yield put(extractedHidenInformation (Json.payload.hiddenInformation))
            }
            else {
                yield put(failExtractHidenInformation(Json.error))
            }
    }
    catch(e){
        yield put(failExtractHidenInformation(e))
    }
}


export function*ImageExtractionSaga(dispatch,getState){
    yield takeLeading(EXTRACT_HIDEN_INFORMATION, fetchExtractHidenInformation,dispatch,getState)
}