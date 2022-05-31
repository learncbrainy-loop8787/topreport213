import React, { Component } from 'react'
import { connect} from 'react-redux'
import { setSelectedReport, unsetReport } from '../actions/reports'

import sprite from '../imgs/sprite.svg'

class ReportPage extends Component {

  componentDidMount(){
    const id = this.props.match.params.id
    this.props.setSelectedReport(id)
  }

  componentWillUnmount(){
    this.props.unsetReport()
  }

  render() {
    const { title, description, infected, location, date, notes, username } = this.props
    return (
      <>
      <div className='report-page row center-text'>
       
        <div className='report-2'>
          <h1 className='heading-secondary' >{ title }</h1>
          <h2 className='heading-tertiary'>Description- { description }</h2>
          <p>
            <span className='report-page-info u-margin-top-large' >Reported by { username } </span>
          </p>
          <p>
            <span className='report-page-info u-margin-top-small'>infected? {infected === true ? 
              <svg className="icon icon--infected-page-true">
                <use href={sprite + '#icon-checkmark'} />
              </svg>
              : 
              <svg className="icon icon--infected-page-false">
                <use href={sprite + '#icon-cancel-circle'} />
              </svg>
              }
            </span>
          </p>
          <p>
            <span className='report-page-info u-margin-top-small'>City: {location.city} </span>
          </p>
          <p>
            <span className='report-page-info u-margin-top-small'>Region: {location.region} </span>
          </p>
          <p>
            <span className='report-page-info u-margin-top-small'>Country: {location.country} </span>
          </p>
          <p>
            <span className='report-page-info u-margin-top-small'>Date seen: { date }</span>
          </p>
        </div>
        <div className='info'>
         
          <h4 className='u-margin-top-small'>Notes: { notes }</h4>
        </div>
      </div>
       
    </>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.reports.selectedReport,
  currentUser: state.currentUser.currentUser
})

export default connect(mapStateToProps, { setSelectedReport, unsetReport })(ReportPage)