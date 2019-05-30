import React, { Component } from 'react';
import { format } from 'url';
import { BrowserRouter as Router, Link } from "react-router-dom";



class siteNav extends React.Component {
  render() {
    return (
      <Router>
          <div>
          <p className="content-wrap__title--secondary">
                {/* basic link */}
              <Link to ="/testLink">this is a standard Link</Link>
        </p>
          </div>
      </Router>
    );
  }
}

export default siteNav;
