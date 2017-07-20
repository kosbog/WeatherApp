const initialState = [];

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_WEATHER':
            return state = [
                ...state,
                {
                weather: action.payload
                }
            ]
            break;
        default:
            return state;
    }
}

export default userReducer;