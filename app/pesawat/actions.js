import axios from 'axios';

export function allPesawats(){
    return {
        type: 'ALL_PESAWATS',
        payload: axios({
            method: 'GET',
            url: 'http://192.168.0.5:3000/pesawats'
        })
    }
}

export function createPesawats(value){
    return {
        type: 'CREATE_PESAWATS',
        payload: axios({
            method: 'POST',
            url: 'http://192.168.0.5:3000/pesawats',
            data: value
        })
    }
}