import React, { Component } from "react";

class Slider extends Component {
  state = {
    visible: false
  }
  ref = React.createRef();
  visible = false;

  componentDidUpdate() {
    this.visible = this.props.bottomOfWindowPixel - this.ref.current.offsetTop > 200;
  }

  render() {
    const { msDelay, children } = this.props;

    const translateY = this.visible ? 'translateY(0)' : 'translateY(500px)';
    const transition = `transform .5s .${msDelay ? msDelay : 0}s linear`;

    return (
      <div ref={this.ref} style={{ transform: translateY, transition: transition }}>
        {children}
      </div>
    );
  }
}

export default Slider;
