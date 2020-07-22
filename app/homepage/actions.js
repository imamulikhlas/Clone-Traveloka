import axios from 'axios';

export function allHomepages(){
    return {
        type: 'ALL_HOMEPAGES',
        payload: axios({
            method: 'GET',
            url: 'http://192.168.0.5:3000/homepages'
        })
    }
}

export function createHomepages(value){
    return {
        type: 'CREATE_HOMEPAGES',
        payload: axios({
            method: 'POST',
            url: 'http://192.168.0.5:3000/homepages',
            data: value
        })
    }
}