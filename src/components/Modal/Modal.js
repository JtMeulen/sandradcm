import React, {Component} from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import styles from './Modal.module.css';

class ImageSlider extends Component {

    state = {
        allImages: this.props.allImages,
        idx: this.props.idx
    }

    componentDidMount() {
        disableBodyScroll();
    }

    componentWillUnmount() {
        enableBodyScroll();
    }

    closeModalHandler = () => {
        this.props.closeModalHandler();
    }

    doNothingHandler = (e) => {
        e.stopPropagation();
    }

    previousImageHandler = (e) => {
        e.stopPropagation();
        const imgArrLength = this.state.allImages.length - 1;

        if(this.state.idx > 0){
            this.setState(prevState => {
                return {idx: prevState.idx - 1}
            });
        } else {
            this.setState({idx: imgArrLength})
        }
    }

    nextImageHandler = (e) => {
        e.stopPropagation();
        const imgArrLength = this.state.allImages.length - 1;

        if(this.state.idx < imgArrLength){
            this.setState(prevState => {
                return {idx: prevState.idx + 1}
            });
        } else {
            this.setState({idx: 0})
        }
    }

    render() {
        const { allImages, idx } = this.state;
        const currentImage = `images/${allImages[idx].category}/${allImages[idx].image}`;
        const imageDetails = allImages[idx];

        return(
            <div className={styles.modalBackground} onClick={this.closeModalHandler}>
                <div className={styles.leftButton} onClick={this.previousImageHandler}>&lt;</div>
                <div className={styles.rightButton} onClick={this.nextImageHandler}>&gt;</div>

                <div>
                    <div className={styles.closeButton} onClick={this.closeModalHandler}>X</div>
                    <img className={styles.image} src={currentImage} alt="" onClick={this.doNothingHandler}/>
                </div>

                <div className={styles.subtext} onClick={this.doNothingHandler}>
                    {imageDetails.text}
                </div>
            </div>
        );
    }
}

export default ImageSlider;