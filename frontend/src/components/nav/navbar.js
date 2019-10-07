
import React from 'react';
import { Link } from 'react-router-dom'
import '../../assets/stylesheets/nav-links.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div className="landing">
            <ul className="landing-list">
                <li id="logo"><Link to={'/events'} >City Events</Link></li>
                <li><button id="logout-session" onClick={this.logoutUser}>Logout</button></li>

                <li><Link to={'/profile'}>Profile</Link></li>
                <li><Link to={'/new_event'}>Create a new Event</Link></li>
                <li><Link to={'/events'}>All Events</Link></li>
            </ul>
            </div>
        );
      } else {
        return (
            <div className="landing">
            <ul className="landing-list">
               <li id="logo"><Link to={'/'} >City Events</Link></li>
               <li><Link to={'/signup'}>Signup</Link></li>
               <li><Link to={'/login'}>Login</Link></li>
            </ul>


            </div>
        );
      }
  }

  render() {
      return (
        <div className="navbar-div">

            { this.getLinks() }

        </div>
      );
  }
}

export default NavBar;
