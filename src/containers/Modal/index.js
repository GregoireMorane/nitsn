import React from "react";
import { Wrapper } from "../../components/Wrapper/";
import { Typo } from "../../components/Typo/";
import { Button } from "../../components/Button/";
import { ButtonIcon } from "../../components/ButtonIcon";
import ChairSvgfrom from "../../components/SVG/ChairSvg";
import View3D from "../View3D";
import arrowLeft from "../../assets/icons/arrow-left.png";
import arrowRight from "../../assets/icons/arrow-right.png";
import pantone from "../../assets/icons/pantone.png";
import texture from "../../assets/icons/texture.png";
import size from "../../assets/icons/size.png";
import iconLeave from "../../assets/icons/leave.png";
import icon3d from "../../assets/icons/3d.png";
import iconLike from "../../assets/icons/like.png";
import iconReset from "../../assets/icons/resetsettings.png";
import { tsImportEqualsDeclaration } from "@babel/types";
import { Link } from 'react-router-dom';


class Modal extends React.Component {
  state = {
    colors: [
      {
        color: "#1E90FF"
      },
      {
        color: "#FF0000"
      },
      {
        color: "#2E8B57"
      },
      {
        color: "#FFFF00"
      },
      {
        color: "#FF1493"
      }
    ],
    screenWidth: "",
    screenHeight: "",
    shouldRenderBlockColors: false,
    dossierSelectedColor: this.props.location.state.dossierLateralSelectedColor,
    dossierLateralSelectedColor: this.props.location.state.dossierLateralSelectedColor,
    assiseSelectedColor: this.props.location.state.dossierLateralSelectedColor,
    shouldRenderBlockChairElements: false,
    part: "",
    shouldRender3DView: false,
    src3DMAX:
      "https://myhub.autodesk360.com/ue288ba40/shares/public/SHabee1QT1a327cf2b7afe96de93b1079cec?mode=embed"
  };

  // componentWillMount() {
  //   this.setState({
  //     screenHeight: window.innerHeight + "px",
  //     screenWidth: window.innerWidth + "px",
  //     dossierSelectedColor: this.props.colorDossier,
  //     dossierLateralSelectedColor: this.props.colorDossierLateral,
  //     assiseSelectedColor: this.props.colorAssise
  //   });
  // }

  shouldRenderBlockColors = (color, part) => {
    if (this.state.shouldRenderBlockColors === true) {
      if (this.state.part === "dossier") {
        this.setState({
          dossierSelectedColor: color
        });
      } else if (this.state.part === "dossier lateral") {
        this.setState({
          dossierLateralSelectedColor: color
        });
      } else if (this.state.part === "assise") {
        this.setState({
          assiseSelectedColor: color
        });
      }
    } else {
      this.setState({
        shouldRenderBlockColors: true
      });
    }
  };

  shouldRenderBlockChairElements = () => {
    this.setState({
      shouldRenderBlockChairElements: !this.state.shouldRenderBlockChairElements
    });
  };

  shouldRender3DView = () => {
    this.setState({
      shouldRender3DView: !this.state.shouldRender3DView
    });
  };

  shouldSetPart = part => {
    this.setState({ part: part, shouldRenderBlockColors: true });
  };

  shouRenderBlockColors = () => {
    this.setState({
      shouldRenderBlockColors: !this.state.shouldRenderBlockColors
    });
  };

  shouldCancelBlockColor = () => {
    this.setState({ shouldRenderBlockColors: false });
    if (this.state.part === "dossier") {
      this.setState({
        dossierSelectedColor: "#B0E0E6"
      });
    } else if (this.state.part === "dossier lateral") {
      this.setState({
        dossierLateralSelectedColor: "#B0E0E6"
      });
    } else if (this.state.part === "assise") {
      this.setState({
        assiseSelectedColor: "#B0E0E6"
      });
    }
  };

  // validatePersonnalisation = () => {
  //   this.props.setDossierColor(this.state.dossierSelectedColor);
  //   this.props.setDossierLateralColor(this.state.dossierLateralSelectedColor);
  //   this.props.setAssiseColor(this.state.assiseSelectedColor);
  //   this.props.shouldRenderModal();
  // };

