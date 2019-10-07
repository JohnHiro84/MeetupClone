// src/reducers/tweets_reducer.js
import merge from 'lodash/merge';

import { RECEIVE_COMMENTS, RECEIVE_NEW_COMMENT } from '../actions/event_actions';

  const CommentsReducer = (state = { new: undefined}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_COMMENTS:
        newState.all = action.comments.data;
        return newState;

      case RECEIVE_NEW_COMMENT:
        let nextState = merge({}, state);
        let arr = [];
        arr.push(action.comment.data);
        let new_comment = {all : arr} ;
        newState = merge({}, nextState, new_comment);

        return {all : nextState.all.concat(new_comment.all), new: ""};
      default:
        return state;
    }
  };

  export default CommentsReducer;
