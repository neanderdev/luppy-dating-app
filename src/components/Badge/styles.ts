import styled, { css } from "styled-components/native";

interface Props {
  type: "PRIMARY" | "SECONDARY" | "OUTLINE";
}

export const Container = styled.TouchableOpacity<Props>`
  justify-content: center;
  align-items: center;

  padding: 11px 20px;

  ${({ type }) =>
    type === "PRIMARY" &&
    css`
      background-color: #c0325d;
    `};

  ${({ type }) =>
    type === "SECONDARY" &&
    css`
      background-color: #726c7d;
    `};

  ${({ type }) =>
    type === "OUTLINE" &&
    css`
      background-color: transparent;

      border: 1px solid #e9525f;
    `};

  border-radius: 15px;
`;

export const Title = styled.Text`
  font-size: 9px;
  font-weight: 400;

  color: #ffffff;
`;
