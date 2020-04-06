import React, { Component } from 'react';
import './Detail.css';

class Detail extends Component {

  componentDidMount() {
    const { location, history } = this.props;
    if(location.state === undefined) {
      history.push('/');
    }
  }

  render() {
    const { location } = this.props;
    if(location.state) {
      return (
        <div className="detail__container">
          <span><h3>{location.state.title} - {location.state.year}</h3></span>
          <span>{location.state.summary}</span>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;