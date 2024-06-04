import { Global, css } from "@emotion/react";

const baseStyle = css`
  * {
    font-family: "GT-pressura-Mono";
  }
`;

const GlobalStyles = () => <Global styles={baseStyle} />;

export default GlobalStyles;
