import {combineReducers} from 'redux'
import ImageEmbeddingReducer from './ImageProcessReducers/ImageEmbeddingReducer'

const rootReducer = combineReducers({
    ImageEmbedding:ImageEmbeddingReducer,

})

export default rootReducer