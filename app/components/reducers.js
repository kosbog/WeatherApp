const initialState = [{
    name: "John",
    age: 12
}]

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_USER':
            return state = [
                ...state,
                action.payload
            ]
            break;
        default:
            return state;
    }

}

