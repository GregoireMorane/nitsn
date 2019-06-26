import React from "react";
import HorlogeSvg from "../SVG/HorlogeSvg";
import ChairSvg from "../SVG/ChairSvg";
import { Wrapper } from "../Wrapper";
import flatBackground from "../../assets/appartement3.jpg";
import Modal from "../../containers/Modal";

class Enssemble extends React.Component {
  state = {
    shouldRenderModal: false,
    dossierSelectedColor: "#B0E0E6",
    dossierLateralSelectedColor: "#B0E0E6",
    assiseSelectedColor: "#B0E0E6",
  };
  shouldRenderModal = () => {
    this.setState({ shouldRenderModal: !this.state.shouldRenderModal });
  };
  setDossierColor = (color) => {
    this.setState({ dossierSelectedColor: color })
  }
  setDossierLateralColor = (color) => {
    this.setState({ dossierLateralSelectedColor: color })
  }
  setAssiseColor = (color) => {
    this.setState({ assiseSelectedColor: color })
  }
  renderItem = () => {
    if (this.state.shouldRenderModal === true) {
      return <Modal shouldRenderModal={this.shouldRenderModal} setDossierColor={this.setDossierColor} setDossierLateralColor={this.setDossierLateralColor} setAssiseColor={this.setAssiseColor} colorDossier={this.state.dossierSelectedColor} colorDossierLateral={this.state.dossierLateralSelectedColor} colorAssise={this.state.assiseSelectedColor} />;
    }
    return (
      <Wrapper
        backgroundImage={flatBackground}
        position="relative"
        height="800px"
        width="1600px"
        margin="auto"
        backgroundRepeat="no-repeat"
      >
        <Wrapper
          position="absolute"
          top="380px"
          left="180px"
          action={this.shouldRenderModal}
        >
          <ChairSvg width={470} height={370} dossierSelectedColor={this.state.dossierSelectedColor} dossierLateralSelectedColor={this.state.dossierLateralSelectedColor} assiseSelectedColor={this.state.assiseSelectedColor} />
        </Wrapper>
        <Wrapper position="absolute" top="20px" left="750px">
          <HorlogeSvg width={316} height={370} />
        </Wrapper>
      </Wrapper>
    );
  };
  render() {
    console.log(this.state.shouldRenderModal);
    return this.renderItem();
  }
}
export default Enssemble;
