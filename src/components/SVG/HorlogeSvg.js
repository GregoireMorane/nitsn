import React from 'react';

class HorlogeSvg extends React.Component {
  render() {
    return (
      <svg viewBox="375 150 400 400" width={90} height={90}>
        <path fill="none" d="M412.474 559.196h348.935V143.309H412.474v415.887" />

        <path
          // TODO:
          // backgroundColor
          fill="#FFF6CC"
          stroke=""
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          d="M735.736 368.937c-.002-108.599-70.307-203.914-157.029-212.892-86.724-8.979-157.025 71.78-157.023 180.379.001 108.599 70.306 203.914 157.029 212.892 86.724 8.978 157.025-71.781 157.023-180.379"
        />

        <path
          // TODO: colorToChange
          fill={this.props.stripeSelectedColor}
          stroke=""
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          d="M578.707 163.936c25.467 2.637 50.518 13.311 72.816 31.026l.004.001v330.51c-22.296 13.099-47.347 18.585-72.813 15.948h-.004l1.733-.301V358.133l.97-.168c2.234-.388 3.739-2.859 3.49-5.734-.249-2.875-2.17-5.232-4.46-5.469V164.129"
        />
        <path
          fill="#FCFAFB"
          stroke=""
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          d="M584.707 270.309l.001-.239.002-.243.004-.243.007-.243.007-.243.009-.245.011-.247.013-.246.014-.247.016-.248.018-.249.018-.248.022-.25.023-.25.024-.251.025-.252.027-.252.029-.254.03-.252.033-.255.034-.254.034-.255.038-.256.038-.257.039-.256.042-.258.041-.258.045-.26.045-.257.047-.261.048-.259.051-.261.052-.261.052-.261.054-.263.056-.263.056-.263.059-.262.06-.265.061-.265.126-.529.131-.531.137-.533.142-.534.148-.535.151-.537.156-.538.163-.54.167-.54.171-.54.176-.543.18-.542.186-.544.189-.543.192-.545.198-.546.202-.545.205-.548.211-.545.214-.547.218-.547.22-.548.225-.547.228-.547.232-.545.236-.548.239-.545.241-.547.245-.545.249-.546.252-.544.253-.543.258-.544.259-.542.263-.541.264-.54.269-.54.27-.539.273-.536.274-.537.277-.534.279-.533.283-.533.282-.529.602-1.114.604-1.114.611-1.114.615-1.113.31-.558.311-.556.314-.556.312-.557.317-.554.317-.556.319-.554.321-.557.322-.554.323-.554.326-.553.327-.555.33-.552.331-.551.332-.552.334-.551.337-.551.338-.549.34-.551.343-.547.346-.549.344-.547.35-.545.35-.546.352-.545.355-.544.358-.544.358-.541.362-.542.363-.54.366-.54.368-.538.371-.537.374-.536.375-.535.378-.534.382-.533.382-.531.387-.531.387-.529.392-.528.393-.525.395-.526.4-.524.401-.523.405-.521.407-.52.411-.519.412-.516.416-.515.419-.513.422-.513.424-.509.428-.51.431-.506.433-.505 1.734-.301.307.197-.669 1.056-.666 1.055-.661 1.057-.657 1.058-.651 1.056-.647 1.059-.642 1.058-.639 1.061-.634 1.06-.628 1.06-.625 1.06-.621 1.062-.615 1.062-.61 1.062-.607 1.062-.602 1.064-.598 1.064-.593 1.063-.588 1.064-.586 1.066-.579 1.065-.576 1.066-.57 1.066-.568 1.067-.561 1.066-.558 1.067-.554 1.067-.549 1.07-.544 1.067-.54 1.069-.536 1.069-.532 1.07-.527 1.069-.523 1.069-.519 1.071-.513 1.071-.511 1.069-.506 1.071-.5 1.071-.497 1.073-.494 1.071-.487 1.073-.484 1.071-.481 1.073-.475 1.072-.472 1.073-.466 1.073-.463 1.073-.459 1.072-.455 1.074-.45 1.074-.446 1.073-.442 1.074-.437 1.073-.434 1.075-.428 1.075-.425 1.072-.421 1.075-.418 1.074-.412 1.075-.408 1.075-.406 1.074-.399 1.075-.396 1.073-1.733.3.396-1.073.401-1.074.403-1.075.409-1.074.412-1.075.418-1.075.421-1.074.425-1.073.428-1.074.434-1.075.437-1.073.443-1.075.445-1.072.451-1.075.454-1.073.459-1.073.463-1.072.466-1.073.471-1.073.477-1.073.479-1.073.484-1.071.488-1.072.493-1.071.497-1.073.502-1.071.506-1.071.51-1.069.515-1.072.518-1.07.522-1.07.527-1.069.531-1.069.536-1.069.54-1.07.546-1.067.549-1.069.553-1.067.557-1.068.562-1.066.567-1.067.571-1.065.576-1.066.58-1.066.584-1.065.589-1.064.593-1.064.597-1.064.603-1.063.606-1.062.611-1.063.615-1.062.621-1.062.625-1.06.628-1.06.634-1.06.638-1.06.643-1.058.646-1.059.652-1.057.657-1.058.661-1.057.666-1.055.669-1.056 1.733-.3M618.667 201.965l-.308-.196M620.4 201.665l-.307-.197M632.66 216.351l-.025.086-.025.086-.031.089-.032.088-.034.09-.038.09-.039.092-.042.093-.045.094-.047.093-.05.096-.051.095-.054.096-.055.097-.058.097-.057.099-.062.099-.062.099-.066.101-.064.099-.067.101-.068.101-.143.203-.143.203-.15.205-.153.206-.156.205-.157.203-.161.205-.32.406-.16.201-.16.2-.156.196-.158.196-.152.191-.149.191-.147.185-.071.092-.071.092-.068.09-.067.088-.067.088-.064.087-.064.086-.06.084-.06.083-.057.083-.314.452-.311.452-.31.453-.306.454-.305.454-.305.455-.301.455-.301.456-.297.457-.298.457-.295.457-.291.457-.292.458-.292.459-.288.459-.286.459-.56.902-.555.903-.55.904-.549.903-1.091 1.809-1.091 1.809-.545.904-.548.904-.55.903-.554.904-.559.902-.563.901-.282.451-.287.449-.286.45-.288.449-.538.835-.542.833-.544.834-.545.831-.546.832-.548.83-1.102 1.659-1.105 1.656-1.109 1.655-2.224 3.306-2.225 3.305-1.109 1.654-1.105 1.654-1.102 1.656-.549.83-.547.83-.546.829-.541.832-.542.832-.54.833 1.733-.3.54-.834.54-.831.544-.832.545-.83.547-.829.549-.831 1.1-1.655 1.107-1.655 1.109-1.654 2.225-3.305 2.225-3.306 1.109-1.655 1.104-1.655 1.102-1.66.548-.83.547-.832.545-.831.544-.834.54-.833.54-.835.288-.448.286-.45.286-.45.282-.45.564-.902.558-.902.554-.903.55-.904.549-.904.545-.903 1.09-1.809 1.091-1.809.549-.904.551-.903.554-.904.56-.902.286-.459.288-.459.29-.459.292-.457.293-.457.295-.457.298-.457.299-.458.299-.455.301-.456.305-.455.304-.454.307-.453.31-.454.312-.452.313-.451.058-.083.059-.083.061-.085.063-.086.065-.087.065-.088.068-.088.069-.09.07-.092.071-.091.147-.186.149-.191.153-.19.157-.197.156-.196.16-.2.16-.201.321-.405.158-.206.159-.203.154-.205.154-.205.149-.205.146-.204.14-.203.069-.101.068-.101.065-.099.065-.101.062-.099.06-.099.06-.098.057-.098.056-.097.054-.095.05-.096.049-.095.046-.096.046-.091.043-.094.039-.092.038-.09.034-.09.032-.088.03-.088.026-.087.024-.086-1.732.301-.181.194-.184.193-.369.388-.374.391-.378.394-.384.395-.385.395-.387.4-.391.399-.392.404-.392.403-.79.812-.787.817-.393.412-.392.412-.389.413-.385.415-.384.414-.38.418-.376.417-.37.418-.366.42-.18.21-.179.211-.179.211-.176.21-.175.211-.174.21-.171.211-.169.212-.168.211-.165.21-.164.213-.162.211-.161.212-.158.212-.155.213-.152.21-.152.213-.147.212-.58.84-.575.845-.57.846-.567.847-.566.852-.562.852-1.122 1.706-1.121 1.708-.562.853-.561.854-.568.853-.566.849-.573.848-.576.846-.136.203-.132.204-.13.205-.124.207-.122.205-.117.207-.116.209-.113.209-.11.209-.108.21-.104.211-.105.21-.1.211-.101.211-.198.425-.387.847-.195.425-.194.423-.2.421-.102.211-.103.21-.106.209-.107.211-.109.207-.113.209-.125.225-.127.224-.132.224-.133.223-.136.221-.136.222-.14.219-.141.22-.142.218-.144.218-.292.435-.297.432-.296.432-.6.863-.299.433-.295.432-.292.436-.143.218-.145.219-.14.22-.14.219-.137.222-.136.221-.242.404-.241.408-.243.416-.243.421-.244.426-.241.431-.241.436-.241.439-.237.442-.239.447-.235.448-.234.452-.23.452-.229.455-.225.453-.222.456-.217.457-.216.454-.209.455-.207.452-.201.452-.197.45-.095.223-.095.223-.094.222-.092.221-.092.22-.088.219-.088.22-.086.217-.085.217-.083.216-.081.214-.079.212-.079.213-.076.208-.074.209-.073.209-.07.205-.069.205-.067.202-.065.202M597.11 270.765l.105.003"
        />
        <path
          fill="#FFF"
          stroke=""
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          d="M586.908 446.893l.652 1.082.655 1.076.655 1.071.657 1.066.661 1.062.66 1.057.664 1.05.665 1.048.666 1.04.667 1.037.67 1.032.672 1.027.672 1.021.674 1.017.677 1.012.677 1.006.678 1.003.68.997.681.992.683.986.685.981.684.977.687.972.688.967.689.961.691.958.692.952.693.947.693.941.695.936.696.933.696.926.699.922.701.916.699.912.701.907.701.901.705.896.704.893.703.886.706.882.707.877.708.871.707.865.707.862.71.858.711.849.711.848.711.841.711.835.713.831.712.826.713.821.714.816.715.811.715.807.715.799.716.796.714.792.717.785.716.781.717.773.718.771.716.765-1.731.3-.719-.764-.716-.771-.718-.774-.716-.781-.717-.785-.715-.792-.716-.796-.715-.798-.714-.807-.715-.812-.714-.815-.713-.821-.713-.826-.713-.832-.711-.835-.711-.84-.711-.848-.709-.85-.71-.857-.708-.862-.708-.866-.708-.871-.705-.877-.706-.881-.705-.886-.704-.893-.702-.896-.702-.903-.701-.905-.701-.912-.699-.916-.698-.922-.698-.927-.695-.932-.695-.937-.694-.941-.694-.946-.691-.953-.691-.958-.69-.961-.687-.966-.686-.972-.685-.978-.685-.981-.684-.986-.68-.992-.681-.997-.678-1.003-.676-1.005-.678-1.012-.673-1.018-.673-1.02-.671-1.028-.67-1.031-.668-1.037-.666-1.04-.664-1.048-.664-1.052-.661-1.056-.659-1.062-.658-1.065-.656-1.071-.655-1.077-.651-1.082 1.733-.3"
        />
        <path
          fill="#FFF"
          stroke=""
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          d="M585.175 447.193l-.006.011-.003.011v.023l.003.015.004.015.013.03.016.032.021.032.047.071.045.07.021.034.017.032.012.032.004.013.004.013v.025l-.004.011-.005.011.291.65.294.648.295.644.295.641.299.638.3.634.303.632.302.63.306.627.306.623.308.619.31.617.311.616.313.612.315.608.315.607.317.603.319.601.32.597.322.596.322.593.324.59.326.589.326.585.328.583.329.58.33.577.331.576.331.572.333.572.334.568.337.567.335.564.338.561.339.558.339.558.339.554.34.553.342.551.344.549.343.547.345.543.344.544.346.54.346.538.346.539.348.534.349.533.347.531.35.53.35.527.35.527.351.524.351.522.703 1.04.706 1.033.705 1.029.708 1.021.707 1.016.339.48.338.479.341.477.342.474.344.473.343.47.348.468.346.464.348.463.35.459.35.457.353.452.353.451.353.447.355.443.356.441.356.438.359.431.358.429.36.425.36.421.36.417.362.413.361.408.362.403.364.4.364.394.363.389.365.385.364.378.366.375.367.369.365.363.365.358.368.351.365.348.367.34.367.335.365.328.368.321.367.317.366.31.367.303.365.295.368.29.365.282.365.275.184.135.181.134.182.131.184.13.182.127.182.126.182.124.181.123.184.121.179.118.183.115.182.115.181.113.182.111.18.108.181.106.181.104.18.103.181.1.181.1.18.097.179.093.179.092.18.09.179.089.179.086.178.083.181.083.177.079.179.075.178.076.176.072.178.072.179.066"
        />
        <path
          fill="#FCFAFB"
          stroke=""
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          d="M626.072 213.201l.064-.11.066-.112.067-.113.07-.116.072-.115.073-.115.077-.117.079-.119.077-.118.081-.121.083-.121.082-.122.172-.245.174-.248.178-.25.18-.254.184-.254.185-.258.373-.514.368-.517.183-.259.18-.257.176-.258.172-.256.168-.255.081-.126.081-.126.078-.126.077-.126.076-.124.073-.124.072-.124.071-.123.066-.123.066-.12.064-.121.06-.118.06-.119.056-.117.054-.117.05-.116.049-.114.045-.114.042-.111.039-.112.036-.11.034-.11M621.293 222.067l.162-.277.158-.277.159-.277.155-.278.155-.276.151-.278.302-.554.295-.555.294-.554.29-.554.289-.555.576-1.109.29-.554.292-.552.295-.555.301-.554.151-.276.153-.277.155-.277.156-.277M610.979 238.518l.357-.494.354-.497.351-.5.348-.502.347-.506.342-.505.34-.51.339-.511.337-.513.333-.515.331-.517.329-.518.326-.518.325-.52.323-.521.32-.52.319-.522.317-.522.315-.522.313-.522.311-.52.312-.522.307-.52.308-.52.306-.519.304-.518.303-.517.303-.515.299-.514.299-.512.299-.511.297-.508"
        />
        <path
          fill="#FCFAFB"
          stroke=""
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          d="M599.371 255.321l.295-.522.296-.521.291-.52.29-.52.58-1.04.575-1.041.576-1.038.579-1.037.581-1.035.294-.519.296-.516.297-.517.301-.515.302-.516.306-.515.31-.513.313-.515.317-.513.322-.513.325-.511.332-.511.334-.511.341-.51.173-.255.175-.254.174-.256.178-.254.178-.253.181-.254.181-.254.184-.254.356-.493.353-.497.351-.5.349-.502.346-.504.342-.508.342-.509.336-.512.337-.513.333-.514.331-.517.33-.519.326-.518.325-.52.322-.52.32-.521.32-.521.316-.523.316-.522.312-.522.314-.52.309-.522.308-.52.307-.52.307-.519.304-.518.302-.516.303-.515.3-.515.299-.511.299-.512.297-.507.162-.277.159-.278.158-.276.154-.278.156-.277.152-.277.301-.555.297-.554.292-.554.292-.555.288-.554.575-1.109.29-.554.292-.553.295-.554.301-.555.151-.275.152-.277.156-.278.156-.277.063-.109.067-.112.068-.113.07-.116.073-.115.073-.115.075-.117.078-.119.079-.119.079-.12.083-.121.083-.122.171-.245.174-.249.179-.25.182-.254.181-.253.186-.258.373-.514.368-.517.183-.259.179-.258.177-.257.173-.256.167-.256.081-.126.081-.126.079-.126.077-.126.074-.124.074-.124.072-.124.07-.122.069-.123.064-.12.064-.121.061-.119.059-.119.056-.116.054-.118.05-.115.049-.115.045-.113.043-.112.04-.112.036-.109.032-.11 1.733-.301-1.733.301-.203.193-.205.195-.207.201-.207.205-.211.207-.211.212-.212.216-.214.218-.215.223-.216.225-.217.228-.218.231-.218.234-.22.238-.221.239-.22.243-.221.245-.221.246-.222.249-.221.252-.224.252-.221.256-.443.514-.442.522-.441.526-.44.529-.435.535-.434.534-.427.537-.423.538-.209.268-.209.268-.205.269-.205.268-.201.266-.202.266-.198.265-.196.265-.195.262-.192.263-.191.261-.187.26-.186.257-.181.257-.18.254-.179.254-.174.25-.171.249-.169.246-.164.245-.164.241-.158.239-.155.236-.153.234-.148.23-.145.229-.342.539-.346.536-.346.534-.347.533-.349.531-.351.53-.353.527-.352.527-.711 1.05-.715 1.047-.717 1.044-.722 1.04-1.445 2.081-.724 1.042-.723 1.044-.724 1.046-.72 1.05-.718 1.055-.358.529-.356.531-.177.263-.173.264-.173.265-.169.266-.168.265-.165.268-.166.266-.162.268-.16.269-.16.268-.156.27-.157.27-.155.27-.153.27-.302.544-.297.543-.292.545-.288.548-.284.549-.281.547-.276.551-.273.549-.272.551-.268.551-.268.55-.529 1.102-.527 1.1-.528 1.098-.531 1.092-.267.545-.269.544-.273.542-.273.538-.277.539-.281.536-.147.281-.147.28-.143.281-.143.281-.138.279-.139.277-.137.279-.135.277-.133.278-.131.277-.13.275-.128.275-.128.276-.124.275-.124.274-.122.274-.121.273-.118.274-.235.545-.23.546-.225.541-.221.544-.216.542-.213.54-.209.54-.205.54-.203.54-.2.54-.198.54-.196.54-.193.54-.383 1.082-.38 1.085-.38 1.091-.379 1.094-.191.549-.193.553M601.104 255.02l.295-.522.294-.52.293-.52.29-.52.578-1.041.576-1.041.576-1.038.578-1.037.583-1.035.294-.518.295-.517.299-.517.3-.514.302-.517.307-.515.309-.513.313-.514.317-.514.323-.512.325-.512.33-.511.336-.511.341-.509.172-.256.174-.254.175-.255.177-.254.18-.254.18-.254.182-.254.181-.253"
        />

        <path
          fill="#FFF"
          stroke=""
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          d="M601.189 416.253l1.91 2.695-1.734.301-1.909-2.695M602.291 420.76l-.926-1.511M604.024 420.46l-.925-1.512M604.024 420.46l.58.965-1.732.3-.581-.965M604.604 421.425l.582 1.016-1.734.301-.58-1.017M604.035 423.801l-.583-1.059M605.769 423.5l-.583-1.059M605.769 423.5l.581 1.095-1.732.3-.583-1.094M605.775 427.15l-1.157-2.255M607.509 426.85l-1.159-2.255M606.922 429.449l-1.147-2.299M608.655 429.148l-1.146-2.298M608.047 431.725l-1.125-2.276M609.779 431.424l-1.124-2.276M609.779 431.424l1.092 2.181-1.731.301-1.093-2.181M610.871 433.605l1.054 2.027-1.734.301-1.051-2.027M612.463 440.13l-2.272-4.197M614.196 439.83l-2.271-4.198M614.743 444.234l-2.28-4.104M616.477 443.934l-2.281-4.104M617.045 448.268l-2.302-4.034M618.779 447.968l-2.302-4.034M619.382 452.253l-2.337-3.985M621.115 451.952l-2.336-3.984M620.573 454.276l-1.191-2.023M622.305 453.976l-1.19-2.024M621.76 456.33l-1.187-2.054M623.493 456.029l-1.188-2.053M622.942 458.413l-1.182-2.083M624.676 458.112l-1.183-2.083M624.121 460.521l-1.179-2.108M625.854 460.22l-1.178-2.108M626.465 464.792l-2.344-4.271M628.198 464.491l-2.344-4.271M628.792 469.128l-2.327-4.336M630.525 468.827l-2.327-4.336M631.107 473.504l-2.315-4.376M632.839 473.203l-2.314-4.376M632.839 473.203l2.302 4.393-1.734.3-2.3-4.392M635.141 477.596l6.167 11.332-1.734.301-6.167-11.333"
        />
        <path
          fill="#FFF"
          stroke=""
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          d="M614.018 448.673l2.414 4.542 2.457 4.526.525.907.538.839 1.071 1.527.53.743.514.753.5.792.487.854 1.003 1.961.986 2.009 1.004 1.999.524.986.542.964 1.171 1.951 1.191 1.875 1.2 1.812 1.199 1.751 1.321 2.005.733 1.133.76 1.142.766 1.087.384.512.378.471.374.432.369.382.363.324 2.252 2.277M631.409 487.153l-2.115-3.454M633.143 486.853l-2.116-3.455M633.143 486.853l2.26 3.639-1.733.301-2.261-3.64"
        />
        <path
          fill="#FFF"
          stroke="#000"
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          d="M635.403 490.492l1.646 2.38-1.734.301-1.645-2.38"
        />
        <path
          fill="#FFF"
          stroke="#000"
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          d="M599.335 432.543l-1.733.301 2.403 6.344.946 2.244.967 2.254.99 2.226 1.014 2.16.518 1.051.524 1.019.534.986.54.947 2.155 3.593 2.18 3.548 2.184 3.538 2.165 3.581.536.85.561.796.572.748.574.714 1.142 1.382.555.697.541.724.573.829.558.87 1.098 1.824 1.096 1.857.564.922.577.897 1.08 1.596 1.147 1.616 1.19 1.61 1.221 1.576 1.23 1.513 1.227 1.426 1.2 1.306.591.602 2.76 2.483"
        />
        <path
          fill="#FFF"
          stroke="#000"
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          d="M599.335 432.543l1.253 1.8-1.734.301-1.252-1.8"
        />
        <path
          fill="#FFF"
          stroke="#000"
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          d="M600.588 434.343l.277.319-1.733.301-.278-.319"
        />
        <path
          fill="#FFF"
          stroke="#000"
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          d="M600.865 434.662l.274.357-1.734.299-.273-.355"
        />
        <path
          fill="#FFF"
          stroke="#000"
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          d="M601.139 435.019l.271.395-1.733.301-.272-.397"
        />
        <path
          fill="#FFF"
          stroke="#000"
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          d="M601.41 435.414l.529.86-1.733.301-.529-.86"
        />
        <path
          fill="#FFF"
          stroke="#000"
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          d="M601.939 436.274l.525.942-1.734.301-.524-.942M601.724 439.43l-.994-1.913M603.457 439.129l-.993-1.913M603.457 439.129l.459.877-1.733.301-.459-.877"
        />
        <path
          fill="#FFF"
          stroke="#000"
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          d="M603.916 440.006l.423.76-1.734.3-.422-.759M603.749 442.988l-1.144-1.922M605.482 442.688l-1.143-1.922M604.906 444.886l-1.157-1.898M606.64 444.585l-1.158-1.897M606.074 446.756l-1.168-1.87M607.808 446.455l-1.168-1.87M607.254 448.598l-1.18-1.842M608.986 448.297l-1.178-1.842M609.588 452.161l-2.334-3.563M611.321 451.86l-2.335-3.563M611.936 455.694l-2.348-3.533M613.667 455.395l-2.346-3.535M614.279 459.25l-2.343-3.556M616.011 458.947l-2.344-3.552M615.445 461.052l-1.166-1.802M617.179 460.751l-1.168-1.804M616.606 462.881l-1.161-1.829M618.34 462.58l-1.161-1.829M618.743 466.314l-2.137-3.433M620.477 466.015l-2.137-3.435M620.867 469.778l-2.124-3.464M622.599 469.478l-2.122-3.463M625.082 476.74l-4.215-6.962M626.815 476.439l-4.216-6.961M629.294 483.699l-4.212-6.959M631.027 483.398l-4.212-6.959M592.35 437.248l-1.734.301.106.284.11.29.111.292.116.293.117.299.12.299.121.304.124.304.128.308.128.309.131.312.134.313.132.317.138.317.138.318.14.319.142.322.144.322.145.323.147.324.297.651.303.652.306.653.311.652.313.652.317.649.32.644.321.641.322.638.16.314.162.314.16.311.163.31.16.307.162.305.16.304.16.299.16.297.159.295.158.291.158.289.159.286.156.282.156.277.154.276.155.27.153.269.151.262.151.259.15.256.147.25.146.245.146.241.144.236.142.232.335.545.334.55.332.549.331.55.329.551.328.553.328.554.324.556.647 1.113.645 1.116.642 1.119.641 1.122 1.278 2.248 1.281 2.252.642 1.125.646 1.125.65 1.123.653 1.121.164.276.164.275.164.271.165.271.166.268.167.266.168.265.169.263.169.262.17.26.168.257.171.258.344.507.346.504.347.497.347.494.352.487.352.484.353.479.355.477.355.473.356.471.356.469.358.466.715.927.713.924.713.923.707.927.353.464.351.467.349.468.347.47.348.473.344.477"
        />
        <path
          fill="#FFF"
          stroke="#000"
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          d="M595.52 445.426l-.071-.105-.07-.107-.072-.112-.071-.112-.073-.117-.072-.117-.072-.12-.074-.122-.074-.125-.074-.128-.149-.257-.151-.265-.153-.271-.153-.276-.155-.279-.155-.282-.154-.285-.316-.571-.315-.57-.158-.283-.158-.278-.159-.276-.158-.27-.159-.265-.158-.257-.078-.128-.079-.124-.077-.123-.079-.118-.078-.119-.077-.115-.079-.112-.078-.112-.075-.105-.078-.105-.077-.103-.076-.099-.075-.095-.076-.092-.075-.088-.076-.086-.076-.081-.073-.078-.074-.074-.074-.07M597.253 445.125l-.07-.104-.071-.108-.072-.112-.072-.112-.072-.117-.072-.116-.074-.121-.071-.122-.075-.124-.075-.128-.149-.258-.15-.265-.153-.271-.153-.275-.154-.28-.156-.282-.156-.285-.313-.57-.317-.571-.159-.282-.158-.279-.157-.276-.158-.27-.158-.265-.159-.259-.077-.126-.079-.124-.079-.123-.078-.118-.077-.119-.079-.115-.078-.111-.077-.112-.078-.106-.075-.107-.078-.1-.075-.1-.077-.095-.076-.091-.076-.089-.074-.086-.075-.081-.074-.077-.074-.075-.073-.07M601.188 453.463l-.177-.265-.175-.262-.176-.26-.177-.259-.352-.511-.355-.506-.354-.499-.355-.497-.356-.493-.357-.491-.71-.981-.357-.494-.354-.493-.356-.498-.354-.504-.353-.51-.175-.255-.175-.259M602.919 453.162l-.175-.265-.175-.262-.175-.259-.177-.26-.353-.511-.354-.505-.355-.499-.356-.497-.355-.494-.356-.491-.713-.98-.354-.493-.355-.496-.355-.497-.355-.504-.352-.509-.177-.255-.174-.26M611.467 469.988l-.3-.547-.305-.546-.305-.544-.308-.542-.311-.54-.314-.539-.315-.534-.317-.533-.318-.531-.319-.529-.322-.528-.322-.525-.324-.522-.326-.522-.326-.519-.326-.516-.327-.515-.328-.513-.327-.511-.33-.507-.327-.508-.33-.504-.328-.504-.327-.503-.328-.498-.327-.497-.326-.497-.326-.493-.324-.493-.324-.49-.322-.489-.32-.486M613.2 469.688l-.3-.547-.304-.547-.306-.544-.31-.542-.309-.54-.314-.538-.315-.534-.316-.534-.319-.53-.32-.529-.32-.528-.323-.526-.324-.521-.326-.523-.325-.517-.326-.518-.328-.515-.328-.512-.327-.511-.33-.508-.327-.508-.329-.504-.328-.504-.327-.502-.329-.499-.327-.497-.326-.496-.326-.493-.325-.494-.323-.489-.322-.49-.322-.486M621.856 486.043l-.331-.488-.329-.488-.662-.966-.663-.963-.662-.961-.66-.96-.661-.961-.658-.965-.329-.486-.327-.488-.326-.49-.328-.493-.323-.494-.326-.499-.323-.502-.322-.506-.322-.512-.321-.514-.318-.519-.318-.525-.318-.532-.314-.534-.316-.542-.311-.549-.156-.277-.156-.277-.154-.281-.155-.283M623.59 485.742l-.331-.488-.331-.487-.66-.967-.664-.963-.662-.961-.66-.96-.661-.961-.658-.965-.328-.486-.327-.487-.329-.49-.325-.493-.326-.495-.324-.499-.324-.502-.323-.506-.32-.511-.32-.515-.321-.518-.316-.526-.317-.53-.315-.536-.315-.542-.312-.548-.156-.278-.155-.277-.155-.28-.155-.283"
        />
        <path
          fill="#FFF"
          stroke="#000"
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          d="M623.59 485.742l.711 1.059.71 1.065.707 1.07.706 1.074.707 1.076.704 1.08 1.411 2.166 1.409 2.163.705 1.08.706 1.078.707 1.074.708 1.071.709 1.063.711 1.061-1.731.3-.711-1.06-.711-1.064-.708-1.071-.707-1.073-.706-1.078-.705-1.08-1.409-2.163-1.41-2.166-.706-1.08-.706-1.076-.707-1.075-.707-1.069-.71-1.064-.711-1.06"
        />
        <path
          fill="#FFF"
          stroke="#000"
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          d="M621.562 490.219l.089.126.094.128.188.256.194.26.199.261.204.267.207.266.212.27.216.27.22.272.223.275.225.274.229.275.232.277.232.278.236.277.236.275.479.553.48.551.484.543.242.27.241.268.239.267.239.262.239.262.237.259.233.254.235.252.23.248.229.245.224.239.222.237.22.231.214.227.212.223.105.11.102.108.101.106.103.105.099.104.099.103.097.1.095.099.096.098.092.097.092.093.091.094.088.092.089.089.086.089.085.086.082.085.081.083.081.081.077.079.078.078.074.075.074.074.07.072.07.071.067.068.066.064.064.063.06.063.06.06.058.057.055.054.054.054.053.051.048.049.047.044.045.045.043.041.039.038.038.039.037.034.032.03.031.03.028.028.026.023.023.022.022.019.017.017.015.012.013.011.01.009.007.006.006.003h.002M634.901 502.922h0"
        />
        <path
          fill="#FCFAFB"
          stroke="#000"
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          d="M602.532 276.3l.005-.119.008-.121.013-.122.013-.126.021-.126.021-.13.026-.131.028-.132.032-.135.034-.135.038-.138.041-.139.044-.14.046-.141.049-.144.051-.144.054-.145.053-.146.06-.148.06-.147.061-.15.064-.149.065-.151.067-.152.071-.153.069-.152.146-.307.15-.308.154-.307.158-.31.161-.307.164-.309.164-.305.166-.306.163-.301.166-.299.162-.297.16-.289.156-.289.077-.14.079-.14.073-.139.074-.137.073-.136.071-.134.07-.133.068-.129.067-.13.063-.126.063-.126.061-.123.241-.489.245-.49.247-.488.249-.489.252-.49.254-.487.26-.489.265-.487.266-.486.272-.486.275-.486.28-.484.286-.483.289-.48.298-.481.148-.239.151-.24.147-.225.145-.221.15-.222.153-.219.153-.218.155-.216.158-.216.158-.214.16-.213.162-.212.327-.423.331-.419.333-.418.671-.833.335-.418.333-.42.331-.421.326-.422.162-.215.16-.214.16-.216.156-.216.075-.104.072-.103.14-.209.135-.209.129-.21.126-.211.123-.212.117-.212.115-.213.11-.214.109-.215.107-.213.104-.215.205-.432.203-.43.201-.434.205-.432.102-.216.107-.216.108-.216.112-.214.113-.216.117-.214.12-.216.124-.214.128-.213.136-.212.138-.213.144-.212.718-1.028.719-1.026.719-1.022.724-1.019.726-1.015.726-1.012.732-1.008.736-1.004.737-1.003.744-.997.748-.994.377-.497.378-.494.378-.494.38-.493.383-.491.384-.491.383-.49.387-.49.389-.488.39-.488.391-.485.395-.486.395-.485.398-.484.4-.482.401-.481.404-.48.406-.479.407-.479.41-.479.414-.475.414-.475.417-.476.42-.473.423-.471.425-.472.427-.472.429-.468.435-.468.436-.468.437-.466.441-.464.444-.465.446-.462.45-.463.452-.461.458-.459.459-.459.462-.457.464-.457.47-.455.472-.454 1.733-.301-10.546 15.288.156-.218.16-.22.163-.219.164-.222.167-.223.17-.225.171-.225.172-.227.176-.227.177-.228.178-.231.18-.23.182-.232.184-.232.369-.468.374-.472.377-.473.379-.477.379-.479.762-.965.38-.482.376-.486.374-.485.371-.485.365-.486.181-.243.178-.242.179-.243.173-.241.175-.243.171-.241.17-.241.167-.241.166-.242.161-.239.16-.24.159-.239.155-.238.151-.237.15-.238.145-.237.143-.234.138-.236.137-.234.131-.234.13-.232.124-.231.121-.23.117-.23.113-.229.11-.227-1.734.301-.109.226-.111.229-.118.23-.123.231-.124.23-.128.233-.132.234-.135.234-.141.235-.142.236-.146.236-.149.237-.152.238-.154.238-.157.239-.16.24-.163.239-.164.241-.168.241-.171.241-.171.242-.173.243-.176.241-.177.243-.179.241-.181.243-.365.486-.37.486-.373.485-.378.485-.378.483-.762.965-.382.478-.378.477-.378.474-.372.472-.371.467-.181.233-.182.232-.181.23-.179.231-.177.228-.174.227-.175.227-.171.225-.17.225-.167.223-.164.221-.162.22-.16.22-.156.218-.342.475-.339.475-.338.477-.337.475-.335.475-.333.476-.333.475-.329.475-.657.952-.649.951-.647.953-.641.952-.635.956-.63.958-.626.959-.621.962-.617.963-.615.968-.61.97-.606.974-.308.493-.308.494-.311.491-.312.493-.315.491-.315.492-.318.491-.32.492-.322.491-.323.49-.326.491-.326.49-.327.491-.329.49-.332.489-.333.49-.669.977-.675.978-.679.975-.684.976-.688.976-.692.971-.696.974-.7.971-.7.971-.705.969-.706.968-.709.969-1.421 1.931-1.424 1.928-1.423 1.924-1.423 1.921-.711.957-.707.958-.706.956-.703.954 1.734-.301.703-.954.706-.956.707-.957.71-.958 1.422-1.921 1.425-1.924 1.424-1.928 1.42-1.931.709-.969.706-.968.703-.968.703-.972.698-.97.697-.974.69-.972.69-.976.684-.975.679-.976.675-.978.669-.977.333-.489.33-.49.331-.49.327-.491.326-.49.327-.491.322-.49.321-.491.321-.491.317-.492.316-.491.316-.492.311-.493.312-.491.307-.493.306-.493.606-.975.611-.97.614-.968.619-.963.621-.963.626-.957.63-.958.636-.956.64-.952.647-.954.649-.95.658-.953.329-.475.333-.475.333-.475.335-.475.337-.476.336-.477.34-.475.342-.475M645.528 214.837l-.264-.209M647.262 214.536l-.265-.209"
        />
        <path
          fill="none"
          stroke="#000"
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          d="M580.447 541.122c10.655 1.103 21.28.788 31.697-.939M629.098 545.328c84.675-14.692 138.131-114.134 119.396-222.108S645.927 139.626 561.251 154.318"
        />
        <path
          fill="#FFF"
          stroke="#000"
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          d="M633.168 503.222l1.733-.3"
        />
        <path
          fill="none"
          stroke="#000"
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          d="M544.793 157.176l16.463-2.857M612.626 548.186l16.463-2.857M577.997 354.046c0-3.103-2.008-5.826-4.486-6.083-2.478-.257-4.485 2.051-4.485 5.153s2.008 5.826 4.486 6.083c2.477.257 4.485-2.05 4.485-5.153M581.411 357.966l-6.932 1.202M577.741 347.095l-5.199.902"
        />
        <defs>
          <path id="horloge_svg__a" d="M0 842h1190.551V.111H0V842" />
        </defs>
        <clipPath id="horloge_svg__b">
          <use xlinkHref="#horloge_svg__a" overflow="visible" />
        </clipPath>
        <path
          clipPath="url(#horloge_svg__b)"
          fill="none"
          stroke=""
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          d="M0 842h42.52M1148.029 842h42.52M56.693 813.653h1105.509M1190.549 842v-42.52M1190.549 42.633V.113h-42.52M42.52.113H0M1162.202 28.459H56.693M0 .113v42.52M0 799.48V842M56.693 28.459v785.194M1162.202 28.459v785.194M609.447 827.827V799.48M609.447 14.286v28.347M751.18 14.286v14.173M892.911 14.286v14.173M1034.644 14.286v14.173M467.716 14.286v14.173M325.983 14.286v14.173M184.251 14.286v14.173M42.52 421.056h28.346M42.52 556.646h14.173M42.52 692.236h14.173M42.52 285.467h14.173M42.52 149.876h14.173M1176.376 421.056h-28.347M751.18 827.827v-14.174M892.911 827.827v-14.174M1034.644 827.827v-14.174M467.716 827.827v-14.174M325.983 827.827v-14.174M184.251 827.827v-14.174M1176.376 556.646h-14.174M1176.376 692.236h-14.174M1176.376 285.467h-14.174M1176.376 149.876h-14.174"
        />
        <g>
          <defs>
            <path id="horloge_svg__c" d="M0 842h1190.551V.111H0V842" />
          </defs>
          <clipPath id="horloge_svg__d">
            <use xlinkHref="#horloge_svg__c" overflow="visible" />
          </clipPath>
        </g>
        <g>
          <defs>
            <path id="horloge_svg__e" d="M0 842h1190.551V.111H0V842" />
          </defs>
          <clipPath id="horloge_svg__f">
            <use xlinkHref="#horloge_svg__e" overflow="visible" />
          </clipPath>
          <path
            clipPath="url(#horloge_svg__f)"
            fill="none"
            stroke=""
            strokeWidth={0.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            d="M651.967 813.653h510.235M989.291 785.308h172.911M816.377 737.119h345.825M651.967 708.773h510.235M1162.202 813.653V680.427M1119.683 813.653v-28.345M1017.637 813.653v-28.345M989.291 813.653V680.427M816.377 813.653V680.427M719.998 708.773v-28.346M1162.202 680.427H651.967v133.226"
          />
        </g>
      </svg>
    );
  }
}
export default HorlogeSvg;
