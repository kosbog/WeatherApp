const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TEST':
            state = {
                ...state,
                age: action.res
            }
    }
    return state;
}

export default testReducer;