import { Global, css } from "@emotion/react";
import "../fonts/fonts.css";

const baseStyle = css`
  *,
  body {
    font-family: "GT-pressura-Mono";
  }
`;

const GlobalStyles = () => <Global styles={baseStyle} />;

export default GlobalStyles;
