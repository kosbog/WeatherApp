import axios from 'axios';

export const testGet = (res) => {
    return {
        type: "TEST",
        res
    }
}

export const getCurrenWeather = () => {
    return {
        type: "GET_CURRENT",
        payload: "current"
    }
}

export const getTomorrowWeather = () => {
    return {
        type: "GET_TOMORROW",
        payload: "tomorrow"
    }
}

export const getFiveDaysWeather = (elem) => {
    return {
        type: "GET_FIVE",
        payload: "five"
    }
}

export const functest = () => {
    return (dispatch) => {
        var age = 33;
        dispatch(testGet(age));
    }
}