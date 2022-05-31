import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from '../components/Logout'
import sprite from '../imgs/sprite.svg'

const NavBar = props => {
  
  return (
    <nav className='nav '>
      {props.loggedIn ? 
        <>
        <div className='nav__link-container'>
          <NavLink className='nav__link' to="/">
            <span>
              <svg className="icon icon--nav">
                <use href={sprite + '#icon-cloud-upload'} />
              </svg>
              Home
            </span>
          </NavLink>
          <NavLink className='nav__link' to="/myprofile">
            <span>
              <svg className="icon icon--nav">
                <use href={sprite + '#icon-users'} />
              </svg>
              Profile
            </span>  
          </NavLink>
          <NavLink className='nav__link' to="/reports">
          <span>
              <svg className="icon icon--nav">
                <use href={sprite + '#icon-plus'} />
              </svg>
             Reports
            </span>
          </NavLink>
        </div>
        <div className='nav__logout-container'>
          <Logout /> 
        </div>
        </>
        :
        <div className='nav__link-container'>
          <NavLink className='nav__link' to="/">
            <span>
              <svg className="icon icon--nav">
                <use href={sprite + '#icon-cloud-upload'} />
              </svg>
              Home
            </span>
          </NavLink>
          <NavLink className='nav__link' to="/signup">
            <span>
              <svg className="icon icon--nav">
                <use href={sprite + '#icon-plus'} />
              </svg>
              Sign Up
            </span>
          </NavLink>
          <NavLink className='nav__link' to="/login">
            <span>
              <svg className="icon icon--nav">
                <use href={sprite + '#icon-pencil2'} />
              </svg>
              Login
            </span>  
          </NavLink>
        </div>
      }
    </nav>
  )
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
  })
}

export default connect(mapStateToProps)(NavBar)
