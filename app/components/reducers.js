const initialState = [];

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_WEATHER':
            return state = [
                {
                    current: {
                        temp: action.payload.current.temp_c,
                        _icon: action.payload.current.condition.icon,
                        _name: action.payload.current.condition.text,
                        secondary: {
                            feels: `${action.payload.current.feelslike_c} C`,
                            wind: `${action.payload.current.wind_kph} km/h, ${action.payload.current.wind_dir}`,
                            humidity: `${action.payload.current.humidity} %`,
                            cloud: `${action.payload.current.cloud} %`,
                        }
                    }
                },
                {
                    forecast: {
                        days: action.payload.forecast.forecastday
                    }
                }
            ]
            break;
        default:
            return state;
    }
}

export default userReducer;