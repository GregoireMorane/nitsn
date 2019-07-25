import React from 'react';
import { Wrapper } from '../../components/Wrapper/';
import { connect } from 'react-redux';
import HorlogeSvg from "../../components/SVG/HorlogeSvg";
import ChairSvg from "../../components/SVG/ChairSvg";
import flatBackground from "../../assets/appartement4.png";
import { Link } from "react-router-dom";
import FauteuilSvg from '../../components/SVG/FauteuilSvg';

class Home extends React.Component {
  render() {
    return (
      <Wrapper
        height={window.innerHeight + 'px'}
        width={window.innerWidth + 'px'}
        position="relative"
        margin="auto"
      >
        <Wrapper
          position="absolute"
          height={window.innerHeight + 'px'}
          width={window.innerWidth + 'px'}
        >
          <img src={flatBackground} alt="flat" height="100%" width="100%" />
        </Wrapper>
        <Wrapper
          position="absolute"
          top="30%"
          left="10%"
          action={this.shouldRenderModal}
        >
          <Link to={{ pathname: "/modal", initialColor: this.props.chair }}>
            <FauteuilSvg
              width={300}
              height={300}
              dossierSelectedColor={this.props.chair.dossierColor}
              dossierLateralSelectedColor={this.props.chair.dossierLatColor}
              assiseSelectedColor={this.props.chair.assiseColor}
            />
          </Link>
        </Wrapper>
        <Wrapper
          position="absolute"
          top="22%"
          left="92%"
          action={this.shouldRenderModal}
        >
          <Link to={{ pathname: "/modal", initialColor: this.props.horloge }}>
            <HorlogeSvg
              stripeSelectedColor={this.props.horloge.stripeColor}
            />
          </Link>
        </Wrapper>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  chair: state.chair,
  horloge: state.horloge
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
