import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../assets/stylesheets/comments.css';
import moment from 'moment';

class CommentList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: ""
    }
  }
  componentDidMount() {

    this.props.fetchEventComments(this.props.match.params.eventId)
    .then(res => this.setState({ 'comments': res.comments.data }));

  }

  componentWillReceiveProps(newState) {
    this.setState({ comments: newState.comments });
  }

  render() {
    // console.log(this.state.comments);

    if (this.state.comments.length === 0) {
      return (<div>There are no Comments</div>)
    } else {
      return (
        <div className="comments-container">
          <h2>Comments:</h2>

          <ul>
          {this.state.comments.map(comment => (
            <li key={comment._id}>

            <span className="comment-text"> {comment.text}</span>
            <span className="comment-date">{ moment(comment.date_created).fromNow() }</span>
            <span className="comment-handle">{comment.handle}</span>

            </li>
          ))}
          </ul>

        </div>
      );
    }
  }
}

export default withRouter(CommentList);
