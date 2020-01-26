import React, { Component } from "react";

class Slider extends Component {
  state = {
    forcedUpdate: false
  }
  ref = React.createRef();
  visible = false;

  componentDidMount() {
    if(this.props.isThumbnail) {
      setTimeout(() => {
        this.visible = this.props.bottomOfWindowPixel - this.ref.current.offsetTop > 50;
        this.setState({forcedUpdate: true});
      }, 1);
    }
  }

  componentDidUpdate() {
    this.visible = this.props.bottomOfWindowPixel - this.ref.current.offsetTop > 50;
  }

  render() {
    const { msDelay, children } = this.props;

    const translateY = this.visible ? 'translateY(0)' : 'translateY(100px)';
    const opacity = this.visible ? '1' : '0';
    const transition = `all .3s .${msDelay ? msDelay : 0}s linear`;

    return (
      <div ref={this.ref} style={{ transform: translateY, opacity: opacity, transition: transition }}>
        {children}
      </div>
    );
  }
}

export default Slider;
