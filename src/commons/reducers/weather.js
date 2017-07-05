import {
    UPDATE_LOCATION,
    STORE_LOCATIONS
} from '../actions/weather';
import {
    UPDATE_TIME
} from '../actions/clock';

const initialState = {
    data: {},
    time: '',
    display: {
        capital: 'Wellington',
        stats: []
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_LOCATION:
            return {
                ...state,
                data: {
                    ...state.data,
                    [action.value.key]: {
                        ...state.data[action.value.key],
                        weatherData: action.value.data
                    }
                }
            }
        case STORE_LOCATIONS:
            return {
                ...state,
                data: action.value
            }
        case UPDATE_TIME:
            return {
                ...state,
                time: action.value
            }

        default:
        return state
    }
}
