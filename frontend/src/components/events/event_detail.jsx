import React, { Component } from 'react';
import '../../assets/stylesheets/event-box.css';

import '../../assets/stylesheets/event-detail.css';

import WhosGoingFormContainer from '../events/whos_going_form_container';
import CommentListContainer from '../comment/comment_list_container';
import CommentComposeContainer2 from '../comment/comment_compose_container2';

//
class EventDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {title: "notloadedyet",
              description: "",
              image_url: "",
              organizer: "" },
      comments: {}


      }
    };

  componentDidMount() {

    this.props.fetchEvent(this.props.match.params.eventId)

    .then(res => this.setState({ 'event': res.event.data }));
    this.props.fetchEventComments(this.props.match.params.eventId);

  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.eventId !== this.props.match.params.eventId) {
      this.props.fetchEvent(this.props.match.params.recipeId).then(res => this.setState({ 'event': res.event.data }));
    }
  }


  render() {
    // const {currentUser } = this.props;
    let image_string;
    let title, description, requirements, event_date, event_time, location, organizer_name;

    if(this.state.event.title !== "notloadedyet"){
      image_string = (<img src={ require(`../../assets/images/${this.state.event.image_url}`) } alt={this.state.event.title} />);
      title = (<h1 className="event-title">{this.state.event.title}</h1>);
      description = (<p>{this.state.event.description}</p>);
      location = (<p>{this.state.event.location}</p>);
      event_date = (<p className="event-date">{this.state.event.event_date}</p>);
      event_time = (<p>{this.state.event.event_time}</p>);
      requirements = (<p>{this.state.event.requirements}</p>);
      organizer_name = (<span className="event-host">{this.state.event.organizer_name}</span>);

      } else {
        title = "";
        image_string = "";
      }

    return (
      <section className="event-detail">
      <div className="event-header">
      {event_date}
      {title}
      <p>Hosted By {organizer_name} </p>
      </div>
      <div className="event-body">
        <div className="event-body-left">
        {image_string}
        </div>
        <div className="event-body-right">
          <p className="event-details-bold">When:</p>
          {event_date}
          {event_time}
          <p className="event-details-bold">Location:</p>
          {location}
          <p className="event-details-bold">Requirements:</p>
          {requirements}

        </div>
      </div>
      <div className="event-body-lower">
      <h1>Description: </h1>
      {description}

          <WhosGoingFormContainer />
          <CommentListContainer />
          <CommentComposeContainer2 />

      </div>
      </section>
    );
  }
}

export default EventDetail;
