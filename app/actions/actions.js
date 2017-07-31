import axios from 'axios';

export const setWeather = (weather) => {
    return {
        type: "ADD_WEATHER",
        payload: weather.data
    }
}

export const loadingWeather = (bool) => {
    return {
        type: "LOADING_WEATHER",
        payload: bool
    }
}

export const errorWeather = (bool) => {
    return {
        type: "ERROR_WEATHER",
        payload: bool
    }
}

export const getWeather = (city) => {
    return (dispatch) => {
        dispatch(loadingWeather(true));

        axios.get(`https://api.apixu.com/v1/forecast.json?key=4d473de92ffd48ad8ff150038171907&q=${city}&days=10`)
            .then(res => {
                if (!res) {
                    return false;
                }
                dispatch(loadingWeather(false));
                return res;
            })
            .then((res) => {
                dispatch(setWeather(res));
            })
            .catch(error => {
                dispatch(errorWeather(true))
            })
    }
}