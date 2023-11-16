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

export const PreviewContainer = styled.View`
  gap: 20px;

  margin: 0 10px;
`;

export const PreviewHeader = styled.View`
  gap: 10px;
`;

export const PreviewHeaderTitle = styled.Text`
  font-size: 20px;
  font-weight: 700;

  color: #ffffff;
`;

export const PreviewHeaderDescription = styled.Text`
  font-size: 14px;
  font-weight: 300;
  line-height: 20.9px; /* 149.286% */

  color: #e2daec;
`;

export const PreviewClick = styled.TouchableWithoutFeedback``;

export const ProfilePreview = styled.View`
  flex: 1 0 0;

  height: 450px;

  position: relative;

  border: 1.5px solid #e9525f;
  border-radius: 15px;
`;

export const PreviewImage = styled.Image`
  height: 100%;

  border-radius: 15px;
`;

export const PreviewInfoProfile = styled.View`
  gap: 10px;

  width: 90%;

  position: absolute;

  bottom: 4px;
  left: 12px;
`;

export const PreviewInfoProfileNameContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const PreviewInfoProfileName = styled.Text`
  font-size: 24px;
  font-weight: 700;

  color: #ffffff;
`;

export const PreviewInfoProfileDescription = styled.Text`
  font-size: 18px;
  font-weight: 500;

  color: #e2daec;
`;

export const PreviewInfoProfileFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PreviewInfoProfileLocationContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const PreviewInfoProfileLocation = styled.Text`
  font-size: 12px;
  font-weight: 400;

  color: #e2daec;
`;

export const PreviewInfoProfileDownloadButton = styled.TouchableOpacity``;

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
