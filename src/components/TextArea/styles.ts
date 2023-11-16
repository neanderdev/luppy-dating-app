import styled, { css } from "styled-components/native";

interface TextAreaInputProps {
  isFocused: boolean;
}

export const Container = styled.View`
  flex: 1;
  gap: 8px;
`;

export const Label = styled.Text`
  font-size: 14px;
  font-weight: 300;
  line-height: 20.9px; /* 149.286% */

  color: #ffffff;
`;

export const TextInputContainer = styled.View``;

export const TextAreaInput = styled.TextInput<TextAreaInputProps>`
  font-size: 14px;
  font-weight: 300;
  line-height: 20.9px; /* 149.286% */

  height: 120px;

  padding: 16px 24px;

  background-color: #14151a;
  color: #726c7d;

  border-radius: 15px;

  ${({ isFocused }) =>
    isFocused
      ? css`
          border: 0.25px solid #c0325d;
        `
      : css`
          border: 0.25px solid #e2daec;
        `};
`;

export const TextAreaMessage = styled.Text`
  font-size: 12px;
  font-weight: 400;

  position: absolute;

  bottom: 10px;
  right: 10px;

  color: #726c7d;
`;
