// src/components/tweets/tweet_compose.js

import React from 'react';
import EventBox from './event_box';
import '../../assets/stylesheets/event-compose.css';

class EventCompose extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          title: "",
          description: "",
          requirements: "",
          location: "",
          image_url: "",
          event_date: "",
          event_time: "",
          newEvent: ""
      }

      this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
    console.log(nextProps.newEvent);
      this.setState({newEvent: nextProps.newEvent});
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.props.currentUser.handle);
    let new_event = {
      organizer_name: this.props.currentUser.handle,
      title: this.state.title,
      description: this.state.description,
      location: this.state.location,
      requirements: this.state.requirements,
      event_date: this.state.event_date,
      event_time: this.state.event_time,
      image_url: this.state.image_url,
      whos_going: [this.props.currentUser.handle]
    };

    this.props.composeEvent(new_event);
    this.setState({title: '', description: '', location: '', requirements: '', event_date: '', event_time: '', image_url: ''})
  }

  update(property) {
  return e => this.setState({ [property]: e.target.value });
}

  render() {
    let displayed_event;
    if(this.state.newEvent.title){
      displayed_event = (<EventBox event={this.state.newEvent} />);
    } else {
      displayed_event = (<p></p>);
    }
    return (
        <div className="session-form-container">
            <form  className="session-form" onSubmit={this.handleSubmit}>
                <div className="event-compose">
                    <input type="textarea"
                        value={this.state.title}
                        onChange={this.update('title')}
                        placeholder="title"
                    />
                    <input type="textarea"
                        value={this.state.description}
                        onChange={this.update('description')}
                        placeholder="description"
                    />
                    <input type="textarea"
                        value={this.state.image_url}
                        onChange={this.update('image_url')}
                        placeholder="image_url."
                    />
                    <input type="textarea"
                        value={this.state.location}
                        onChange={this.update('location')}
                        placeholder="location"
                    />
                    <input type="textarea"
                        value={this.state.event_date}
                        onChange={this.update('event_date')}
                        placeholder="event_date"
                    />
                    <input type="textarea"
                        value={this.state.event_time}
                        onChange={this.update('event_time')}
                        placeholder="event_time"
                    />
                    <input type="textarea"
                        value={this.state.requirements}
                        onChange={this.update('requirements')}
                        placeholder="requirements"
                    />

                    <input id="session-submit" type="submit" value="Submit" />
                </div>
            </form>
            <br />
            {displayed_event}

        </div>
    )
  }
}

export default EventCompose;
