// src/components/main/main_page.js

import React from 'react';
import { Link } from 'react-router-dom'

class MainPage extends React.Component {

  render() {
    let image_string = (<img src={ require(`../../assets/images/ny.jpeg`) } alt="new york city streets" />);

    return (
      <div>
        <div className="container">
        {image_string}
        <div className="centered">
          <h2>There are so many events are going on all around you every day</h2>
          <p>See everything the city has to offer</p>
          <Link className="call-to-action" to={'/signup'}>Signup</Link>
        </div>
    
        </div>


      </div>
    );
  }
}

export default MainPage;
