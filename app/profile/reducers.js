const initialState = {
    results: [],
    isLoading: false,
    isError: false,
    isSuccess: false
}

const profilesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ALL_PROFILES_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'ALL_PROFILES_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: true,
                results: action.payload.data
            }
        case 'ALL_PROFILES_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
                results: action.payload.data
            }

        case 'CREATE_PROFILES_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'CREATE_PROFILES_FULFILLED':
            state.results.push(action.payload.data);
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: true
            }
        case 'CREATE_PROFILES_REJECTED':
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

export default profilesReducer