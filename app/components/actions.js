import axios from 'axios';



const addNewUser = (username, userage) =>{
    return {
        type: "ADD_USER",
        payload: {
            name: username,
            age: userage
        }
    }
}

export default addNewUser;