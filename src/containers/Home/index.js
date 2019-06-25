import React from "react";
import { Wrapper } from "../../components/Wrapper/";
import Header from "../Header";
import flatBackground from "../../assets/flatBackground.jpg";
import ChairSvgfrom from "../../components/SVG/ChairSvg";

class Home extends React.Component {
  state = {
    screenWidth: "",
    screenHeight: ""
  };

  componentWillMount() {
    this.setState({
      screenHeight: window.innerHeight + "px",
      screenWidth: window.innerWidth + "px"
    });
  }
  render() {
    return (
      <Wrapper>
        <Header />
        <Wrapper
          backgroundImage={flatBackground}
          height={this.state.screenHeight}
          width={this.state.screenWidth}
        >
          <Wrapper position="absolute" bottom="380px" left="550px">
            <ChairSvgfrom width={450} height={468} />
          </Wrapper>
        </Wrapper>
      </Wrapper>
    );
  }
}

export default Home;
