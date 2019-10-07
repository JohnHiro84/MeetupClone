import { connect } from 'react-redux';
// import React from 'react';
//
import EventDetail from './event_detail';
import { fetchEvent, fetchEventComments } from '../../actions/event_actions';

const mapStateToProps = (state) => {
  return {
    events: Object.values(state.events.user),
    currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => ({
  fetchEvent: id => dispatch(fetchEvent(id)),
  fetchEventComments: id => dispatch(fetchEventComments(id))

});

export default connect(mapStateToProps, mapDispatchToProps)(EventDetail);
