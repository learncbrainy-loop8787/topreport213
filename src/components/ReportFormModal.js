import React from 'react'

const ReportFormModal = props => {

  const display = props.display ? "block" : "none"
  const { photo, level, title, description, date, infected, city, region, country, isPublic, toggle, onChange, onSubmit } = props
  
  return (
    <div id="myReport" className="report" style={{ display }}>
      <div className="modal__content">
        <span onClick={toggle} className="close">&times;</span>
        <form className='report-form' onSubmit={onSubmit}>
        <div className='report-form__group'>
          <input className='report-form__input' placeholder='photo URL' type="text" name="photo"  onChange={onChange} value={photo} required={true}/>
          <label className='report-form__label' htmlFor='photo'>photo URL</label>
        </div>
        <div className='report-form__group'>
          <select className='report-form__input' name="level" onChange={onChange} value={level} >
            <option value="normal">normal</option>
            <option value="yellow">yellow</option>
            <option value="red">red</option>
            <option value="black">black</option>
          
          </select>
          <label className='report-form__label' htmlFor='level'>level</label>
        </div>
        <div className='report-form__group'>
            <input className='report-form__input' placeholder='title' type="text" name="title"  onChange={onChange} value={title}/>
            <label className='report-form__label' htmlFor='title'>title</label>
        </div>
        <div className='report-form__group'>
          <input className='report-form__input' placeholder='descripton' type="text" name="description" onChange={onChange} value={description} />
          <label className='report-form__label' htmlFor='description'>description</label>
        </div>
        
        <label>Location</label>
        <div className='report-form__group'>
          <input className='report-form__input' placeholder='City' type="text" name="city" onChange={onChange} value={city} required={true} />
          <label className='report-form__label' htmlFor='city'>City</label>
        </div>
        <div className='report-form__group'>
          <input className='report-form__input' placeholder='Region' type="text" name="region" onChange={onChange} value={region} required={true} />
          <label className='report-form__label' htmlFor='region'>Region</label>
        </div>
        <div className='report-form__group'>
          <input className='report-form__input' placeholder='Country' type="text" name="country" onChange={onChange} value={country} required={true} />
          <label className='report-form__label' htmlFor='country'>Country</label>
        </div>
        <div className='report-form__group'>
          <input className='report-form__input' placeholder='date' type="date" name="date" onChange={onChange} value={date} required={true} />
          <label className='report-form__label' htmlFor='date'>Date Seen</label>
        </div>
        <div className='report-form__group'>
          <label htmlFor='infected'>Is Infected?
            <input
              className='u-margin-left-small'
              name="infected"
              type="checkbox"
              checked={infected}
              onChange={onChange} />
          </label>
        </div>
        <div className='report-form__group'>
          <label htmlFor='isPublic'>Make entry public?
            <input
              className='u-margin-left-small'
              name="isPublic"
              type="checkbox"
              checked={isPublic}
              onChange={onChange} />
          </label>
        </div>
        <input className="btn btn--small" type="submit" value="Submit" />
      </form>
      </div>
    </div>
  )
}

export default ReportFormModal
