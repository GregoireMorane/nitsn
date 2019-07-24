import React from 'react';
import { Wrapper } from '../../components/Wrapper';
import { ButtonIcon } from '../../components/ButtonIcon';
import iconLeave from '../../assets/icons/leave.png';

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
        <ButtonIcon
          height="40px"
          width="40px"
          margin="20px"
          icon={iconLeave}
          action={this.props.shouldRender3DView}
        />
      </Wrapper>
    );
  }
}

export default View3D;
