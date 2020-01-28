import { USER_INPUT } from "../actions/types";


const initState = {
  user: null ,
  loading: true
}


export default ( state=initState , action) => {
  const { type , payload } = action;
  switch (type) {
    case USER_INPUT:
      return {
        ...state ,
        posts: payload ,
        loading: false
      }
    default:
      return state;
  }
}