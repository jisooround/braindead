import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

interface TransitionProps {
  transition?: boolean;
}

const Gradient = ({ transition }: TransitionProps) => {
  return <GradientContainer transition={transition ?? false}></GradientContainer>;
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const GradientContainer = styled.div<TransitionProps>`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 300px;
  z-index: 100;
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.35) 45%, rgba(0, 0, 0, 0) 100%);
  ${({ transition }) =>
    transition &&
    css`
      animation: ${fadeIn} 0.2s ease-in-out;
    `}
`;
export default Gradient;
