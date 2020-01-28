import { LOGIN_SUCCESS, LOGIN_FAILURE, ADD_PROFILE, REMOVE_PROFILE, SET_DB_PROFILE, REMOVE_DB_PROFILE } from "../actions/types";


const initState = {
  isAuthenticated: false ,
  loading: true ,
  profile: null ,
  dbProfile: null 
}


export default ( state=initState , action) => {
  const { type , payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state ,
        isAuthenticated: true ,
        loading: false
      }
    case LOGIN_FAILURE:
      return {
        ...state ,
        isAuthenticated: false ,
        loading: false 
      }
    case ADD_PROFILE:
      return {
        ...state ,
        profile: payload ,
        loading: false ,
      }
    case REMOVE_PROFILE:
      return {
        ...state ,
        profile: null ,
        loading: false
      }
    case SET_DB_PROFILE:
      return {
        ...state ,
        dbProfile: payload ,
        loading: false
      }
    case REMOVE_DB_PROFILE:
      return {
        ...state ,
        dbProfile: null ,
        loading: false
      }
    
    default:
      return state;
  }
}