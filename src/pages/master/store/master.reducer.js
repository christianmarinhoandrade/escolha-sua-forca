import * as types from './master.actionsType'

import Immutable from 'seamless-immutable'

const INITIAL_STATE = Immutable({
    isLuke: null,
})

function masterReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.IS_LUKE:
            return state.merge({ isLuke: action.isLuke })
        default:
            return state
    }
}

export default masterReducer
