import React , { useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeProfile , 
  loginFailure , 
  loginSuccess , 
  addProfile , 
  setDbProfile, removeDbProfile } from '../actions/actions';

const Authcheck = ({ auth: { isAuthenticated , profile } ,removeProfile , 
  loginFailure , 
  loginSuccess , 
  addProfile , 
  history }) => {
    useEffect( () => {
      if(isAuthenticated){
        loginSuccess();
        addProfile(profile);
        sendProfileToDb(profile)
        history.push('/')
      }
      else{
        loginFailure();
        removeProfile();
        removeDbProfile();
        history.push('/logout')
      }
    }, 
    [])

    const sendProfileToDb = profile => {
        axios.post( `/api/posts/userprofiletodb` , profile )
        .then( 
          () => axios.get( `/api/posts/userprofilefromdb`) ,
          { params: { email: profile.profile.email }})
        .then( 
          res => setDbProfile(res.data) )
        .then(
          history.push('/')
        )
    }
    return (
      <div>
        
      </div>
    )
}

Authcheck.propTypes = {
  setDbProfile: PropTypes.func.isRequired,
  removeProfile: PropTypes.func.isRequired,
  loginSuccess: PropTypes.func.isRequired,
  loginFailure: PropTypes.func.isRequired,
  addProfile: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(
  mapStateToProps ,
  { setDbProfile , removeProfile , addProfile , loginFailure , loginSuccess }
)(withRouter(Authcheck))
