import axios from 'axios';

export const addNewUser = (username, userage) => {
    return {
        type: "ADD_USER",
        payload: {
            name: username,
            age: userage
        }
    }
}

export const setWeather = (weather) => {
    return {
        type: "ADD_WEATHER",
        weather
    }
}

export const getWeather = () => {
    return (dispatch) => {
        axios.get('http://api.apixu.com/v1/current.json?key=4d473de92ffd48ad8ff150038171907&q=Paris')
            .then((res)=>{ return res;})
            .then((item) => {
                dispatch(setWeather(item))
            })
            .catch(error => {
                throw (error);
            })
    }
}