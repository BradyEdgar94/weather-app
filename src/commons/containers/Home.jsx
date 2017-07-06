import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  initiateWeatherFetching,
  fetchLocationWeather,
  removeLocation
} from '../actions/weather'
import {
  updateDisplay
} from '../actions/display'
import Home from '../Home'

const mapStateToProps = ({ weather, display }) => ({
    weatherData: weather.data,
    display: display.data
})

const mapDispatchToProps = (dispatch) => ({
    initiateWeatherFetching () {
        dispatch(initiateWeatherFetching());
    },
    updateDisplay (val) {
        dispatch(fetchLocationWeather(val.capital));
        dispatch(updateDisplay(val));
    },
    deleteLocation (location) {
        dispatch(removeLocation(location));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
