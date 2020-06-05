const API_BASE_ADDRESS = 'http://localhost:8080';


 export function getEmbeddedImageID(userId, imageBase64, filter){
        const body ={userId:userId,imageBase64:imageBase64,filter:filter};
        const url = API_BASE_ADDRESS + "/getEmbeddedImage";
        return fetch(uri, {method:'POST', body})
    }
    

export function getEmbeddedImage (embeddedImageId){
    const url = API_BASE_ADDRESS + "/getEmbeddedImageFromDatabase/" + embeddedImageId
    return fetch (url, {method: 'GET'})
}