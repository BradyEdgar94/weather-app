import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  initiateWeatherFetching
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
        dispatch(initiateWeatherFetching());
        dispatch(updateDisplay(val));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
