import React from 'react'
import { connect } from 'react-redux'
import { getReports } from '../actions/reports'
import Report from '../components/Report'
import {withRouter} from 'react-router-dom'
import ReportFormModal from '../components/ReportFormModal'
import Filters from '../components/Filters'
import { addReport, editReport } from '../actions/reports'
import sprite from '../imgs/sprite.svg'

class ReportContainer extends React.Component {

  state = {
    modal: false,
    form: {
      photo: '',
      title: '',
      description: '',
      notes: '',
      city: '',
      region: '',
      country: '',
      date: '',
      infected: false,
      id: null,
      level: 'normal',
      isPublic: false,
    },
  }

  toggleModal = () => this.setState({modal: !this.state.modal})

  onChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({form:
      {
        ...this.state.form,
        [name]: value
      }
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    if (this.state.form.id) {
      this.props.editReport(this.state.form)
    } else {
      this.props.addReport(this.state.form)
    }
    this.setState({
      modal: false,
      form: {
        photo: '',
        title: '',
        description: '',
        notes: '',
        city: '',
        region: '',
        country: '',
        date: '',
        infected: false,
        id: null,
        level: 'normal',
        isPublic: false,
      }
    })
  }

  componentDidMount(){
    this.props.getReports()
  } 

  openNewReportForm = () => this.setState({
    modal: true,
    form: {
      photo: '',
      title: '',
      description: '',
      notes: '',
      city: '',
      region: '',
      country: '',
      date: '',
      infected: false,
      id: null,
      level: 'normal',
      isPublic: false,
    }
  })

  populateForm = (report) => this.setState({
    modal: true,
    form: {
      photo: report.photo,
      title: report.title,
      description: report.description,
      notes: report.notes,
      city: report.location.city,
      region: report.id,
      level: report.level.level,
      isPublic: report.public
    }
  })

  renderMyReports = () => {
    return (
      <>
        <button className="btn btn--report" onClick={this.openNewReportForm}>
        <svg className="icon icon--add">
          <use href={sprite + '#icon-plus'} />
        </svg>
          Report</button>
          <section className="cards">
            {this.props.currentUser && this.props.reports.filter(report => report.user.id === this.props.currentUser.id).map(report => <Report key={report.id} populateForm={this.populateForm} {...report} currentOwner={true} />)}
          </section>
        <ReportFormModal toggle={this.toggleModal} {...this.state.form} display={this.state.modal} onChange={this.onChange} onSubmit={this.onSubmit}/>
      </>
    )
  }

  publicReports = () => {
    return this.props.reports.filter(report => report.public === true)
  }

  searchedReports = () => {
    switch(this.props.searchOption) {
      case 'title':
        return this.publicReports().filter(report => report.title.toLowerCase().includes(this.props.search.toLowerCase()))
      case 'username':
        return this.publicReports().filter(report => report.user.username.toLowerCase().includes(this.props.search.toLowerCase()))
      case 'region':
        return this.publicReports().filter(report => report.location.region.toLowerCase().includes(this.props.search.toLowerCase()))
      default:
        return this.publicReports()
    }
  }

  filteredReports = () => this.props.filter === 'All' ?  this.searchedReports() : this.searchedReports().filter(report => report.level.name === this.props.filter)

  sortedReports = () => this.props.sort === 'alphabetically' 
    ? this.filteredReports().sort((a, b) => a.title.localeCompare(b.title)) 
    : this.filteredReports().sort((a, b) => b.date.localeCompare(a.date))

  renderAllReports = () => {
    return (
      <>
        <h2 className='heading-secondary'>All report</h2>
        <Filters />
        { !this.props.reports[0] && <div className="loader"></div> }
        <section className="cards">
          {this.props.reports && this.sortedReports().map(report => <Report key={report.id} {...report} all={true} />)}
        </section>
      </>
    )
  }

  render(){
    return (
      <>
        { this.props.location.pathname === '/myprofile' ? this.renderMyReports() : this.renderAllReports() }
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
      currentUser: state.currentUser.currentUser,
      reports: state.reports.reports,
      ...state.reports.filtersForm
  }
}

export default withRouter(connect(mapStateToProps, { getReports, addReport, editReport })(ReportContainer))