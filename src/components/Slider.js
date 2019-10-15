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
        this.visible = this.props.bottomOfWindowPixel - this.ref.current.offsetTop > 200;
        this.setState({forcedUpdate: true});
      }, 1);
    }
  }

  componentDidUpdate() {
    this.visible = this.props.bottomOfWindowPixel - this.ref.current.offsetTop > 200;
  }

  render() {
    const { msDelay, children } = this.props;

    const translateY = this.visible ? 'translateY(0)' : 'translateY(500px)';
    const transition = `transform .3s .${msDelay ? msDelay : 0}s linear`;

    return (
      <div ref={this.ref} style={{ transform: translateY, transition: transition }}>
        {children}
      </div>
    );
  }
}

export default Slider;
