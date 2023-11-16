import styled, { css } from "styled-components/native";

interface RadioButtonOptionProps {
  checked: boolean;
}

export const Container = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: 400;
  line-height: 20.9px; /* 149.286% */

  color: #ffffff;
`;

export const RadioButtonContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;

export const RadioButtonOptionContent = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;

  margin: 0 20px;
`;

export const RadioButtonOption = styled.TouchableOpacity<RadioButtonOptionProps>`
  width: 24px;
  height: 24px;

  justify-content: center;
  align-items: center;

  ${({ checked }) =>
    checked
      ? css`
          background-color: #e9525f;

          border: 0.75px solid #e9525f;
        `
      : css`
          background-color: #0b0b0e;

          border: 0.75px solid #ffffff;
        `};

  border-radius: 12px;
`;

export const RadioButtonOptionTitle = styled.Text`
  font-size: 14px;
  font-weight: 300;
  line-height: 20.9px; /* 149.286% */

  color: #ffffff;
`;
