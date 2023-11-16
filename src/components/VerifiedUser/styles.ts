import styled, { css } from "styled-components/native";

interface ContainerProps {
  verified: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 20px;
  height: 20px;

  justify-content: center;
  align-items: center;

  ${({ verified }) =>
    verified
      ? css`
          background-color: #2b8bfb;
        `
      : css`
          background-color: #726c7d;
        `};

  border-radius: 50px;
`;
