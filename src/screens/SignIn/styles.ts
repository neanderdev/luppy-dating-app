import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  gap: 35px;

  padding: ${getStatusBarHeight() + 60 + "px"} 20px 0 20px;

  background-color: #0b0b0e;
`;

export const InfoContainer = styled.View`
  gap: 10px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: 700;

  color: #ffffff;
`;

export const Description = styled.Text`
  font-size: 14px;
  font-weight: 300;
  line-height: 20.9px; /* 149.286% */

  color: #e2daec;
`;

export const FormContainer = styled.View`
  gap: 35px;

  padding: 0 10px;
`;

export const ForgotPassword = styled.Text`
  font-size: 14px;
  font-weight: 300;
  line-height: 20.9px; /* 149.286% */
  text-align: right;

  color: #e2daec;
`;

export const Or = styled.Text`
  font-size: 14px;
  font-weight: 600;
  line-height: 20.9px; /* 149.286% */
  text-align: center;

  color: #e2daec;
`;

export const SocialMediaContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 18px;
`;

export const SocialMediaButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  width: 54px;
  height: 54px;

  background-color: #14151a;

  border: 0.5px solid #e9525f;
  border-radius: 10px;
`;

export const SignUpDescription = styled.Text`
  font-size: 14px;
  font-weight: 300;
  line-height: 20.9px; /* 149.286% */
  text-align: center;

  color: #e2daec;
`;

export const SignUpTitle = styled.Text`
  font-weight: 500;

  color: #e2daec;
`;
