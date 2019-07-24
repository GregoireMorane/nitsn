import React from "react";
import { Wrapper } from "../../components/Wrapper/";
import { connect } from "react-redux";

import HorlogeSvg from "../../components/SVG/HorlogeSvg";
import ChairSvg from "../../components/SVG/ChairSvg";
import flatBackground from "../../assets/appartement4.png";
import { Link } from "react-router-dom";

class Home extends React.Component {
  componentWillMount = () => {
    this.setState({
      screenHeight: window.innerHeight + "px",
      screenWidth: window.innerWidth + "px"
    });
  };

  render() {
    return (
      <Wrapper
        height={this.state.screenHeight}
        width={this.state.screenWidth}
        position="relative"
        margin="auto"
      >
        <Wrapper
          position="absolute"
          height={this.state.screenHeight}
          width={this.state.screenWidth}
        >
          <img src={flatBackground} alt="flat" height="100%" width="100%" />
        </Wrapper>
        <Wrapper
          position="absolute"
          top="40%"
          left="20%"
          action={this.shouldRenderModal}
        >
          <Link to={{ pathname: "/modal", initialColor: this.props.chair }}>
            <ChairSvg
              width={400}
              height={400}
              dossierSelectedColor={this.props.chair.dossierColor}
              dossierLateralSelectedColor={this.props.chair.dossierLatColor}
              assiseSelectedColor={this.props.chair.assiseColor}
            />

          </Link>
        </Wrapper>
        <Wrapper
          position="absolute"
          top="9%"
          left="83%"
          action={this.shouldRenderModal}
        >
          <Link to={{ pathname: "/modal", initialColor: this.props.horloge }}>

            <HorlogeSvg
              width={400}
              height={400}
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
  dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
