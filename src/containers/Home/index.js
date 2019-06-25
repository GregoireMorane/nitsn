import React from "react";
import { Wrapper } from "../../components/Wrapper/";
import Header from "../Header";

import flatBackground from '../../assets/appartement2.jpg'
import ChairSvgfrom from '../../components/SVG/ChairSvg'
import Center from 'react-center';
import HorlogeSvg from "../../components/SVG/HorlogeSvg";

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
        <Center>
          <img src={flatBackground} alt="appartement" />
          <Wrapper position="absolute" top="680px" left="390px">
            <ChairSvgfrom width={416} height={370} />
          </Wrapper>
          <Wrapper position="absolute" top="280px" left="790px">
            <HorlogeSvg width={416} height={370} />
          </Wrapper>
        </Center>
      </Wrapper>
    );
  }
}

export default Home;
