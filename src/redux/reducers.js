import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import history from '../history'

import homePageReducer, { moduleName as homePageModule } from '../ducks/HomePage'

export default combineReducers({
    router: connectRouter(history),
    [homePageModule]: homePageReducer
})