import React, { Component } from 'react';

class InstagramFeed extends Component {

  componentDidMount() {
    fetch("https://sdcmbe.joeytermeulen.now.sh/insta")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    return (
      <div style={{ height: "600px", width: "100%" }}>
        Instagram feed comes here!
      </div>
    );
  }
}

export default InstagramFeed;
