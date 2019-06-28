import React from "react";
import { Wrapper } from "../../components/Wrapper"
import { Button } from '../../components/Button'
class View3D extends React.Component {

  render() {
    return (
      <Wrapper>
        <iframe src={this.props.src3DMAX}
          width="640"
          height="480"
          allowfullscreen="true"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          frameborder="0">
        </iframe>
        <Button action={this.props.shouldRender3DView} text="close" width="70px" height="50px"/>
      </Wrapper>
    );
  }
}

export default View3D;
