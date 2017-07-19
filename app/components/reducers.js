const initialState = [{
    name: "John",
    age: 12
}]
 const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return state = [
                ...state,
                {
                    name: action.payload.name,
                    age: action.payload.age
                }
            ]
            break;
        default:
            return state;
    }
}

export default userReducer;