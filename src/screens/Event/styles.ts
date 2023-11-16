import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

export const ScrollView = styled.ScrollView`
  flex: 1;

  background-color: #0b0b0e;
`;

export const Container = styled.View`
  gap: 30px;

  padding: ${getStatusBarHeight() + 60 + "px"} 20px 40px 20px;
`;

export const InfoContainer = styled.View`
  gap: 10px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: 300;
  line-height: 20.9px; /* 149.286% */

  color: #e2daec;
`;

export const SeeAll = styled.Text`
  font-size: 12px;
  font-weight: 400;

  color: #e2daec;
`;

export const Name = styled.Text`
  font-size: 24px;
  font-weight: 700;

  color: #ffffff;
`;

export const Description = styled.Text`
  font-size: 14px;
  font-weight: 400;
  line-height: 21.9px;

  color: #ffffff;
`;

export const DateAndTime = styled.Text`
  font-size: 16px;
  font-weight: 600;
  line-height: 21.4px; /* 133.75% */
  text-transform: capitalize;

  color: #ffffff;
`;

export const Location = styled.Text`
  font-size: 16px;
  font-weight: 600;
  line-height: 21.4px; /* 133.75% */
  text-transform: capitalize;

  color: #ffffff;
`;

export const Members = styled.View`
  flex-direction: row;
  gap: 15px;
`;

export const MemberAddParticipant = styled.TouchableOpacity`
  width: 54px;
  height: 54px;

  justify-content: center;
  align-items: center;

  background-color: #14151a;

  border: 1px dashed #e9525f;
  border-radius: 50px;
`;

export const MemberAdminContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const MemberAdminInfo = styled.View`
  gap: 5px;
`;

export const MemberAdminName = styled.Text`
  font-size: 18px;
  font-weight: 500;

  color: #ffffff;
`;

export const MemberAdminRole = styled.Text`
  font-size: 12px;
  font-weight: 400;

  color: #e2daec;
`;

export const ButtonsWrapper = styled.View`
  gap: 20px;
`;
