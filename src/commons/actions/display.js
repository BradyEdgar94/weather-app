import { updateTime } from './clock';
import slug from 'slug';

export const UPDATE_DISPLAY = 'display/UPDATE_DISPLAY';

export const updateDisplay = (value) => (dispatch, getState) => {
    const stats = [];

    if (!value.weatherData) {
        return false;
    }

    if (value.weatherData && value.weatherData.weather[0].main) {
        stats.push({value: value.weatherData.weather[0].main});
    }

    if (value.weatherData.main.temp) {
        stats.push({label: 'Temperature', value: `${value.weatherData.main.temp} K`});
    }

    if (value.weatherData.main.pressure) {
        stats.push({label: 'Pressure', value: `${value.weatherData.main.pressure} hPa`});
    }

    if (value.weatherData.main.humidity) {
        stats.push({label: 'Humidity', value: `${value.weatherData.main.humidity}%`});
    }

    if (value.weatherData.wind.speed) {
        stats.push({label: 'Wind', value: `${value.weatherData.wind.speed} mps`});
    }

    if (value.weatherData.coulds) {
        stats.push({label: 'Clouds', value: `${value.weatherData.coulds}%`});
    }

    if (value.weatherData.coord) {
        dispatch(updateTime(value.weatherData.coord));
    }

    value.stats = stats;
    delete value.weatherData;


    dispatch({ type: UPDATE_DISPLAY, value  })
}
