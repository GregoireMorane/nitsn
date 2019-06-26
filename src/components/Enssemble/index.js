import React from "react";
import HorlogeSvg from "../SVG/HorlogeSvg";
import ChairSvg from "../SVG/ChairSvg";
import { Wrapper } from "../Wrapper";
import flatBackground from '../../assets/appartement3.jpg'



class Enssemble extends React.Component {
  render() {
    return (
      <Wrapper backgroundImage={flatBackground} position="relative" height="800px" width="1600px" margin="auto" backgroundRepeat="no-repeat">
        <Wrapper position="absolute" top="380px" left="180px">
          <ChairSvg width={470} height={370} />
        </Wrapper>
        <Wrapper position="absolute" top="20px" left="750px">
          <HorlogeSvg width={316} height={370} />
        </Wrapper>
      </Wrapper>
    )
  }
}
export default Enssemble;


