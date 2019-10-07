// src/components/tweets/tweet_compose_container.js
 
import { connect } from 'react-redux';
import { composeEvent } from '../../actions/event_actions';
import EventCompose from './event_compose';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    newEvent: state.events.new
  };
};

const mapDispatchToProps = dispatch => {
  return {
    composeEvent: data => dispatch(composeEvent(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventCompose);
