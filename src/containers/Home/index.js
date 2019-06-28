import React from "react";
import { Wrapper } from "../../components/Wrapper/";
import Header from "../Header";

import Enssemble from "../../components/Enssemble";

class Home extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Enssemble />
      </Wrapper>
    );
  }
}

export default Home;
