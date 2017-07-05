import {
    UPDATE_DISPLAY
} from '../actions/display';
import {
    UPDATE_TIME
} from '../actions/clock';

const initialState = {
    test: false,
    data:{
        capital: '',
        country: '',
        stats: [],
        date: ''
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_DISPLAY:
            return {
                ...state,
                data: action.value
            }
        case UPDATE_TIME:
            return {
                ...state,
                data: {
                    ...state.data,
                    date: action.value.date,
                }
            }

        default:
            return state
    }
}
