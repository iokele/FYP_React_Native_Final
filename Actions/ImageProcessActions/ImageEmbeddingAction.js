export const LOAD_EMBEDDING_INFORMATION = 'LOAD_EMBEDDING_INFORMATION'
export function loadEmbeddingInformation (){
    return {
        type: LOAD_EMBEDDING_INFORMATION,
    }
}

export const EMBEDDING_INFORMATION_LOADED = 'EMBEDDING_INFORMATION_LOADED'
export function loadedEmbeddingInformation (embeddingInformation){
    return {
        type:EMBEDDING_INFORMATION_LOADED,
        embeddingInformation,
    }
}

export const EMBEDDING_INFORMATION_LOADED_FAILED = 'EMBEDDING_INFORMATION_LOADED_FAILED'
export function failLoadedEmbeddingInformation (message){
    return{
        type:EMBEDDING_INFORMATION_LOADED_FAILED,
        message
    }
}

export const LOAD_EMBEDDING_IMAGE = 'LOAD_EMBEDDING_IMAGE'
export function loadEmbeddingImage (){
    return {
        type: LOAD_EMBEDDING_IMAGE,
    }
}

export const EMBEDDING_IMAGE_LOADED = 'EMBEDDING_IMAGE_LOADED'
export function loadedEmbeddingImage (embeddingImage){
    return {
        type:EMBEDDING_IMAGE_LOADED,
        embeddingImage,
    }
}

export const EMBEDDING_IMAGE_LOADED_FAILED = 'EMBEDDING_IMAGE_LOADED_FAILED'
export function failLoadedEmbeddingImage (message){
    return{
        type:EMBEDDING_IMAGE_LOADED_FAILED,
        message
    }
}



