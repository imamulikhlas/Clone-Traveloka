const initialState = {
    results: [], //GET ALL
    data : {}, //Get by id
    isLoading: false,
    isError: false,
    isSuccess : false,
    location: '',
}

const hotelsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_HOTELS_LOCATION_PENDING':
            return {
                ...state,
                isLoading: true,
            }
        case 'GET_HOTELS_LOCATION_FULFILLED':
            return {
                ...state,
                isLoading: false,
                results : action.payload.data
            }
        case 'GET_LOCATION_FULFILLED':
            return{
                ...state,
                data : action.payload.data
            }
        case 'GET_LOCATION':
            return{
                ...state,
                location: action.payload
            }
        case 'SEARCH_BY_LOCATION_PENDING':
            return{
                ...state,
                isLoading : true,
            }
        case 'SEARCH_BY_LOCATION_FULFILLED':
            return{
                ...state,
                isLoading : false,
                results : action.payload.data
            }
        default:
            return state
    }
}

export default hotelsReducer