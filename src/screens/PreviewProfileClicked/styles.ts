import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

export const ScrollView = styled.ScrollView`
  flex: 1;

  background-color: #0b0b0e;
`;

export const Container = styled.View`
  gap: 35px;

  padding: ${getStatusBarHeight() + 60 + "px"} 0 40px 0;
`;

export const ProfilePreview = styled.View`
  height: 400px;

  position: relative;
`;

export const PreviewImage = styled.Image`
  height: 100%;
`;

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

export const InfoContainer = styled.View`
  gap: 10px;

  margin: 0 30px;
`;

export const NameContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const Name = styled.Text`
  font-size: 24px;
  font-weight: 700;

  color: #ffffff;
`;

export const Description = styled.Text`
  font-size: 18px;
  font-weight: 500;

  color: #e2daec;
`;

export const InfoLocationContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LocationContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const Location = styled.Text`
  font-size: 12px;
  font-weight: 400;

  color: #e2daec;
`;

export const UpCircleButton = styled.TouchableOpacity``;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: 300;
  line-height: 20.9px; /* 149.286% */

  color: #ffffff;
`;

export const AboutMe = styled.Text`
  font-size: 14px;
  font-weight: 300;
  line-height: 20.9px; /* 149.286% */

  color: #e2daec;
`;

export const Badges = styled.View`
  flex-direction: row;
  gap: 10px;
`;
