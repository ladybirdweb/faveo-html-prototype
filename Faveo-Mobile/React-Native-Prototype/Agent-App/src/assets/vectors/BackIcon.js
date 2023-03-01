import * as React from "react";
import { Path, G, Defs } from "react-native-svg";
import SVGExt from "../../components/SVGExt";

const SvgComponent = () => (
    <SVGExt
    width={25}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path fill="#fff" d="M0 0h25v25H0z" />
    <G clipPath="url(#a)">
      <Path
        d="M10.042 22.005a.758.758 0 0 1-.546-.234L.937 12.945a.812.812 0 0 1-.23-.575.839.839 0 0 1 .23-.575l8.56-8.827a.76.76 0 0 1 .55-.234.761.761 0 0 1 .547.24.827.827 0 0 1 .225.574.826.826 0 0 1-.23.57L2.587 12.37l8.002 8.251a.84.84 0 0 1 .172.883.803.803 0 0 1-.287.364.754.754 0 0 1-.432.137Z"
        fill="#2F3C4E"
        stroke="#2F3C4E"
        strokeWidth={0.55}
      />
    </G>
    <Defs>
      <clipPath id="a">
        <Path
          fill="#fff"
          transform="translate(0 2)"
          d="M0 0h11.523v20.742H0z"
        />
      </clipPath>
    </Defs>
  </SVGExt>
);

export default SvgComponent;
