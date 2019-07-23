import React from "react";
import ChairSvg from "../SVG/ChairSvg";
import { Wrapper } from "../Wrapper";
import flatBackground from "../../assets/appartement4.png";
import Modal from "../../containers/Modal";

class Enssemble extends React.Component {
  state = {
    shouldRenderModal: false,
    dossierSelectedColor: "#B0E0E6",
    dossierLateralSelectedColor: "#B0E0E6",
    assiseSelectedColor: "#B0E0E6",
    screenHeight: "",
    screenWidth: ""
  };

  componentWillMount = () => {
    this.setState({
      screenHeight: window.innerHeight + "px",
      screenWidth: window.innerWidth + "px"
    });
  };

  shouldRenderModal = () => {
    this.setState({ shouldRenderModal: !this.state.shouldRenderModal });
  };
  setDossierColor = color => {
    this.setState({ dossierSelectedColor: color });
  };
  setDossierLateralColor = color => {
    this.setState({ dossierLateralSelectedColor: color });
  };
  setAssiseColor = color => {
    this.setState({ assiseSelectedColor: color });
  };
  renderItem = () => {
    if (this.state.shouldRenderModal === true) {
      return (
        <Modal
          shouldRenderModal={this.shouldRenderModal}
          setDossierColor={this.setDossierColor}
          setDossierLateralColor={this.setDossierLateralColor}
          setAssiseColor={this.setAssiseColor}
          colorDossier={this.state.dossierSelectedColor}
          colorDossierLateral={this.state.dossierLateralSelectedColor}
          colorAssise={this.state.assiseSelectedColor}
        />
      );
    }
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
          <ChairSvg
            width={400}
            height={400}
            dossierSelectedColor={this.state.dossierSelectedColor}
            dossierLateralSelectedColor={this.state.dossierLateralSelectedColor}
            assiseSelectedColor={this.state.assiseSelectedColor}
          />
        </Wrapper>
      </Wrapper>
    );
  };
  render() {
    return this.renderItem();
  }
}
export default Enssemble;
