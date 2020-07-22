import axios from 'axios';

export function getHotelsByLocations(location){
    return {
        type: 'GET_HOTELS_LOCATION',
        payload: axios({
            method: 'GET',
            url: `http://192.168.0.19:8000/api/hotel/?location_id__name=${location}`
        })
    }
}

export function getLocation(value){
    return{
        type : 'GET_LOCATION',
        payload :  value
    }
}

export function searchByLocations(){
    return{
        type : 'SEARCH_BY_LOCATION',
        payload : axios({
            method: 'GET',
            url : 'http://192.168.0.19:8000/api/location/'
        })
    }
}