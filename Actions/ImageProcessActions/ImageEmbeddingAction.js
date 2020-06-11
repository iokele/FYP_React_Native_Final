// export const LOAD_EMBEDDING_INFORMATION = 'LOAD_EMBEDDING_INFORMATION'
// export function loadEmbeddingInformation (){
//     return {
//         type: LOAD_EMBEDDING_INFORMATION,
       
//     }
// }

// export const EMBEDDING_INFORMATION_LOADED = 'EMBEDDING_INFORMATION_LOADED'
// export function loadedEmbeddingInformation (embeddingInformation){
//     return {
//         type:EMBEDDING_INFORMATION_LOADED,
//         embeddingInformation,
//     }
// }

// export const EMBEDDING_INFORMATION_LOADED_FAILED = 'EMBEDDING_INFORMATION_LOADED_FAILED'
// export function failLoadedEmbeddingInformation (message){
//     return{
//         type:EMBEDDING_INFORMATION_LOADED_FAILED,
//         message
//     }
// }

export const REQUEST_EMBEDDING ="REQUEST_EMBEDDING"
export function requestEmbedding(userId, imageBase64, name,filter){
    return{
        type: REQUEST_EMBEDDING,
        userId,
        imageBase64,
        name,
        filter
    }
}
export const REQUEST_EMBEDDING_FAIL = "REQUEST_EMBEDDING_FAIL"
export function failRequestEmbedding(message){
    return{
        type:REQUEST_EMBEDDING_FAIL,
        message
    }
}
export const LOAD_EMBEDDING_IMAGE = 'LOAD_EMBEDDING_IMAGE'
export function loadEmbeddingImage (userId, imageBase64, name,filter){
    return {
        type: LOAD_EMBEDDING_IMAGE,
        userId,
        imageBase64,
        name,
        filter
    }
}
export const EMBEDDING_IMAGE_LOADED = 'EMBEDDING_IMAGE_LOADED'
export function loadedEmbeddingImage (embeddedImage){
    return {
        type:EMBEDDING_IMAGE_LOADED,
        embeddedImage,
    }
}

export const EMBEDDING_IMAGE_LOADED_FAILED = 'EMBEDDING_IMAGE_LOADED_FAILED'
export function failLoadedEmbeddingImage (message){
    return{
        type:EMBEDDING_IMAGE_LOADED_FAILED,
        message
    }
}

export const CANCEL_EMBEDDING = 'CANCEL_EMBEDDING'
export function cancelEmbedding (userId){
    return{
        type:CANCEL_EMBEDDING,
        userId
    }
}
export const CANCEL_FAIL ='CANCEL_FAIL'
export function cancelFail (message){
    return{
        type:CANCEL_FAIL,
        message
    }
}
export const EMBEDDING_CANCELED ='EMBEDDING_CANCELED'
export function canceledEmbedding (){
    return {
        type:EMBEDDING_CANCELED,
    }
}

export const CONFIRM_EMBEDDING ='CONFIRM_EMBEDDING'
export function confirmEmbedding (userId){
    return{
        type:CONFIRM_EMBEDDING,
        userId
    }
}

export const CONFIRM_FAIL = 'CONFIRM_FAIL'
export function confirmFail (message){
    return{
        type:CONFIRM_FAIL,
        message,
    }
}

export const EMBEDDING_CONFIRMED = 'EMBEDDING_CONFIRMED'
export function confirmedEmbedding (){
    return{
        type:EMBEDDING_CONFIRMED,
    }
}

export const READING_FILE ='READING_FILE'
export function readingFile (){
    return{
        type:READING_FILE
    }
}