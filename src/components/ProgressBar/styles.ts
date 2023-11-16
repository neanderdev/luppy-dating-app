import styled from "styled-components/native";

interface ProgressProps {
  percentage: number;
}

export const Container = styled.View`
  height: 5px;

  position: relative;

  background-color: #726c7d;

  border-radius: 50px;
`;

export const Progress = styled.View<ProgressProps>`
  width: ${({ percentage }) => percentage}%;
  height: 100%;

  position: absolute;

  background-color: #e9525f;

  border-radius: 50px;
`;
