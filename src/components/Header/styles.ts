import styled from "styled-components/native";

import LogoSvg from "../../assets/logo.svg";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0 10px;
`;

export const Logo = styled(LogoSvg)``;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: 500;

  color: #ffffff;
`;

export const IconsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const ButtonIcon = styled.TouchableOpacity``;
