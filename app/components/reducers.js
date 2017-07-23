const initialState = [];

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_WEATHER':
            const days = action.payload.forecast.forecastday.map((item, index) => {
                return (
                    {
                        id: `0${index}`,
                        icon: item.day.condition.icon,
                        name: item.day.condition.text,
                        sunrise: item.astro.sunrise,
                        sunset: item.astro.sunset,
                        maxtemp: item.day.maxtemp_c,
                        mintemp: item.day.mintemp_c,
                        wind: item.day.maxwind_kph
                    }
                )
            })

            return state = [
                {
                    current: {
                        temp: action.payload.current.temp_c,
                        _icon: action.payload.current.condition.icon,
                        _name: action.payload.current.condition.text,
                        secondary: {
                            feels: `${action.payload.current.feelslike_c}`,
                            wind: `${action.payload.current.wind_kph} km/h, ${action.payload.current.wind_dir}`,
                            humidity: `${action.payload.current.humidity} %`,
                            cloud: `${action.payload.current.cloud} %`,
                        }
                    }
                },
                {
                    forecast: {
                        days: days
                    }
                }
            ]
            break;
        default:
            return state;
    }
}

export default weatherReducer;