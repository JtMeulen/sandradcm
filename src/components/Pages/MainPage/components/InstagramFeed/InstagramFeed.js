import React, { Component } from 'react';
import Slider from '../../../../Slider';
import { isMobile } from 'react-device-detect';
import styles from './InstagramFeed.module.css';

class InstagramFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instaImages: []
    }
    this.myRef = React.createRef();
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

  handleScrollLeft = () => {
    const container = this.myRef.current;
    container.scrollTo({
      top: 0,
      left: container.scrollLeft + 280,
      behavior: 'smooth'
    })
  }

  handleScrollRight = () => {
    const container = this.myRef.current;
    container.scrollTo({
      top: 0,
      left: container.scrollLeft - 280,
      behavior: 'smooth'
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
        </div>
      </a>
      ) : null;
    });

    return (
      <Slider bottomOfWindowPixel={this.props.bottomOfWindowPixel}>
        <div style={{
          width: "100%",
          minHeight: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "100px"
        }}>
          {!isMobile && <div className={styles.buttonLeft} onClick={this.handleScrollRight} />}
          <div ref={this.myRef} className={styles.scrollContainer}>
            {thumbnails}
            {/* Adding a link to instagram directly */}
            <a href={"https://www.instagram.com/san.and.joe.onthego/"} target="_blank" rel="noopener noreferrer" >
              <div className={styles.thumbContainer} >
                <div className={styles.seeMore}>
                  See More
                </div>
              </div>
            </a>
          </div>
          {!isMobile && <div className={styles.buttonRight} onClick={this.handleScrollLeft} />}
        </div>
      </Slider>
    );
  }
}

export default InstagramFeed;
