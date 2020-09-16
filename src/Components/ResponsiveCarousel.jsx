import React, { Component } from 'react';
import { Link } from "react-router-dom";
// original css file, the min file. will include this again once I figure out which styles I want to customize in the custom css folder and delete the ones I will not be changing
// so will need to include the min file in order to get the styles I end up not changing
//import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../Assets/responCarouselCustom.css";
import { Carousel } from 'react-responsive-carousel';

class ResponsiveCarousel extends Component {
    render() {
        return (
            <React.Fragment>
                <Carousel autoPlay={true} infiniteLoop={true} interval={2000} transitionTime={800} showThumbs={false} showStatus={false}>
                    {this.props.carouselData.map((image, index) => (
                        <Link to={image.link} key={index}>
                            <div>
                                <img src={image.image} alt={image.alt} />
                                <p className="legend">{image.title}</p>
                            </div>
                        </Link>
                    ))}
                </Carousel>
                <div></div>
            </React.Fragment>
        );
    }
}

export default ResponsiveCarousel;

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>