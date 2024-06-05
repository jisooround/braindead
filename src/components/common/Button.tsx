import styled from "@emotion/styled";

type Props = {
  content: string;
  active: boolean;
};

const Button = ({ content, active }: Props) => {
  return <ButtonStyle active={active}>{content}</ButtonStyle>;
};

const ButtonStyle = styled.button<{ active: boolean }>`
  background-color: ${({ active }) => (active ? "var(--color-point)" : "var(--color-lightgray)")};
  padding: 0 0.75rem;
  font-size: 14px;
  height: 30px;
  border-radius: 6px;
  line-height: 1.25rem;
  text-transform: uppercase;
  margin: 0 5px 5px 0;
  outline: none;
  border: ${({ active }) => (active ? "1px solid var(--color-point);" : "1px solid var(--color-lightgray);")};
  cursor: pointer;
  white-space: nowrap;
  :hover {
    background-color: var(--color-point);
    border: 1px solid var(--color-point);
  }
`;

export default Button;
