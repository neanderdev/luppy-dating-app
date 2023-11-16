import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled, { css } from "styled-components/native";

interface PictureAddButtonProps {
  url?: string | null;
}

export const ScrollView = styled.ScrollView`
  flex: 1;

  background-color: #0b0b0e;
`;

export const Container = styled.View`
  gap: 35px;

  padding: ${getStatusBarHeight() + 60 + "px"} 20px 40px 20px;
`;

export const ProfilePicturesContainer = styled.View`
  gap: 20px;

  margin: 0 10px;
`;

export const Info = styled.View`
  gap: 10px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
`;

export const PicturesContainer = styled.View`
  gap: 20px;
`;

export const Pictures = styled.View`
  flex-direction: row;
  gap: 20px;
`;

export const PictureAddButton = styled.TouchableOpacity<PictureAddButtonProps>`
  flex: 1 0 0;

  ${({ url }) =>
    !url &&
    css`
      justify-content: center;
      align-items: center;

      padding: 60px 0;
    `};

  border: 1px solid #e9525f;
  border-radius: 10px;
`;

export const Picture = styled.Image`
  flex: 1 0 0;

  border-radius: 10px;
`;

export const Separator = styled.View`
  height: 1px;

  background-color: #726c7d;
`;

export const BasicInformationContainer = styled.View`
  gap: 25px;

  margin: 0 10px;
`;

export const InterestsAndPreferencesContainer = styled.View`
  gap: 35px;

  margin: 0 10px;
`;

export const OptionContainer = styled.View`
  gap: 15px;
`;

export const OptionTitle = styled.Text`
  font-size: 16px;
  font-weight: 600;
  line-height: 21.4px; /* 133.75% */
  text-transform: capitalize;

  color: #e2daec;
`;

export const SocialMediaContainer = styled.View`
  gap: 35px;

  margin: 0 10px;
`;

export const SocialMedia = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 20px;

  background-color: #14151a;

  border: 0.25px solid #e9525f;
  border-radius: 15px;
`;

export const SocialMediaIcon = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const SocialMediaTitle = styled.Text`
  font-size: 14px;
  font-weight: 300;
  line-height: 20.9px; /* 149.286% */

  color: #ffffff;
`;
