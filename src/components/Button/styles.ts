import styled, { css } from "styled-components/native";

interface Props {
  type: "PRIMARY" | "OUTLINE";
}

export const Container = styled.TouchableOpacity<Props>`
  justify-content: center;
  align-items: center;

  padding: 18px;

  ${({ type }) =>
    type === "PRIMARY" &&
    css`
      background-color: #e9525f;

      border: 1px solid #e9525f;
    `};

  ${({ type }) =>
    type === "OUTLINE" &&
    css`
      background-color: transparent;

      border: 1px solid #e9525f;
    `};

  border-radius: 15px;
`;

export const Title = styled.Text<Props>`
  font-size: 16px;
  font-weight: 600;
  line-height: 21.4px; /* 133.75% */
  text-transform: capitalize;

  ${({ type }) =>
    type === "PRIMARY" &&
    css`
      color: #ffffff;
    `};

  ${({ type }) =>
    type === "OUTLINE" &&
    css`
      color: #e2daec;
    `};
`;
