import '../../assets/stylesheets/events.css';
import React from 'react';
import { withRouter } from 'react-router-dom';
import EventBox from './event_box';

class Event extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: []
    }
  }
  componentDidMount() {
    this.props.fetchEvents();
  }

  componentWillReceiveProps(newState) {
    this.setState({ events: newState.events });
  }

  render() {
    if (this.state.events.length === 0) {
      return (<div>There are no Events</div>)
    } else {
      return (
        <div>

          <div className="eventList">

            {this.state.events.map(event => (
              <EventBox key={event._id} event={event} title ={event.title} description = {event.description} />
            ))}
          </div>
        </div>
      );
    }
  }
}

export default withRouter(Event);
