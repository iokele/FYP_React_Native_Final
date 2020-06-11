const API_BASE_ADDRESS = 'http://192.168.0.180:8080';


 export function getEmbeddedImageID(userId, imageBase64, name,filter){
        const body = {userId:userId,imageBase64:imageBase64,name:name,filter:filter};
        const url = API_BASE_ADDRESS + "/getEmbeddedImage";
        return fetch(url, {method:'POST', body:JSON.stringify(body)})
    }

export function getTempEmbeddedImage(userId, imageBase64, name,filter){
    const body = {userId:userId,imageBase64:imageBase64,name:name,filter:filter};
    const url = API_BASE_ADDRESS + "/getTempEmbeddedImage";
    return fetch(url, {method:'POST', body:JSON.stringify(body)})
}
export function cancelEmbedding (userId){
    const url = API_BASE_ADDRESS + "/cancelTempEmbedding/" + userId
    return fetch (url, {method:'GET'})
}
export function confirmEmbedding(userId){
    const url =API_BASE_ADDRESS + "/confirmEmbeddedImage/" + userId
    return fetch(url,{method:'GET'})
}

export function getEmbeddedImage (embeddedImageId){
    const url = API_BASE_ADDRESS + "/getEmbeddedImageFromDatabase/" + embeddedImageId
    return fetch (url, {method: 'GET'})
}

export function getHiddenInformation (userId, embeddedImage, originalImageId){
    const body = {userId:userId,embeddedImage:embeddedImage,originalImageId:originalImageId}
    const url = API_BASE_ADDRESS + "/extractFromImage"
    return fetch(url, {method:'POST', body: JSON.stringify(body)})

}

export function testConnection(){
    const url = API_BASE_ADDRESS+ "/get/2"
    return fetch(url, {method:'GET'} )
}
