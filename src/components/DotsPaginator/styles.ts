import { Animated } from "react-native";
import styled from "styled-components/native";

interface DotsContainer {
  opacity: number;
}

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;

  padding-top: 24px;

  height: 64px;
`;

export const Dots = styled(Animated.View)<DotsContainer>`
  width: 8px;
  height: 8px;

  margin-left: 7px;
  margin-right: 7px;

  background-color: #e2daec;

  border-radius: 15px;

  opacity: ${({ opacity }) => opacity};
`;
