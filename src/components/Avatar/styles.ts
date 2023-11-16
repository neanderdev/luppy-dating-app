import styled, { css } from "styled-components/native";

interface ContainerProps {
  isGroup: boolean;
}

interface ImageProps {
  size: "SMALL" | "MEDIUM" | "LARGE";
}

interface StatusProps {
  size: "SMALL" | "MEDIUM" | "LARGE";
  status: "ONLINE" | "OFFLINE" | "ABSENT";
}

export const Container = styled.View<ContainerProps>`
  position: relative;

  ${({ isGroup }) =>
    isGroup &&
    css`
      margin-left: -8px;
    `};
`;

export const Image = styled.Image<ImageProps>`
  ${({ size }) =>
    size === "SMALL" &&
    css`
      width: 34px;
      height: 34px;
    `};

  ${({ size }) =>
    size === "MEDIUM" &&
    css`
      width: 54px;
      height: 54px;
    `};

  ${({ size }) =>
    size === "LARGE" &&
    css`
      width: 70px;
      height: 70px;
    `};

  border-radius: 50px;
`;

export const Status = styled.View<StatusProps>`
  width: 8px;
  height: 8px;

  ${({ status }) =>
    status === "ONLINE"
      ? css`
          background-color: #4ae531;
        `
      : status === "OFFLINE"
      ? css`
          background-color: #e9525f;
        `
      : css`
          background-color: #14151a;
        `};

  border-radius: 50px;

  position: absolute;

  ${({ size }) =>
    size === "SMALL" &&
    css`
      bottom: 1px;
      right: 1px;
    `};

  ${({ size }) =>
    size === "MEDIUM" &&
    css`
      bottom: 4px;
      right: 4px;
    `};

  ${({ size }) =>
    size === "LARGE" &&
    css`
      bottom: 8px;
      right: 6px;
    `};
`;
