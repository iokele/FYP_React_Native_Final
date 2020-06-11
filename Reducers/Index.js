import {combineReducers} from 'redux'
import ImageEmbeddingReducer from './ImageProcessReducers/ImageEmbeddingReducer'
import ImageExtractionReducer from './ImageProcessReducers/ImageExtractionReducer'
const rootReducer = combineReducers({
    ImageEmbedding:ImageEmbeddingReducer,
    ImageExtraction:ImageExtractionReducer,
})

export default rootReducer