import { 
  SUCCESS ,
  FAILURE ,
  LOGIN_FAILURE ,
  LOGIN_SUCCESS ,
  FETCH_POST_COMMENTS ,
  FETCH_DB_POSTS ,
  REMOVE_DB_POSTS ,
  REMOVE_POST_COMMENTS ,
  REMOVE_PROFILE ,
  ADD_PROFILE ,
  USER_INPUT ,
  REMOVE_DB_PROFILE ,
  SET_DB_PROFILE
} from './types';

export const success = () => { 
  return {
    type: SUCCESS
  }
}

export const failure = () => { 
  return {
    type: FAILURE
  }
}

export const userInput = text => {
  return {
    type: USER_INPUT ,
    payload: text
  }
}

export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS 
  }
}

export const loginFailure = () => {
  return {
    type: LOGIN_FAILURE 
  }
}

export const addProfile = profile => {
  return {
    type: ADD_PROFILE 
  }
}

export const removeProfile = () => {
  return {
    type: REMOVE_PROFILE 
  }
}

export const setDbProfile = profile => {
  return {
    type: SET_DB_PROFILE,
    payload: profile
  }
}

export const removeDbProfile = () => {
  return {
    type: REMOVE_DB_PROFILE 
  }
}

export const fetchDbPosts = posts => {
  return {
    type: FETCH_DB_POSTS,
    payload: posts 
  }
}

export const removeDbPosts = () => {
  return {
    type: REMOVE_DB_POSTS 
  }
}

export const fetchPostComments = comments => {
  return {
    type: FETCH_POST_COMMENTS,
    payload: comments
  }
}

export const removePostComments = () => {
  return {
    type: REMOVE_POST_COMMENTS 
  }
}