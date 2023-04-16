import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex.direction: row;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 80%;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.4s;
  background: ${(props) => props.background};
  &:hover {
    opacity: 0.8;
  }
  ${({ disabled }) =>
    disabled &&
    `
    pointer-events: none;
    opacity: 0.4;
  `}
`;

export const Text = styled.div`
  font-weight: bold;
  color: ${(props) => props.color};
  @media (max-height: 850px) {
    font-size: 12px;
  }
`;
