// src/components/tweets/tweet_compose_container.js

import { connect } from 'react-redux';
import { composeComment } from '../../actions/event_actions';
import CommentCompose2 from './comment_compose2';

const mapStateToProps = (state, events) => {
  return {
    currentUser: state.session.user,
    newComment: state.comments.new,
    event_id: state.events.single._id,
    events
  };
};

const mapDispatchToProps = dispatch => {
  return {
    composeComment: data => dispatch(composeComment(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentCompose2);
