import React from "react";
import { Wrapper } from "../../components/Wrapper";
import { Button } from "../../components/Button";

class View3D extends React.Component {
  render() {
    return (
      <Wrapper
        flex="1"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <iframe
          src={this.props.src3DMAX}
          width="1024"
          height="768"
          allowfullscreen="true"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          frameborder="0"
          title="iFrame"
        />
        <Button
          action={this.props.shouldRender3DView}
          text="close"
          height="50px"
          width="70px"
          backgroundColor="black"
          color="white"
        />
      </Wrapper>
    );
  }
}

export default View3D;
