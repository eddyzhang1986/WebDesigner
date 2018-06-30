import * as React from "react";
import SwipeableViews from "react-swipeable-views";
const RU = require("react-swipeable-views-utils");
const autoPlay: any = RU.autoPlay;
const Pagination: any = {};
const SupportTouch: any = {};

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
  slide1: {
    //backgroundColor: "#FEA900",
    //padding: 15,
    height: "206px",
    minHeight: 100,
    color: "#fff"
  },
  slide2: {
    backgroundColor: "#B3DC4A",
    //padding: 15,
    height: "206px",
    minHeight: 100,
    color: "#fff"
  },
  slide3: {
    backgroundColor: "#6AC0FF",
    //padding: 15,
    height: "206px",
    minHeight: 100,
    color: "#fff"
  }
};

class Carousel extends React.Component {
  state = {
    index: 0
  };

  handleChangeIndex = (index: any) => {
    this.setState({
      index
    });
  };

  render() {
    const { index } = this.state;

    return (
      <div
        style={{
          position: "relative",
          top:"0px",
          paddingLeft: 15,
          paddingRight: 15,
          height: "206px"
        }}
      >
        <AutoPlaySwipeableViews
          enableMouseEvents
          index={index}
          onChangeIndex={this.handleChangeIndex}
        >
          <div style={styles.slide1}>
            <img
              src={require("../../resources/images/swiper.png")}
              width={320}
            />
          </div>
          <div style={styles.slide2}>slide n°2</div>
          <div style={styles.slide3}>slide n°3</div>
        </AutoPlaySwipeableViews>
      </div>
    );
  }
}

export default Carousel;
