import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled, { css } from "styled-components/native";

interface MatchButtonProps {
  type: "MESSAGE" | "PASS" | "MATCH";
}

export const Container = styled.View`
  flex: 1;
  gap: 35px;

  padding: ${getStatusBarHeight() + 60 + "px"} 20px 40px 20px;

  background-color: #0b0b0e;
`;

export const BodyContainer = styled.View`
  gap: 20px;

  height: 100%;
`;

export const MatchesList = styled.FlatList``;

export const Match = styled.View`
  gap: 10px;

  position: relative;

  border: 1.5px solid #e9525f;
  border-radius: 20px;
`;

export const MatchImage = styled.Image`
  height: 100%;

  border-radius: 20px;
`;

export const MatchContainer = styled.View`
  width: 90%;

  position: absolute;

  bottom: 4px;
  left: 12px;
`;

export const MatchNameContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const MatchName = styled.Text`
  font-size: 24px;
  font-weight: 700;

  color: #ffffff;
`;

export const MatchInfo = styled.Text`
  font-size: 18px;
  font-weight: 500;

  color: #e2daec;
`;

export const MatchFooterInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MatchLocaleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const MatchLocale = styled.Text`
  font-size: 12px;
  font-weight: 400;

  color: #e2daec;
`;

export const MatchDownloadButton = styled.TouchableOpacity``;

export const ContainerClickedNextAndPreviousImage = styled.View`
  flex-direction: row;
  justify-content: space-between;

  position: absolute;

  top: 0;
`;

export const ContainerClickedNextAndPreviousImageButton = styled.TouchableOpacity`
  width: 30%;
  height: 100%;
`;

export const MatchButtons = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 45px;

  margin-top: auto;
  margin-bottom: 25px;
  padding: 25px;

  border: 0.25px solid #e9525f;
  border-radius: 150px;
`;

export const MatchButton = styled.TouchableOpacity<MatchButtonProps>`
  width: 54px;
  height: 54px;

  justify-content: center;
  align-items: center;

  ${({ type }) =>
    type === "MESSAGE" &&
    css`
      background-color: #e9525f;

      border-radius: 50px;
    `};

  ${({ type }) =>
    type === "PASS" &&
    css`
      border: 1px solid #fecc66;
      border-radius: 50px;
    `};

  ${({ type }) =>
    type === "MATCH" &&
    css`
      background-color: #4ae531;

      border-radius: 50px;
    `};
`;
