import * as React from "react";
import SwipeableViews from "react-swipeable-views";

const styles = {
  slide1: {
    backgroundImage: `url(${require("../../resources/images/swiper.png")})`,
    height: "206px",
    backgroundSize: "100% 100%",
    MozBackgroundSize: "100% 100%"
  },
  slide2: {
    minHeight: 206,
    color: "#fff",
    background: "#B3DC4A"
  },
  slide3: {
    minHeight: 206,
    color: "#fff",
    background: "#6AC0FF"
  }
};

const MyComponent = () => (
  <div style={{ paddingRight: "15px", paddingLeft: "15px" }}>
    <SwipeableViews enableMouseEvents>
      <div style={styles.slide1}>slide n°1</div>
      <div style={styles.slide2}>slide n°2</div>
      <div style={styles.slide3}>slide n°3</div>
    </SwipeableViews>
  </div>
);

export default MyComponent;
