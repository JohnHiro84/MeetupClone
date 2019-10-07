// src/actions/tweet_actions.js

import { getEvent, getEvents,
  getUserEvents, writeEvent,
  updateEventGoing, getEventComments,
  writeComment } from '../util/event_api_util';

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";

export const RECEIVE_USER_EVENTS = "RECEIVE_USER_EVENTS";
export const RECEIVE_NEW_EVENT = "RECEIVE_NEW_EVENT";

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_NEW_COMMENT = "RECEIVE_NEW_COMMENT";

export const receiveEvents = events => ({
  type: RECEIVE_EVENTS,
  events
});

export const receiveEvent = event => ({
  type: RECEIVE_EVENT,
  event
});

export const receiveUserEvents = events => ({
  type: RECEIVE_USER_EVENTS,
  events
});

export const receiveNewEvent = newevent => ({
  type: RECEIVE_NEW_EVENT,
  newevent
})


export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receiveNewComment = comment => ({
  type: RECEIVE_NEW_COMMENT,
  comment
})

export const fetchEvents = () => dispatch => (
  getEvents()
    .then(events => dispatch(receiveEvents(events)))
    .catch(err => console.log(err))
);

export const fetchEvent = (id) => dispatch => (
  getEvent(id)
    .then(event => dispatch(receiveEvent(event)))
    .catch(err => console.log(err))
);

export const fetchEventComments = (id) => dispatch => (
  getEventComments(id)
    .then(comments => dispatch(receiveComments(comments)))
    .catch(err => console.log(err))
);

export const fetchUserEvents = id => dispatch => (
  getUserEvents(id)
    .then(events => dispatch(receiveUserEvents(events)))
    .catch(err => console.log(err))
);

export const composeEvent = data => dispatch => (
  writeEvent(data)
    .then(newevent => dispatch(receiveNewEvent(newevent)))
    .catch(err => console.log(err))
);

export const composeComment = data => dispatch => (
  writeComment(data)
    .then(comment => dispatch(receiveNewComment(comment)))
    .catch(err => console.log(err))
);

export const updateEvent = (id, new_person) => dispatch => (
  updateEventGoing(id, new_person)
  // .then(recipe => dispatch(receiveSingleRecipe(recipe)))
);
