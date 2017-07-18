import axios from 'axios';

export const addUser = (user) => {
    return {
        type: "ADD_USER",
        payload: user
    }
}