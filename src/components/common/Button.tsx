/** @jsxImportSource @emotion/react */
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
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

const Button = ({ content, active = false, path = "", size = "sm", bg = "lightgray", bgHover = "point", colorHover = "black", height, onClick, disabled, type = "button" }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (path) {
      goTo(navigate, path);
    }
  };

  return (
    <button type={type} disabled={disabled} css={size === "sm" ? SmallButton(active, bg, bgHover, disabled) : LargeButton(bg, bgHover, colorHover, height, disabled)} onClick={handleClick}>
      {content}
    </button>
  );
};

const SmallButton = (active: boolean, bg: "lightgray" | "black" | "point" | "white", bgHover: "lightgray" | "black" | "point", disabled: boolean) =>
  css({
    backgroundColor: active ? "var(--color-point)" : `var(--color-${bg})`,
    padding: "0 0.75rem",
    fontSize: "14px",
    height: "30px",
    borderRadius: "6px",
    lineHeight: "1.25rem",
    textTransform: "uppercase",
    margin: "0 5px 0",
    outline: "none",
    border: active ? "1px solid var(--color-point)" : "1px solid var(--color-lightgray)",
    cursor: "pointer",
    whiteSpace: "nowrap",
    ...(!disabled && {
      ":hover": {
        backgroundColor: `var(--color-${bgHover})`,
        border: `1px solid var(--color-${bgHover})`,
        color: bgHover === "black" ? "white" : "black",
      },
    }),
  });

const LargeButton = (bg: "lightgray" | "black" | "point" | "white", bgHover: "lightgray" | "black" | "point", colorHover: "white" | "black" | "point", height: string, disabled: boolean) =>
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
    color: bg === "black" ? "white" : `var(--color-black)`,
    ...(!disabled && {
      ":hover": {
        backgroundColor: `var(--color-${bgHover})`,
        border: `1px solid var(--color-${bgHover})`,
        color: bgHover === "black" ? "white" : "black",
      },
    }),
  });
export default Button;
