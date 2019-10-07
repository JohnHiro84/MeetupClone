import { connect } from 'react-redux';
import CommentList from './comment_list';
// Actions
import { commentsByEventId } from '../../reducers/selectors';

import { fetchEventComments } from '../../actions/event_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    comments: commentsByEventId(state)
  }
};

const mapDispatchToProps = dispatch => ({
  fetchEventComments: id => dispatch(fetchEventComments(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList);
