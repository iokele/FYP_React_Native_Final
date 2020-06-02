export const WAIT_EMBEDDING_KEY = 'WAIT_EMBEDDING_KEY'
export function waitEmbeddedKey (){
    return {
    type:WAIT_EMBEDDING_KEY,
    }
}

export const WAIT_EMBEDDED_IMAGE = 'WAIT_EMBEDDED_IMAGE'
export function waitEmbeddedImage (){
    return {
    type:GET_EMBEDDED_IMAGE,
    }
}

export const GET_EMBEDDING_KEY = 'GET_EMBEDDING_KEY'
export function getEmbeddedKey (key){
    return {
    type:GET_EMBEDDING_KEY,
    key
    }
}

export const GET_EMBEDDED_IMAGE = 'GET_EMBEDDED_IMAGE'
export function getEmbeddedImage (image){
    return {
    type:GET_EMBEDDED_IMAGE,
    image
    }
}

export const FAIL_GET_EMBEDDING_KEY = 'FAIL_GET_EMBEDDING_KEY'
export function failGetEmbeddedKey (message){
    return {
    type:FAIL_GET_EMBEDDING_KEY,
    message
    }
}

export const FAIL_GET_EMBEDDED_IMAGE = 'FAIL_GET_EMBEDDED_IMAGE'
export function failGetEmbeddedImage (message){
    return {
    type:FAIL_GET_EMBEDDED_IMAGE,
    message
    }
}