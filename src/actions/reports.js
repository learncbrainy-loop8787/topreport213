import {
  GET_REPORTS,
  ADD_REPORT, 
  EDIT_REPORT,
  DELETE_REPORT,
  SET_SELECTED_REPORT,
  UNSET_REPORT,
  FILTERS_FORM_CHANGE
} from '../actionTypes'

import { getCurrentUser } from './currentUser'

const BASE_URL = 'http://localhost:3001/api/v1'

const REPORT_URL = `${BASE_URL}/reports`



export const getReports = () => {
  return (dispatch) => {
    fetch(REPORT_URL, {
      credentials: 'include',
    })
    .then(resp => resp.json())
    .then(reports => dispatch({
      type: GET_REPORTS,
      reports
    }))
  }
}

export const addReport = (reportData) => {
  return dispatch => {
    const sendableReportData = {
      photo: reportData.photo,
      title: reportData.title,
      description: reportData.description,
      notes: reportData.notes,
      date: reportData.date,
      infected: reportData.infected,
      level: reportData.level,
      city: reportData.city,
      region: reportData.region,
      country: reportData.country,
      public: reportData.isPublic,
    }
    return fetch(REPORT_URL, {
      credentials: "include",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sendableReportData),
    })
    .then(response => response.json())
    .then(report => {
      if (report.error) {
        alert(report.error)
      } else {
        dispatch({
          type: ADD_REPORT, 
          report
        })
        dispatch(getCurrentUser())
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
}

export const editReport = (reportData) => {
  return dispatch => {
    const sendableReportData = {
      photo: reportData.photo,
      title: reportData.title,
      description: reportData.description,
      notes: reportData.notes,
      date: reportData.date,
      infected: reportData.infected,
      level: reportData.level,
      city: reportData.city,
      region: reportData.region,
      country: reportData.country,
      public: reportData.isPublic,
      id: reportData.id
    }
    return fetch(`${REPORT_URL}/${reportData.id}`, {
      credentials: "include",
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sendableReportData),
    })
    .then(response => response.json())
    .then(report => {
      if (report.error) {
        alert(report.error)
      } else {
        dispatch({
          type: EDIT_REPORT, 
          report
        })
        dispatch(getCurrentUser())
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
}

export const deleteReport = (reportId) => {
  return (dispatch) => {
    return  fetch(`${REPORT_URL}/${reportId}`, {
      credentials: "include",
      method: 'DELETE',
    })
    .then(resp => resp.json())
    .then(() => {
      dispatch({
      type: DELETE_REPORT,
      reportId
      })
      dispatch(getCurrentUser())
    })
  }
}

export const setSelectedReport = (reportId) => {
  return dispatch => {
    fetch(`$REPORT_URL}/${reportId}`, {
      credentials: 'include'
    })
    .then(resp => resp.json())
    .then(report => dispatch({
      type: SET_SELECTED_REPORT,
      report
    }))
  }
}

export const unsetReport = () => ({type: UNSET_REPORT})


export const handleSearchFormChange = (e) => ({
  type: FILTERS_FORM_CHANGE,
  payload: {name: e.target.name, value: e.target.value}
})