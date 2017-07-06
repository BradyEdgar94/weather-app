import axios from 'axios';
import slug from 'slug';
var jsonfile = require('jsonfile');

export const UPDATE_LOCATION = 'weather/UPDATE_LOCATION';
export const STORE_LOCATIONS = 'weather/STORE_LOCATIONS';
export const UPDATE_DISPLAY = 'weather/UPDATE_DISPLAY';
export const REMOVE_LOCATION = 'weather/REMOVE_LOCATION';

export const fetchLocationWeather = (locations) => dispatch => {
    function fetchData (location) {
        if (!location) {
            return;
        }

        console.log('location', location);

        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=1a8f4ae81a46e6c96cc8cf7d0d2c2473`)
            .then((response) => {
                dispatch({type: UPDATE_LOCATION, value: {key: location, data: response.data}})
            })
            .catch((error) => {
                // console.warn('error', error);
            });
    }

    addWeatherDataToLocation(locations);
    function addWeatherDataToLocation (locations) {
        if (locations instanceof Object) {
            Object.keys(locations).forEach(location => {
                fetchData(location);
            });
        } else {
            fetchData(locations);
        }
    }
}

// grab all location and whether data on app load
export const initiateWeatherFetching = () => dispatch => {
    fetchLocations();
    // grab locations from local CSV file
    function fetchLocations () {
        return axios.get(`/capitals.csv`)
            .then(({ data }) => {
                // store intial locations JSON object
                dispatch(fetchLocationWeather(csvJSON(data)));
                dispatch({type: STORE_LOCATIONS, value: csvJSON(data)})
            })
            .catch((error) => {
                // console.log('error', error);
            });
    }

    // convert CSV file to JSON object
    function csvJSON(csv){
        const lines   = csv.split("\n");
        const result  = {};
        const headers = lines[0].split(",");

        lines.forEach((line, i) => {
            const capital = line.split(",")[1]

            if (!capital || capital == '"capital"') {
                return;
            }

            result[slug(capital)] = {};
            headers.forEach((key, i) => {
                if (!line.split(",")[i]) {
                    return;
                }

                result[slug(capital)][formatText(key)] = slug(formatText(line.split(",")[i]))
            });
        });

        function formatText (text) {
            return text.replace(/['"]+/g, '');
        }

        return result; //JSON
    }
}

export const updateDisplay = (data) => dispatch => {
    dispatch({
        type: UPDATE_DISPLAY,
        value: {
            capital: 'Wellington',
            country: 'New Zealand',
            date: '',
            stats: []
        }
    })
}

export const removeLocation = (value) => dispatch => {
    dispatch({
        type: REMOVE_LOCATION,
        value
    })
}
