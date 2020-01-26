import React, { Component } from 'react';
import Slider from '../../../../Slider';
import styles from './InstagramFeed.module.css';

class InstagramFeed extends Component {

  state = {
    instaImages: []
  }

  componentDidMount() {
    fetch("https://sdcmbe.joeytermeulen.now.sh/insta")
    .then(response => response.json())
    .then((res) => {
      this.setState({ instaImages: res.response })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    const { instaImages } = this.state;

    const thumbnails = instaImages.map((post) => {
    return post.link && post.link !== "error" ? (
      <a href={`https://www.instagram.com/p/${post.postId}/`} target="_blank" rel="noopener noreferrer" >
        <div className={styles.thumbContainer} >
          <div
            className={styles.instaThumbnail}
            style={{backgroundImage: `url(${post.link})`}}
          />
          <span>Go to Instagram</span>
        </div>
      </a>
      ) : null;
    })

    return (
      <Slider bottomOfWindowPixel={this.props.bottomOfWindowPixel}>
        <div className={styles.instaContainer}>
          {thumbnails}
        </div>
      </Slider>
    );
  }
}

export default InstagramFeed;
