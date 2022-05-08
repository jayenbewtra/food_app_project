import axios from "axios";


export const getCuisines = (onSuccess, onFailure) => {
    const config = {
        headers:{
            "content-type":"application/json"
        }
    }
    
    const urlParams = {
        app_id:"ffc320d1",
        app_key:"fc85300e9bf24822a410644a57d17815",
        q:"chicken",
        type:"public"
    }
    const searchParams = new URLSearchParams(urlParams)


    axios.get(`https://api.edamam.com/api/recipes/v2?${searchParams.toString()}`,config).then(onSuccess).catch(onFailure)

}