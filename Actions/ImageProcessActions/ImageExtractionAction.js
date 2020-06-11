export const EXTRACT_HIDEN_INFORMATION = 'EXTRACT_HIDEN_INFORMATION'
export function  extractHidenInformation(userId, embeddedImage, originalImageId){
    return {
    type:EXTRACT_HIDEN_INFORMATION,
    userId,
    embeddedImage,
    originalImageId,
    }
}

export const EXTRACTED_HIDEN_INFORMATION = 'EXTRACTED_HIDEN_INFORMATION'
export function extractedHidenInformation (embeddedInformaiton){
    return {
    type:EXTRACTED_HIDEN_INFORMATION,
    embeddedInformaiton
    }
}

export const EXTRACT_HIDEN_INFORMATION_FAIL = 'EXTRACT_HIDEN_INFORMATION_FAIL'
export function failExtractHidenInformation (message){
    return {
    type:EXTRACT_HIDEN_INFORMATION_FAIL,
    message,
    }
}

export const GET_EMBEDDED_IMAGE_BASE64 = 'GET_EMBEDDED_IMAGE_BASE64'
export function getEmbeddedImageBase64 (embeddedImageBase64){
    return {
        type: GET_EMBEDDED_IMAGE_BASE64,
        embeddedImageBase64
    }
}

export const GET_ORIGINAL_IMAGE_ID = 'GET_ORIGINAL_IMAGE_ID'
export function getOriginalImageId(originalImageId){
    return {
        type: GET_ORIGINAL_IMAGE_ID,
        originalImageId
    }
}
export const CLEAR_FORM = 'CLEAR_FORM'
export function clearForm (){
    return {
        type: CLEAR_FORM,
    }
}

export const READING_FILE ='READING_FILE'
export function readingFile (){
    return{
        type:READING_FILE
    }
}

export const LOAD_ORIGINAL_IMAGE_LIST = 'LOAD_ORIGINAL_IMAGE_LIST'
export function loadOrginalImageList (userId){
    return{
        type:LOAD_ORIGINAL_IMAGE_LIST,
        userId
    }
}

export const ORIGINAL_IMAGE_LIST_LOADED = 'ORIGINAL_IMAGE_LIST_LOADED'
export function loadedOrginalImageList (imageList){
    return{
        type:ORIGINAL_IMAGE_LIST_LOADED,
        imageList,
    }
}