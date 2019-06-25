import React from "react";
import { Wrapper } from '../../components/Wrapper/index'
import Header from "../Header";
import flatBackground from '../../assets/flatBackground.jpg'
import ChairSvgfrom from '../../components/SVG/ChairSvg'

class Home extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Wrapper backgroundImage={flatBackground} height="1000px">
          <Wrapper>
            <ChairSvgfrom width={300} height={700} />
          </Wrapper>
        </Wrapper>
      </Wrapper>
    );
  }
}

export default Home;
