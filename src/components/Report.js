import { connect } from 'react-redux'
import { deleteReport } from '../actions/reports'

import sprite from '../imgs/sprite.svg'

const Report = props => {

  const onClick = () => {
    props.deleteReport(props.id)
  }

  return (
    <div className='card'>
      <div className='report_card'>
      
        { props.all && <h2 className='heading-tertiary'>Reported By: {props.user.username}</h2> }
        <h2 className='heading-tertiary'>Name: {props.title}</h2>
      </div>
      
        <div className='card__content'>
        
          <p className='heading-large'>infected? {props.infected === true ? 
            <svg className="icon icon--infected-true">
              <use href={sprite + '#icon-checkmark'} />
            </svg>
            : 
            <svg className="icon icon--infected-false">
              <use href={sprite + '#icon-cancel-circle'} />
            </svg>
            }
          </p>
          { !props.all &&
            <p className='heading-small'>{props.public === true ? 'Public Report' : 'Private Report'}</p>
          }
          <p className='heading-small'>Location: {props.location.city}, {props.location.region}, {props.location.country}</p>
          <p className='heading-small'>Date seen: {props.date}</p>
          
          <span>
            { props.currentOwner && 
              <a href="#center" onClick={() => props.populateForm(props)}>
                <svg className="icon icon--edit">
                  <use href={sprite + '#icon-pencil2'} />
                </svg>
              </a>}
            { props.currentOwner && 
              <a href="#center" onClick={onClick}>
                <svg className="icon icon--trash">
                  <use href={sprite + '#icon-bin2'} />
                </svg>
              </a>}
          </span>
        </div>
      </div>
    
  );
}

export default connect(null, { deleteReport })(Report);