import {ImageEmbeddingSaga} from './ImageProcessSagas/ImageEmbeddingSaga'
import {ImageExtractionSaga} from './ImageProcessSagas/ImageExtractionSaga'
import {getState} from 'redux'
const sagas={
    ImageEmbeddingSaga,
    ImageExtractionSaga,
}

export function registerWithMiddleware (middleware,store){
    for(let name in sagas){
        middleware.run(sagas[name],store.dispatch,store,getState)
    }
}