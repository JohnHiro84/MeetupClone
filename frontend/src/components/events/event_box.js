// src/components/tweets/tweet_box.js
import '../../assets/stylesheets/event-box.css';
import React from 'react';
import { Link } from 'react-router-dom';

class EventBox extends React.Component {
  render() {
    let image_string;
    let org_name;
      if(this.props.event.image_url){
        image_string = (<img src={ require(`../../assets/images/${this.props.event.image_url}`) } alt={this.props.event.title} />);
      } else {
        image_string = "";
      }
      if(this.props.event.organizer_name){
        org_name = (<p>{this.props.event.organizer_name}</p>);
      } else {
        org_name = "";
      }


    return (
        <div className="event-box">
        <Link to={`/api/events/${this.props.event._id}`}>
            <h3>{this.props.event.title} </h3>
            {image_string}
            <h3>{this.props.event.description}</h3>
            <p>{this.props.event.event_date}</p>

            {org_name}
        </Link>
        </div>
    );
  }
}

export default EventBox;
