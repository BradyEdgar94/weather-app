import React from 'react';
import injectSheet from 'react-jss';
import styles from './style';

const ListItem = ({ classes, item = {}, clickAction, active }) => (
    <li className={`${classes.container} ${active && classes.active}`}>
        {console.log('item', item)}
        <button onClick={() => clickAction(item)}>
            {item.weatherData && <img src={`http://openweathermap.org/img/w/${item.weatherData.weather[0].icon}.png`} alt="" className={classes.icon} />}
            <p>
                {item.capital}
                <span>
                    {item.weatherData && item.weatherData.weather[0].description},
                    {item.weatherData && <strong>&nbsp;temperature: </strong>}
                    {item.weatherData && item.weatherData.main.temp} K;
                    {item.weatherData && <strong>&nbsp;humidity: </strong>}
                    {item.weatherData && item.weatherData.main.humidity}%
                    {item.weatherData && <strong>&nbsp;wind: </strong>}
                    {item.weatherData && item.weatherData.wind.speed} mps
                </span>
            </p>
        </button>
    </li>
);

export default injectSheet(styles)(ListItem)
