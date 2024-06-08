import { Global, css } from "@emotion/react";
import "../fonts/fonts.css";

const baseStyle = css`
  :root {
    --color-black: #000000;
    --color-white: #ffffff;
    --color-point: #d0f491;
    --color-lightpurple: #e9d5ff;
    --color-lightgray: #f3f3f3;
    --color-pointgray: #cccccc;
  }
  *,
  body {
    font-family: "GT-pressura-Mono";
    font-weight: 100;
    a {
      text-decoration: none;
      color: var(--color-black);
    }
  }
`;

const GlobalStyles = () => <Global styles={baseStyle} />;

export default GlobalStyles;
