import { uniqueId } from '../../util/id_generator'
import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      recipe_id: this.props.recipe_id,
      author: this.props.author
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const comment = Object.assign({}, this.state, { id: uniqueId() });
    console.log(comment);
    this.props.createComment(this.props.recipe_id, comment).then(
      this.setState({
        description: "",
        author: ""
      }) 
    );
  }

  render() {
    return (
      <form className="comment-form" onSubmit={ this.handleSubmit }>


          <textarea
            className="comment-text-area"
            ref="body"
            value={ this.state.body }
            placeholder="leave a comment..."
            onChange={ this.update('body') }
            required />

        <button className="comment-button-form">Add Comment!</button>
      </form>
    );
  }
}

export default CommentForm;
