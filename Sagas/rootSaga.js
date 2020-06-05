import {ImageEmbeddingSaga} from './ImageProcessSagas/ImageEmbeddingSaga'
import {getState} from 'redux'
const sagas={
    ImageEmbeddingSaga,
}

export function registerWithMiddleware (middleware,store){
    for(let name in sagas){
        middleware.run(sagas[name],store.dispatch,store,getState)
    }
}