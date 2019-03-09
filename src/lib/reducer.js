import Immutable from "immutable"
import {ActionTypes} from "./actions.js"

export default function(state={}, action) {
    switch (action.type) {
        case ActionTypes.SEARCH:
            console.log(action);
            state.gameList = action.gameList;
            return Immutable.fromJS(state).toJS();
        case ActionTypes.TOGGLENAV:
            console.log(action);
            state.navigation = action.navState;
            return Immutable.fromJS(state).toJS();
        default:
            return state;
    }
}