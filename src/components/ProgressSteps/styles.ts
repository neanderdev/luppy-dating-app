import styled, { css } from "styled-components/native";

interface StepProps {
  viewable?: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  gap: 4px;
`;

export const Step = styled.View<StepProps>`
  flex: 1;

  height: 5px;

  ${({ viewable }) =>
    viewable
      ? css`
          background-color: #e9525f;
        `
      : css`
          background-color: #e2daec;
        `};

  border-radius: 50px;
`;
