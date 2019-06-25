import React from "react";

import { Typo } from "../../components/Typo";
import { Wrapper } from "../../components/Wrapper";

class Header extends React.Component {
  handleClick = () => {
    console.log("clicked");
  };
  render() {
    return (
      <Wrapper height="100px" backgroundColor="#fff">
        <Typo
          text="nitsn"
          color="black"
          textAlign="left"
          fontSize="50px"
          padding="35px 0px 0px 20px"
          letterSpacing="7px"
        />
      </Wrapper>
    );
  }
}

export default Header;
