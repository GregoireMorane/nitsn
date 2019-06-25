import React from "react";

class testExport extends React.Component {

  state = {
    color: "#B0E0E6"
  }
  handleClick = () => {
    this.setState({ color: "#000060" })
  }

  render() {
    return (
      < svg width={this.props.width} height={this.props.height} onClick={this.handleClick}>
        <path
          fill={this.state.color}
          stroke={this.state.color}
          strokeMiterlimit={10}
          d="M301.363 49.937l-8.422 44.272M269.293 31.469l32.07 18.468M262.12 86.349l7.173-54.88M313.59 56.977l-8.738 45.928M506.565 210.383l-7.67 21.939M504.287 208.184l2.278 2.199M499.936 164.287l-15.516 44.37M484.42 208.657l1.57 10.062M489.001 238.019l5.465 35.015M494.466 273.034l22.043 16.094M516.509 289.128l-1.591 12.866M500.298 310.413l16.306 104.488M516.604 414.901l20.043 11.543M536.647 426.444l-29.296-257.887M507.351 168.557l-7.415-4.27M536.647 426.444l15.234-8.773M523.077 164.118l28.804 253.553M265.988 386.574l-12.13-8.855M253.858 377.719l7.433-21.251M287.287 282.12l41.266-118.004M328.553 164.116l-11.398-10.998M317.155 153.118L274.6 274.814M256.587 326.323l-14.872 42.529M241.715 368.852l-168.737-123.2M70.634 257.97L268.46 402.407M545.228 39.342l-41.265 118.004M484.914 211.821l-3.291 9.413M472.412 247.571l-1.877 5.371M533.83 28.342l11.398 11M470.535 252.942l-167.108 96.232M263.72 372.039l-9.862 5.68M516.509 289.128L310.106 407.987M471.264 250.857l22.281 16.268M533.83 28.342L317.155 153.118M545.228 39.342L328.553 164.116M514.918 301.994L311.381 419.203M503.963 157.346l-2.004 1.154M501.959 158.5l-2.023 5.787M501.959 158.5l9.4 5.413M511.359 163.913l20.045-11.542M285.33 10.666l112.143 64.579M510.011 140.052l21.393 12.319M265.285 22.208l20.045-11.542M265.285 22.208l112.143 64.58M511.359 170.866l-11.423-6.579M511.359 163.913v6.953M511.359 170.866l20.045-11.543M531.404 152.371v6.952M265.285 29.161v-6.953M371.391 90.264L265.285 29.161M289.293 280.967l2.004-1.155M54.624 143.521l221.318 127.451M54.624 143.521l-20.045 11.543M34.579 155.064l246.074 141.705M300.697 285.226l-20.044 11.543M291.297 279.812l9.4 5.414M300.697 285.226v6.953M280.653 296.769v6.952M300.697 292.179l-20.044 11.542M34.579 162.016v-6.952M280.653 303.721L34.579 162.016M44.14 246.082c0-.768-.538-1.699-1.202-2.082-.665-.382-1.203-.07-1.203.698s.538 1.7 1.202 2.083c.664.382 1.202.07 1.203-.699M52.086 251.884c0-.768-.538-1.7-1.202-2.082-.664-.382-1.203-.069-1.203.698s.538 1.7 1.202 2.082c.665.383 1.203.07 1.203-.698M76.987 243.343l-4.009 2.309M72.978 245.652l-2.344 12.318M73.77 260.258L49.378 388.47M86.745 192.056l-9.758 51.287M14.102 385.7l28.622-218.993M49.378 388.47l-15.233 8.771M34.145 397.241L14.102 385.7M74.519 185.016L34.145 397.241M279.101 417.634c0-.769-.538-1.7-1.202-2.083-.664-.382-1.203-.069-1.203.698 0 .769.538 1.7 1.202 2.083.664.382 1.203.069 1.203-.698M287.048 423.437c0-.768-.538-1.7-1.202-2.082s-1.203-.069-1.203.698.537 1.7 1.202 2.082c.664.382 1.202.069 1.203-.698M325.986 547.758l-28.805-253.554M290.708 544.987l-40.373-258.724M281.947 302.976l28.805 253.552M325.986 547.758l-15.234 8.77M310.752 556.528l-20.044-11.541M525.212 33.307l-20.524-19.804M297.635 132.737L504.688 13.503M318.156 152.541l-20.521-19.804M235.044 311.724l9.975-28.524M253.763 258.198l43.872-125.461M254.969 330.949l-19.925-19.225M324.512 117.26l-51.179-37.367M250.44 343.9l-19.173 11.041M234.978 324.919l8.606-4.955M231.267 354.941l3.711-30.022M231.267 354.941L77.161 242.423M82.629 213.685l152.349 111.234M273.333 79.893L108.731 174.68M75.039 261.185l-1.623.936M506.565 210.383l-205.463 118.32M498.895 232.322L302.969 345.147M504.287 208.184l-203.56 117.221"
        />
      </svg>
    );

  }
}
export default testExport;
