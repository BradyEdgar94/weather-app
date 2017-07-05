import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import weather from './weather'
import display from './display'

export default combineReducers({
    routing: routerReducer,
    weather,
    display
})
