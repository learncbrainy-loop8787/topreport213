import { connect } from 'react-redux'
import { handleSearchFormChange } from '../actions/reports'

const Filters = (props) => {
  return(
    <div className='form-container'>
      <form className='filters-form'>
      
    
          <div className='filters-form__group'>
          <label className='filters-form__label' >Level</label>
            <select className='filters-form__input' name="filter" onChange={props.handleSearchFormChange} value={props.filter} >
             <option value="normal">norm</option>
              <option value="yellow">yellow</option>
              <option value="red">red</option>
              <option value="black">black</option>
            
            </select>
          </div>
          <div className='filters-form__group'>
            <label className='filters-form__label' >Sort by</label>
            <select className='filters-form__input' onChange={props.handleSearchFormChange} value={props.sort} name="sort">
              <option value="alphabetically">A-Z by Common Name</option>
              <option value="date">Most Recently Seen</option>
            </select>
          </div>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  ...state.reports.filtersForm
})
export default connect(mapStateToProps, { handleSearchFormChange })(Filters)