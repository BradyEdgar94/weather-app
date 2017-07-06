import React from 'react';
import injectSheet from 'react-jss';
import styles from './style';

const ListItem = ({ classes, item = {}, clickAction, active, deleteAction }) => (
    <li className={`${classes.container} ${active && classes.active}`}>
        <button onClick={() => clickAction(item)}>
            {item.weatherData && <img src={`../../../../images/icons/${item.weatherData.weather[0].icon}.png`} alt="" className={classes.icon} />}
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
            <a className={classes.delete} href="javascript:void(0)" onClick={() => deleteAction(item.capital)}><img src={`../../../../images/icons/delete.png`} /></a>
        </button>
    </li>
);

export default injectSheet(styles)(ListItem)
