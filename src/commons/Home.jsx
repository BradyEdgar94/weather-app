import React from 'react';
import slug from 'slug';
import {
    lifecycle
} from 'recompose';
import ListItem from './components/ListItem';
import injectSheet from 'react-jss';

const enhance =  lifecycle({
    componentDidMount() {
        this.props.initiateWeatherFetching();
    },
 })
const styles = {
    container: {
        overflow: 'hidden',
        fontFamily: 'Open Sans, sans-serif'
    },
    leftSide: {
        width: '100%',
        height: '50vh',
        overflow: 'scroll',
        '@media (min-width: 960px)': {
            width: '50%',
            float: 'left',
            height: '100vh'
        }
    },
    rightSide: {
        position: 'relative',
        width: '100%',
        height: '50vh',
        padding: '5rem 0rem',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: 'url("/images/cloudy.jpg")',
        '@media (min-width: 960px)': {
            height: '100vh',
            width: '50%',
            float: 'right',
            padding: 0
        }
    },
    selectMessage: {
        position: 'absolute',
        left: '10%',
        width: '80%',
        top: '50%',
        padding: '1rem 0rem',
        fontSize: '1rem',
        textAlign: 'center',
        color: '#fff',
        lineHeight: '1.15',
        transform: 'translateY(-50%)',
        fontWeight: 100,
        '& span': {
            fontWeight: 700,
            display: 'block',
            fontSize: '1rem',
            marginBottom: '1rem',
            '@media (min-width: 960px)': {
                fontSize: '2rem'
            }
        }
    },
    overlay: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
    iconBG: {
        width: '7rem',
        height: '7rem',
        display: 'block',
        borderRadius: '6rem',
        margin: 'auto',
        marginBottom: '1rem',
        backgroundColor: '#fff'
    },
    icon: {
        display: 'block',
        width: '3rem',
        margin: 'auto',
        padding: '2rem',
        position: 'relative'
    },
    dynamicContent: {
        position: 'absolute',
        left: 0,
        width: '100%',
        top: '50%',
        padding: '1rem',
        boxSizing: 'border-box',
        transform: 'translateY(-50%)',
        textAlign: 'center',
        '@media (min-width: 960px)': {
            padding: '1rem 4rem',
        },
        color: '#fff',
        '& h1': {
            fontWeight: 700,
            fontSize: '2rem',
            paddingBottom: '1.5rem',
            '@media (min-width: 960px)': {
                fontSize: '5rem'
            },
            '& span': {
                display: 'block',
                fontSize: '1rem',
                fontWeight: '200',
                marginTop: '1rem'
            }
        },
        '& li': {
            margin: '1rem 0',
            display: 'block',
            '&:first-child': {
                fontSize: '1.35rem',
                fontWeight: 700
            },
            '& strong': {
                fontWeight: 700
            }
        }
    }
}

const Home = enhance(({ weatherData, classes, display, updateDisplay, initiateWeatherFetching }) => (
    <div>
        <section className={classes.container}>
            <div className={classes.rightSide}>
                <span className={classes.overlay}></span>
                {
                    display.capital
                        ?   <div className={classes.dynamicContent}>
                                {weatherData[display.capital].weatherData &&
                                    <span className={classes.iconBG}>
                                        <img src={`../../../../images/icons/${weatherData[display.capital].weatherData.weather[0].icon}.png`} alt="" className={classes.icon} />
                                    </span>}
                                <h1>{display.capital}, {display.country} <span>{display.date}</span></h1>
                                <ul>
                                    {display.stats.map(item => <li>{item.label && <span><strong>{item.label}</strong>: </span>}{item.value}</li>)}
                                </ul>
                            </div>
                        :   <p className={classes.selectMessage}><span>Check out some weather from all around the world.</span> Start by selecting your favourite capital.</p>
                }
            </div>
            <div className={classes.leftSide}>
                <ul>
                    {Object.keys(weatherData).map(item => <ListItem key={`${weatherData[item].capital}-list-item`} active={slug(display.capital) == slug(weatherData[item].capital)} item={weatherData[item]} clickAction={updateDisplay} />)}
                </ul>
            </div>
        </section>
    </div>
));

export default injectSheet(styles)(Home);
