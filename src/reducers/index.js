import { currentUserReducer } from './currentUser'
import { reportsReducer } from './reports'


import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  reports: reportsReducer

})

export default rootReducer