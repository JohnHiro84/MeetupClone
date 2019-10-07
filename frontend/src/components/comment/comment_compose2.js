
import React from 'react';

class CommentCompose2 extends React.Component {
  constructor(props) {
      super(props);

      this.state = {

        handle: "",
        text: "",
        event_id: "",
        old_comments: {},
        fresh_new_comment: ""
      }

      this.handleSubmit = this.handleSubmit.bind(this);
  }

    componentDidMount() {
      let eve = this.props.event_id;
      this.setState({
        handle: this.props.currentUser.handle,
        event_id: this.props.event_id});

      this.setState({ event_id: eve});
    }



  handleSubmit(e) {
    e.preventDefault();

    let new_comment = {
      handle: this.state.handle,
      text: this.state.text,
      event_id: this.props.event_id

    };

    this.props.composeComment(new_comment)
    .then(this.setState({ text: '' })
    );
  }
  update(property) {
  return e => this.setState({ [property]: e.target.value });
}

  render() {

    return (
        <div >


            <form onSubmit={this.handleSubmit}>
                <div className="event-compose">
                    <input type="textarea"
                        value={this.state.text}
                        onChange={this.update('text')}
                        placeholder="submit a new comment"
                    />

                    <input className="attending-button" type="submit" value="Submit Comment" />
                </div>
            </form>


        </div>
    )
  }
}

export default CommentCompose2;
