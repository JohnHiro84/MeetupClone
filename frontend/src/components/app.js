// src/components/app.js

import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ProfileContainer from './profile/profile_container';
import EventsContainer from './events/events_container';
import EventComposeContainer from './events/event_compose_container';
import EventDetailContainer from './events/event_detail_container';


const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
      <ProtectedRoute exact path="/events" component={EventsContainer} />

      <ProtectedRoute exact path="/new_event" component={EventComposeContainer} />
      <ProtectedRoute path="/api/events/:eventId" component= {EventDetailContainer} />

    </Switch>
  </div>
);

export default App;
