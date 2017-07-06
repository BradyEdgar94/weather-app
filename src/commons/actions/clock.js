import axios from 'axios';
import moment from 'moment-timezone';

export const UPDATE_TIME = 'clock/UPDATE_TIME';


export const updateTime = ({ lon, lat }) => dispatch => {
    const timestamp = Math.floor(Date.now() / 1000);
    getTimeZone();
    setInterval(() => getTimeZone(), 60000);

    function getTimeZone () {
        axios.get(`https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lon}&timestamp=${timestamp}&key=AIzaSyAjYSecXXUlcZtRqdwUXYi9upwPA7ct3P0`)
            .then((response) => {
                const date = moment().tz(response.data.timeZoneId).format("MMMM DD hh:mm z");
                    dispatch({ type: UPDATE_TIME, value: {date}})
            })
            .catch((error) => {
                // console.log('error', error);
            });
    }

}
