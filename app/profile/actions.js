import axios from 'axios';

export function allProfiles(){
    return {
        type: 'ALL_PROFILES',
        payload: axios({
            method: 'GET',
            url: 'http://192.168.0.5:3000/profiles'
        })
    }
}

export function createProfiles(value){
    return {
        type: 'CREATE_PROFILES',
        payload: axios({
            method: 'POST',
            url: 'http://192.168.0.5:3000/profiles',
            data: value
        })
    }
}