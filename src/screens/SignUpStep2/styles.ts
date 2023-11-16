import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

export const ScrollView = styled.ScrollView`
  flex: 1;

  background-color: #0b0b0e;
`;

export const Container = styled.View`
  gap: 35px;

  padding: ${getStatusBarHeight() + 60 + "px"} 20px 40px 20px;
`;

export const BackButton = styled.TouchableOpacity`
  width: 63px;

  flex-direction: row;
  align-items: center;
`;

export const BackTitle = styled.Text`
  font-size: 16px;
  font-weight: 600;
  line-height: 21.4px; /* 133.75% */
  text-transform: capitalize;

  color: #e2daec;
`;

export const InfoContainer = styled.View`
  gap: 10px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;

  color: #ffffff;
`;

export const Description = styled.Text`
  font-size: 14px;
  font-weight: 300;
  line-height: 20.9px; /* 149.286% */

  color: #e2daec;

  padding-right: 20px;
`;

export const CloseIconButton = styled.TouchableOpacity`
  margin-left: auto;
`;
