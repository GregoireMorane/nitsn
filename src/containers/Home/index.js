import React from "react";
import { Wrapper } from "../../components/Wrapper/";
import Header from "../Header";

import Enssemble from "../../components/Enssemble";

class Home extends React.Component {
  // state = {
  //   screenWidth: "",
  //   screenHeight: ""
  // };

  // componentWillMount() {
  //   this.setState({
  //     screenHeight: window.innerHeight + "px",
  //     screenWidth: window.innerWidth + "px"
  //   });
  // }
  render() {
    return (
      <Wrapper>
        <Header/>
         <Enssemble/>
      </Wrapper>
    );
  }
}

export default Home;
