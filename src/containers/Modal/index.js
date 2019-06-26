import React from "react";
import { Wrapper } from "../../components/Wrapper/";
import { Typo } from "../../components/Typo/";
import { Button } from "../../components/Button/";
import arrowLeft from "../../assets/arrow-left.png";
import arrowRight from "../../assets/arrow-right.png";
import pantone from "../../assets/pantone.png";
import texture from "../../assets/texture.png";
import size from "../../assets/size.png";
import ChairSvgfrom from "../../components/SVG/ChairSvg";

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
    selectedColor: "#B0E0E6"
  };

  componentWillMount() {
    this.setState({
      screenHeight: window.innerHeight + "px",
      screenWidth: window.innerWidth + "px"
    });
  }

  shouldRenderBlockColors = color => {
    if (this.state.shouldRenderBlockColors === true) {
      this.setState({
        shouldRenderBlockColors: false,
        selectedColor: color
      });
    } else {
      this.setState({
        shouldRenderBlockColors: true
      });
    }
  };

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
        action={this.shouldRenderBlockColors}
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
  render() {
    console.log(this.state.selectedColor);
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
                selectedColor={this.state.selectedColor}
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
            <Button
              height="50px"
              width="70px"
              text="quitter"
              backgroundColor="black"
              color="white"
              action={this.props.shouldRenderModal}
            />
            <Button
              height="50px"
              width="300px"
              text="Appliquer la personalisation"
              backgroundColor="black"
              color="white"
            />
            <Button
              height="50px"
              width="70px"
              text="reset"
              backgroundColor="black"
              color="white"
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
