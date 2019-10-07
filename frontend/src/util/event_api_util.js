// src/util/tweet_api_util.js

import axios from 'axios';

export const getEvents = () => {
  return axios.get('/api/events')
};

export const getUserEvents = id => {
  return axios.get(`/api/events/user/${id}`)
};

export const writeEvent = data => {
  return axios.post('/api/events/', data)
}

export const getEvent = id => {
  return axios.get(`/api/events/${id}`)
};

export const updateEventGoing = (id, new_person) => {

  return axios.put(`api/events/${id}`,
    {
      whos_going: new_person
    }
  )
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
}

export const getEventComments = id => {
  return axios.get(`/api/events/${id}/comments`)
};


export const writeComment = data => {
  return axios.post('/api/comments/', data)
}
