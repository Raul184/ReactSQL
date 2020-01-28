import { FETCH_DB_POSTS, REMOVE_DB_POSTS, FETCH_POST_COMMENTS, REMOVE_POST_COMMENTS } from "../actions/types";


const initState = {
  posts: [] ,
  comments: [] ,
  loading: true
}


export default ( state=initState , action) => {
  const { type , payload } = action;
  switch (type) {
    case FETCH_DB_POSTS:
      return {
        ...state ,
        posts: payload ,
        loading: false
      }
    case REMOVE_DB_POSTS:
      return {
        ...state ,
        posts: [] ,
        loading: false 
      }
    case FETCH_POST_COMMENTS:
      return {
        ...state ,
        comments: payload,
        loading: false ,
      }
    case REMOVE_POST_COMMENTS:
      return {
        ...state ,
        comments: [] ,
        loading: false
      }
    default:
      return state;
  }
}