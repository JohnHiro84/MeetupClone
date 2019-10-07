// src/components/profile/profile.js

import React from 'react';
import EventBox from '../events/event_box';
import './App.css';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            events: []
        }
    }

    componentWillMount() {
        console.log(this.props.currentUser.id)
        this.props.fetchUserEvents(this.props.currentUser.id)
        // .then(res => this.setState({ events: res }));
    }

    componentWillReceiveProps(newState) {
        this.setState({ events: newState.events });
    }

    render() {

        if (this.state.events.length === 0) {
          return (<div>This user has no Events</div>)
        } else {
          return (
            <div>
              <h2>All of This User's Events</h2>
              <div className="eventList">

                {this.state.events.map(event => (
                  <EventBox key={event._id} event={event} />
                ))}
              </div>
            </div>
          );
        }
      }
}

export default Profile;
