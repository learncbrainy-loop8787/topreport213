import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCurrentUser } from '../actions/currentUser'
import ReportContainer from './ReportContainer'

class MyProfile extends Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }

  render() {
    return (
      <>
        <div className='profile-headers'>
          <h2 className='heading-secondary'>Welcome home, {this.props.currentUser && this.props.currentUser.username}</h2>
        </div>
        <ReportContainer />
      </>
    )
  }
}

const mapStateToProps = state => {
  return({
    currentUser: state.currentUser.currentUser
  })
}

export default connect(mapStateToProps, { getCurrentUser })(MyProfile)
