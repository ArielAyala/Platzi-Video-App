function videos(state = {}, action) {
    switch (action.type) {
        case 'SET_SUGGESTION_LIST': {
            retun {...state, ...action.payload}
                movies:[]
            }
        }
        case 'SET_CATEGORY_LIST': {

        }

    }
    return state;
}

export default videos;