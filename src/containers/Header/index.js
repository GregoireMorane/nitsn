import React from "react";

import { Typo } from "../../components/Title";
import { Wrapper } from "../../components/Wrapper";
import { Button } from "../../components/Button";

class Header extends React.Component {
  handleClick = () => {
    console.log("clicked");
  };
  render() {
    return (
      <Wrapper height="100px" backgroundColor="#4682B4">
        <Typo text="test" />
        <Button
          text="clique moi"
          width="60"
          height="30"
          action={this.handleClick}
        />
      </Wrapper>
    );
  }
}

export default Header;
