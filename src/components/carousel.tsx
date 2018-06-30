import * as React from "react";
import SwipeableViews from "react-swipeable-views";

const styles = {
  slide1: {
    padding: 15,
    minHeight: 100,
    color: "#fff",
    background: "#FEA900"
  },
  slide2: {
    padding: 15,
    minHeight: 100,
    color: "#fff",
    background: "#B3DC4A"
  },
  slide3: {
    padding: 15,
    minHeight: 100,
    color: "#fff",
    background: "#6AC0FF"
  }
};

const MyComponent = () => (
  <SwipeableViews enableMouseEvents>
    <div style={styles.slide1}>slide n°1</div>
    <div style={styles.slide2}>slide n°2</div>
    <div style={styles.slide3}>slide n°3</div>
  </SwipeableViews>
);

export default MyComponent;
