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