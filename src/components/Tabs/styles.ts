import styled, { css } from "styled-components/native";

interface Props {
  selected: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;

  height: 42px;

  margin: 0 10px;
  padding: 5px;

  background-color: #0b0b0e;

  border: 1px solid #726c7d;
  border-radius: 10px;
`;

export const Tab = styled.TouchableOpacity<Props>`
  flex: 1 0 0;

  justify-content: center;
  align-items: center;

  padding: 8px 0px;

  ${({ selected }) =>
    selected &&
    css`
      background-color: #14151a;

      border: 1px solid #e9525f;
      border-radius: 8px;
    `};
`;

export const Title = styled.Text<Props>`
  font-size: 11px;
  font-weight: 400;
  text-align: center;

  ${({ selected }) =>
    selected
      ? css`
          color: #ffffff;
        `
      : css`
          color: #726c7d;
        `};
`;
