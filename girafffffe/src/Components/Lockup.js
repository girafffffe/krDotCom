import React, { Component } from 'react';
import { format } from 'url';


class Lockup extends React.Component {
  render() {
    return (
      <div className="content-wrap">
	      <div className="content-wrap__lockup">
		      <h1 className="fas fa-file-medical content-wrap__title--main animated wave"></h1>
		        <h1 className="content-wrap__title--main">1.25.2019</h1>
		        <p className="content-wrap__title--secondary">updating architecture</p>
	      </div>
      </div>
    );
  }
}

export default Lockup;
