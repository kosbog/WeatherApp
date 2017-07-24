import axios from 'axios';

export const setWeather = (weather) => {
    return {
        type: "ADD_WEATHER",
        payload: weather.data
    }
}

export const getWeather = (city) => {
    return (dispatch) => {
        return axios.get(`https://api.apixu.com/v1/forecast.json?key=4d473de92ffd48ad8ff150038171907&q=${city}&days=10`)
            .then((res) => {
                dispatch(setWeather(res))
            })
            .catch(error => {
                alert(error);
            })
    }
}