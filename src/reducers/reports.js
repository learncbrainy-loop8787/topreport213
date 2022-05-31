
// reducer takes in old state and spits out new state
import {
  GET_REPORTS,
  ADD_REPORT,
  EDIT_REPORT,
  DELETE_REPORT,
  SET_SELECTED_REPORT,
  UNSET_REPORT,
  
  
  FILTERS_FORM_CHANGE,
 
} from '../actionTypes'



const initialState = {
  reports: [],
  selectedReport: null,
  
  filtersForm: {
    searchOption: 'title',
    search: '',
    filter: 'All',
    sort: 'alphabetically',
  }
}

export function reportsReducer(state = initialState, action) {
  switch(action.type){
    case GET_REPORTS:
      return {...state, reports: action.reports}
    case FILTERS_FORM_CHANGE:
      return {...state, filtersForm: {
        ...state.filtersForm, [action.payload.name]: action.payload.value
      }}
    case ADD_REPORT:
      return {
        ...state,
        reports: [...state.reports, action.report]
      }
    case EDIT_REPORT:
      return {
        ...state, 
        reports: [...state.reports.map(report => report.id === action.report.id ? action.report : report)]
      }
    case DELETE_REPORT:
      return {
        ...state,
        reports: [...state.reports.filter(report => report.id !== action.reportId)]
      }
    case SET_SELECTED_REPORT:
      return {...state, selectedReport: action.report}
    case UNSET_REPORT:
      return {...state, selectedReport: null}

    default:
      return state
  }
}