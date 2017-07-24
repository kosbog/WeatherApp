const initialState = [];

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_WEATHER':
            const days = action.payload.forecast.forecastday.map((item, index) => {
                return (
                    {
                        id: `0${index}`,
                        icon: item.day.condition.icon,
                        date: item.date,
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