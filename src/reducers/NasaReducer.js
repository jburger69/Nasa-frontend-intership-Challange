const initialState = {
    photos: [],
    loading: false
}
const nasaReducer = (state = initialState, action ) => {
    switch(action.type) {  
        case "GET_PHOTOS":
            return {
                ...state,
                photos: [...state.photos, action.payload]
            }
        default:
            return state
    }
}

export default nasaReducer;