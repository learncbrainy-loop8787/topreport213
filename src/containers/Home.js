import React, { Component } from 'react'  
import { connect } from 'react-redux'
import { getCurrentUser } from '../actions/currentUser'
import Header from '../components/Header'

class Home extends Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }


  render() {
    return (
        <>
        <Header />
        </>
      
    )
  }
}

export default connect(null, { getCurrentUser })(Home)


// containers  the parent elements of other components in a React app. They serve as a bridge between the normal components that render the UI and the logic that makes the UI components interactive and dynamic. The most common function of a container component is to obtain data.