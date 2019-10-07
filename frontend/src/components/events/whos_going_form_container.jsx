import { connect } from 'react-redux';

import WhosGoingForm from './whos_going_form';
import { updateEvent, fetchEvent } from '../../actions/event_actions';

const mapStateToProps = (state) => ({
  events: Object.values(state.events.user),
  currentUser: state.session.user
});

const mapDispatchToProps = dispatch => ({
  updateEvent: (id, new_person) => dispatch(updateEvent(id, new_person)),
  fetchEvent: id => dispatch(fetchEvent(id))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WhosGoingForm);
