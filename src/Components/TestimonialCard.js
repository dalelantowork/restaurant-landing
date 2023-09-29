import React, { Component } from "react";
import ReactCardCarousel from "react-card-carousel";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

class TestimonialCard extends Component {
  static get CONTAINER_STYLE() {
    return {
      position: "relative",
      height: "500px",
      width: "100%",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "middle",
      color: "white",
    };
  }

  static get CARD_STYLE() {
    return {
        backgroundColor: "#4c4c4c",
        padding: "1.5rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "750px",
        // borderRadius: "2.5rem",
        flexDirection: "column",
        textAlign: "center",
    };
  }

  render() {
    return (
      <div style={TestimonialCard.CONTAINER_STYLE}>
        <ReactCardCarousel autoplay={true} autoplay_speed={3000}>
          <div className="testimonial-section-bottom" style={TestimonialCard.CARD_STYLE}>
            <img src={ProfilePic} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
              elit. Dolor turpis molestie dui magnis facilisis at fringilla
              quam.
            </p>
            <div className="testimonials-stars-container" >
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <h2>John Doe</h2>
          </div>
          <div className="testimonial-section-bottom" style={TestimonialCard.CARD_STYLE}>
            <img src={ProfilePic} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
              elit. Dolor turpis molestie dui magnis facilisis at fringilla
              quam.
            </p>
            <div className="testimonials-stars-container">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <h2>Mary Jane</h2>
          </div>
          <div className="testimonial-section-bottom" style={TestimonialCard.CARD_STYLE}>
            <img src={ProfilePic} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
              elit. Dolor turpis molestie dui magnis facilisis at fringilla
              quam.
            </p>
            <div className="testimonials-stars-container">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <h2>Peter Parker</h2>
          </div>
        </ReactCardCarousel>
      </div>
    );
  }
}

export default TestimonialCard;
