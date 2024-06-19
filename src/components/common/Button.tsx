import { useNavigate } from "react-router-dom";
import { goTo } from "../../utils/goTo";
import { css } from "@emotion/react";

type Props = {
  content: string;
  active?: boolean;
  path?: string;
  size?: "sm" | "lg";
  bg?: "lightgray" | "black" | "point" | "white";
  bgHover?: "lightgray" | "black" | "point";
  colorHover?: "white" | "black" | "point";
  height?: string;
};

const Button = ({ content, active = false, path = "", size = "sm", bg = "lightgray", bgHover = "point", colorHover = "black", height }: Props) => {
  const navigate = useNavigate();

  return (
    <button css={size === "sm" ? SmallButton(active, bg, bgHover) : LargeButton(bg, bgHover, colorHover, height)} onClick={() => goTo(navigate, path)}>
      {content}
    </button>
  );
};

const SmallButton = (active: boolean, bg: "lightgray" | "black" | "point" | "white", bgHover: "lightgray" | "black" | "point") =>
  css({
    backgroundColor: active ? "var(--color-point)" : `var(--color-${bg})`,
    padding: "0 0.75rem",
    fontSize: "14px",
    height: "30px",
    borderRadius: "6px",
    lineHeight: "1.25rem",
    textTransform: "uppercase",
    margin: "0 5px 5px 0",
    outline: "none",
    border: active ? "1px solid var(--color-point)" : "1px solid var(--color-lightgray)",
    cursor: "pointer",
    whiteSpace: "nowrap",
    ":hover": {
      backgroundColor: `var(--color-${bgHover})`,
      border: `1px solid var(--color-${bgHover})`,
      color: bgHover === "black" ? "white" : "black",
    },
  });

const LargeButton = (bg: "lightgray" | "black" | "point" | "white", bgHover: "lightgray" | "black" | "point", colorHover: "white" | "black" | "point", height: string) =>
  css({
    backgroundColor: `var(--color-${bg})`,
    border: `1px solid var(--color-${bg})`,
    padding: "0 1.125rem",
    fontSize: "14px",
    height: height ? `${height}` : "65px",
    width: "100%",
    borderRadius: "0.375rem",
    lineHeight: "1.25rem",
    textTransform: "uppercase",
    margin: "0 5px 5px 0",
    outline: "none",
    cursor: "pointer",
    whiteSpace: "nowrap",
    ":hover": {
      backgroundColor: `var(--color-${bgHover})`,
      border: `1px solid var(--color-${bgHover})`,
      color: bgHover === "black" ? "white" : `var(--color-${colorHover})`,
    },
  });
export default Button;