  renderBlockColors = () => {
    if (this.state.shouldRenderBlockColors === true) {
      return (
        <Wrapper
          flex="1"
          display="flex"
          width="100%"
          borderBottom="3px solid white"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Wrapper>
            <Typo text="Choix des couleurs" fontWeight="bold" />
          </Wrapper>
          <Wrapper paddingTop="15px" display="grid">
            {this.state.colors.map((e, i) => (
              <Wrapper
                key={i}
                backgroundColor={e.color}
                width="50px"
                height="50px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                action={() => this.shouldRenderBlockColors(e.color)}
              >
                <Typo text={e.color} fontSize="10px" fontWeight="bold" />
              </Wrapper>
            ))}
          </Wrapper>
          <Wrapper>
            <Button text="Reset" action={this.shouldCancelBlockColor} />
            <Button text="Validate" action={this.shouRenderBlockColors} />
          </Wrapper>
        </Wrapper>
      );
    } else if (this.state.shouldRenderBlockChairElements === true) {
      return (
        <Wrapper
          flex="1"
          display="flex"
          width="100%"
          borderBottom="3px solid white"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Wrapper>
            <Typo
              text="Choix de l'element a personnnaliser"
              fontWeight="bold"
            />
          </Wrapper>
          <Wrapper paddingTop="15px">
            <Wrapper action={() => this.shouldSetPart("dossier")}>
              <Typo text="Dossier" fontWeight="bold" />
            </Wrapper>
            <Wrapper action={() => this.shouldSetPart("dossier lateral")}>
              <Typo text="Dossier lateral" fontWeight="bold" />
            </Wrapper>
            <Wrapper action={() => this.shouldSetPart("assise")}>
              <Typo text="Assise" fontWeight="bold" />
            </Wrapper>
          </Wrapper>
        </Wrapper>
      );
    }
    return (
      <Wrapper
        flex="1"
        display="flex"
        width="100%"
        borderBottom="3px solid white"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        action={this.shouldRenderBlockChairElements}
      >
        <Wrapper>
          <Typo text="Choix des couleurs" fontWeight="bold" />
        </Wrapper>
        <Wrapper paddingTop="15px">
          <img src={pantone} width="100px" height="100px" alt="palette" />
        </Wrapper>
      </Wrapper>
    );
  };

  resetColors = () => {
    this.setState({
      dossierSelectedColor: this.props.colorDossier,
      dossierLateralSelectedColor: this.props.colorDossierLateral,
      assiseSelectedColor: this.props.colorAssise
    });
  };

  render() {
    console.log("####################", this.state);
    console.log("fffffffffffffff", this.props.location.state.dossierLateralSelectedColor)
    return (
      <Wrapper
        display="flex"
        height={this.state.screenHeight}
        backgroundColor="#F7F7F7"
      >
        <Wrapper flex="3" display="flex" flexDirection="column" height="100%">
          <Wrapper flex="3" width="100%" display="flex" alignItems="center">
            <Wrapper flex="1" display="flex" justifyContent="center">
              <img width="50px" height="50px" src={arrowRight} alt="arrow" />
            </Wrapper>
            <Wrapper
              flex="3"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <ChairSvgfrom
                width="416"
                height="370"
                dossierSelectedColor={this.state.dossierSelectedColor}
                dossierLateralSelectedColor={
                  this.state.dossierLateralSelectedColor
                }
                assiseSelectedColor={this.state.assiseSelectedColor}
              />
            </Wrapper>
            <Wrapper flex="1" display="flex" justifyContent="center">
              <img width="50px" height="50px" src={arrowLeft} alt="arrow" />
            </Wrapper>
          </Wrapper>
          <Wrapper
            flex="1"
            display="flex"
            width="100%"
            alignItems="center"
            justifyContent="center"
          >
            <ButtonIcon
              height="40px"
              width="40px"
              margin="20px"
              icon={iconLeave}
              action={this.props.shouldRenderModal}
            />
            <Link to={{ pathname: "/", state: this.state }}>
              <ButtonIcon
                height="40px"
                width="40px"
                margin="20px"
                icon={iconLike}
              />
            </Link>
            <ButtonIcon
              height="40px"
              width="40px"
              margin="20px"
              icon={iconReset}
              action={this.resetColors}
            />
            <ButtonIcon
              height="40px"
              width="40px"
              margin="20px"
              icon={icon3d}
              action={this.shouldRender3DView}
            />
          </Wrapper>
        </Wrapper>
        <Wrapper
          flex="1"
          display="flex"
          flexDirection="column"
          borderLeft="3px solid white"
          height="100%"
        >
          {this.renderBlockColors()}
          <Wrapper
            flex="1"
            display="flex"
            width="100%"
            borderBottom="3px solid white"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Wrapper>
              <Typo text="Choix des motifs" fontWeight="bold" />
            </Wrapper>
            <Wrapper paddingTop="15px">
              <img src={texture} width="100px" height="100px" alt="texture" />
            </Wrapper>
          </Wrapper>
          <Wrapper
            flex="1"
            display="flex"
            width="100%"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Wrapper>
              <Typo text="Choix des tailles" fontWeight="bold" />
            </Wrapper>
            <Wrapper paddingTop="15px">
              <img src={size} width="100px" height="100px" alt="size" />
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    );
  }
}

export default Modal;
