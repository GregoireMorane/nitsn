import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import {
  setAssiseColor,
  setDossierColor,
  setInitialAssiseColor,
  setInitialDossierColor,
} from '../../data/modules/Chair/actions';

import {
  setStripeColor,
  SetInitialStripeColor,
} from '../../data/modules/Horloge/actions';

import { Wrapper } from '../../components/Wrapper/';
import { Typo } from '../../components/Typo/';
import { Button } from '../../components/Button/';
import { ButtonIcon } from '../../components/ButtonIcon';

import FauteuilSvg from '../../components/SVG/FauteuilSvg';
import HorlogeSvg from '../../components/SVG/HorlogeSvg';

import arrowLeft from '../../assets/icons/arrow-left.png';
import arrowRight from '../../assets/icons/arrow-right.png';
import pantone from '../../assets/icons/pantone.png';
import texture from '../../assets/icons/texture.png';
import size from '../../assets/icons/size.png';
import iconLeave from '../../assets/icons/leave.png';
import icon3d from '../../assets/icons/3d.png';
import iconLike from '../../assets/icons/like.png';
import iconReset from '../../assets/icons/resetsettings.png';

class Modal extends React.Component {
  state = {
    colors: [
      {
        color: '#1E90FF',
      },
      {
        color: '#FF0000',
      },
      {
        color: '#2E8B57',
      },
      {
        color: '#FFFF00',
      },
      {
        color: '#FF1493',
      },
    ],
    screenWidth: '',
    screenHeight: '',
    shouldRenderBlockColors: false,
    shouldRenderBlockChairElements: false,
    part: '',
    shouldRender3DView: false,
    redirect: false,
    src3DMAX:
      'https://myhub.autodesk360.com/ue288ba40/shares/public/SHabee1QT1a327cf2b7afe96de93b1079cec?mode=embed',
  };

  componentWillMount() {
    this.setState({
      screenHeight: window.innerHeight + 'px',
      screenWidth: window.innerWidth + 'px',
    });
  }

  shouldRenderBlockColors = color => {
    if (this.props.match.params.name === 'chair') {
      if (this.state.shouldRenderBlockColors === true) {
        if (this.state.part === 'dossier') {
          this.props.dispatch(setDossierColor(color));
        } else if (this.state.part === 'assise') {
          this.props.dispatch(setAssiseColor(color));
        }
      } else {
        this.setState({
          shouldRenderBlockColors: true,
        });
      }
    }
    if (this.props.match.params.name === 'horloge') {
      if (this.state.shouldRenderBlockColors === true) {
        if (this.state.part === 'bande') {
          this.props.dispatch(setStripeColor(color));
        } else {
          this.setState({
            shouldRenderBlockColors: true,
          });
        }
      }
    }
  };

  shouldRenderBlockChairElements = () => {
    this.setState({
      shouldRenderBlockChairElements: !this.state
        .shouldRenderBlockChairElements,
    });
  };

  shouldRender3DView = () => {
    this.setState({
      shouldRender3DView: !this.state.shouldRender3DView,
    });
  };

  shouldSetPart = part => {
    this.setState({ part: part, shouldRenderBlockColors: true });
  };

  shouRenderBlockColors = () => {
    this.setState({
      shouldRenderBlockColors: !this.state.shouldRenderBlockColors,
    });
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
            <Button text="Validate" action={this.shouRenderBlockColors} />
          </Wrapper>
        </Wrapper>
      );
    } else if (this.state.shouldRenderBlockChairElements === true) {
      if (this.props.match.params.name === 'chair') {
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
              <Wrapper action={() => this.shouldSetPart('dossier')}>
                <Typo text="Dossier" fontWeight="bold" />
              </Wrapper>
              <Wrapper action={() => this.shouldSetPart('assise')}>
                <Typo text="Assise" fontWeight="bold" />
              </Wrapper>
            </Wrapper>
          </Wrapper>
        );
      }
      if (this.props.match.params.name === 'horloge') {
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
              <Wrapper action={() => this.shouldSetPart('bande')}>
                <Typo text="Bande" fontWeight="bold" />
              </Wrapper>
            </Wrapper>
          </Wrapper>
        );
      }
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

  shouldRedirectHome = () => {
    if (this.props.match.params.name === 'chair') {
      this.props.dispatch(setInitialAssiseColor(this.props.chair.assiseColor));
      this.props.dispatch(
        setInitialDossierColor(this.props.chair.dossierColor),
      );
      this.setState({ redirect: true });
    }
    if (this.props.match.params.name === 'horloge') {
      this.props.dispatch(
        SetInitialStripeColor(this.props.horloge.stripeColor),
      );
      this.setState({ redirect: true });
    }
  };

  resetColors = () => {
    if (this.props.match.params.name === 'chair') {
      this.props.dispatch(setAssiseColor(this.props.chair.initialAssiseColor));
      this.props.dispatch(
        setDossierColor(this.props.chair.initialDossierColor),
      );
    }
    if (this.props.match.params.name === 'horloge') {
      this.props.dispatch(
        setStripeColor(this.props.horloge.initialStripeColor),
      );
    }
  };

  cancelModif = () => {
    if (this.props.match.params.name === 'chair') {
      this.props.dispatch(setAssiseColor(this.props.chair.initialAssiseColor));
      this.props.dispatch(
        setDossierColor(this.props.chair.initialDossierColor),
      );
      this.setState({ redirect: true });
    }
    if (this.props.match.params.name === 'horloge') {
      this.props.dispatch(
        setStripeColor(this.props.horloge.initialStripeColor),
      );
      this.setState({ redirect: true });
    }
  };

  renderImage = () => {
    if (this.props.match.params.name === 'chair') {
      console.log('in');
      return (
        <FauteuilSvg
          width="416"
          height="370"
          dossierSelectedColor={this.props.chair.dossierColor}
          assiseSelectedColor={this.props.chair.assiseColor}
        />
      );
    }
    if (this.props.match.params.name === 'horloge') {
      return (
        <HorlogeSvg stripeSelectedColor={this.props.horloge.stripeColor} />
      );
    }
    return null;
  };

  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/" />;
    } else {
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
                {this.renderImage()}
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
                action={this.cancelModif}
              />
              <ButtonIcon
                height="40px"
                width="40px"
                margin="20px"
                icon={iconLike}
                action={this.shouldRedirectHome}
              />

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
}

const mapStateToProps = state => ({
  chair: state.chair,
  horloge: state.horloge,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
