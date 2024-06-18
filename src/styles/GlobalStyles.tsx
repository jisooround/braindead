import { Global, css } from "@emotion/react";
import "../fonts/fonts.css";

const baseStyle = css`
  :root {
    --color-black: #000000;
    --color-white: #ffffff;
    --color-point: #d0f491;
    --color-yellow: #f4e390;
    --color-lightpurple: #e9d5ff;
    --color-lightgray: #f3f3f3;
    --color-gray: #cccccc;
    background-color: var(--color-white);
  }
  *,
  body {
    font-family: "GT-pressura-Mono";
    font-weight: 100;
    -webkit-font-smoothing: antialiased;

    a {
      text-decoration: none;
      color: inherit;
    }
  }
`;

const GlobalStyles = () => <Global styles={baseStyle} />;

export default GlobalStyles;
