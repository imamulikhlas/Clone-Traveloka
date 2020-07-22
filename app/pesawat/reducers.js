const initialState = {
    results: [],
    isLoading: false,
    isError: false,
    isSuccess: false
}

const pesawatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ALL_PESAWATS_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'ALL_PESAWATS_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: true,
                results: action.payload.data
            }
        case 'ALL_PESAWATS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
                results: action.payload.data
            }

        case 'CREATE_PESAWATS_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'CREATE_PESAWATS_FULFILLED':
            state.results.push(action.payload.data);
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: true
            }
        case 'CREATE_PESAWATS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false
            }
        default:
            return state
    }
}

export default pesawatsReducer