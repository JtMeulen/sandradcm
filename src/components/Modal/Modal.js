import React, {Component} from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { isMobile } from 'react-device-detect';
import cn from 'classnames';

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
		const currentImage = `https://drive.google.com/uc?id=${allImages[idx].image}`;
		const imageDetails = allImages[idx];
		const hasText = !isMobile && imageDetails.text && imageDetails.text.length > 0;
		const whiteBG = imageDetails.options && imageDetails.options === 'whiteBG';
		const isSmall = imageDetails.options && imageDetails.options === 'isSmall';
		const isMedium = imageDetails.options && imageDetails.options === 'isMedium';

		return(
			<div className={styles.modalBackground} onClick={this.closeModalHandler}>

				{!isMobile && <div className={styles.leftButton} onClick={this.previousImageHandler}>&lt;</div>}
				{!isMobile && <div className={styles.rightButton} onClick={this.nextImageHandler}>&gt;</div>}

					<div style={{backgroundColor: whiteBG ? 'white' : ''}}>
						<div className={styles.closeButton} onClick={this.closeModalHandler}>X</div>
						<img className={cn(styles.image, { [styles.mobileImage]: isMobile, [styles.textArea]: hasText })} src={currentImage} alt="" onClick={this.doNothingHandler}/>
					</div>

					{!isMobile &&
						<div className={cn(styles.subtext, { [styles.subtextSmall]: isSmall, [styles.subtextMedium]: isMedium })} onClick={this.doNothingHandler} dangerouslySetInnerHTML={{ __html: imageDetails.text }} />
					}
				</div>
			);
		}
	}

	export default ImageSlider;
