import React from "react";



class HorlogeSvg extends React.Component {

  state = {
    color:"#B0E0E6",
  }
 
  handleChangeColor = () => {
    this.setState({ color: "#FFFF00" })
  };

  render() {
    return (

   < svg  viewBox="0 0 800 800" width={this.props.width} height={this.props.height} onClick={this.handleChangeColor}>
    <defs>
      <linearGradient
        id="horloge_svg__a"
        x1={465.32}
        x2={206.82}
        y1={364.72}
        y2={623.22}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} />
        <stop stopOpacity={0} offset={1} />
      </linearGradient>
    </defs>
    <circle
      cx={400}
      cy={400}
      r={400}
      color="#000"
      fill={this.state.color}
      fillRule="evenodd"
      style={{
        isolation: "auto",
        mixBlendMode: "normal"
      }}
    />
    <path
      d="M399.79 188.77c-59.134 0-112.55 24.35-150.85 63.551L10.86 490.401a400 400 0 0 0 298.57 298.78l238.17-238.17c39.265-38.359 63.641-91.857 63.641-151.02 0-116.6-94.63-211.23-211.44-211.23z"
      fill="url(#horloge_svg__a)"
      opacity={0.42}
    />
    <path
      d="M399.79 188.77c-116.6 0-211.02 94.629-211.02 211.23 0 116.6 94.418 211.23 211.02 211.23 116.81 0 211.44-94.631 211.44-211.23 0-116.6-94.631-211.23-211.44-211.23zm.21 42.244c93.364 0 168.98 75.62 168.98 168.98 0 93.363-75.62 168.98-168.98 168.98-93.362 0-168.98-75.62-168.98-168.98 0-93.363 75.62-168.98 168.98-168.98zm-21.12 63.37v126.74l110.89 66.537 15.843-25.981-95.053-56.399v-110.89h-31.683z"
      fill="#fff"
    />
  </svg>
    );
  }
}


export default HorlogeSvg;

