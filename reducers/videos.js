function videos(state = {}, action) {
    switch (action.type) {
        case 'SET_SUGGESTION_LIST': {
            return { ...state, ...action.payload }
            // movies:[]
        }
        case 'SET_CATEGORY_LIST': {
            return { ...state, ...action.payload }
        }
        default:
            return state
    }
    return state;
}


export default videos;