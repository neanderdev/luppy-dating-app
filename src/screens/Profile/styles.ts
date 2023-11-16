import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled, { css } from "styled-components/native";

interface CardPlanProps {
  selected?: boolean;
}

export const ScrollView = styled.ScrollView`
  flex: 1;

  background-color: #0b0b0e;
`;

export const Container = styled.View`
  gap: 35px;

  padding: ${getStatusBarHeight() + 60 + "px"} 0 40px 0;
`;

export const CardProfile = styled.View`
  justify-content: center;
  align-items: center;
  gap: 20px;

  margin: 0 20px;
  padding: 90px 20px;

  border: 0.25px solid #e9525f;
  border-radius: 15px;
`;

export const UsernameContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const Username = styled.Text`
  font-size: 24px;
  font-weight: 700;

  color: #ffffff;
`;

export const Description = styled.Text`
  font-size: 18px;
  font-weight: 500;

  color: #e2daec;
`;

export const Plans = styled.FlatList``;

export const CardPlan = styled.TouchableOpacity<CardPlanProps>`
  justify-content: center;
  align-items: center;
  gap: 20px;

  width: 250px;

  padding: 20px;

  background-color: #14151a;

  ${({ selected }) =>
    selected
      ? css`
          border: 2px solid #e9525f;
        `
      : css`
          border: 0.25px solid #e9525f;
        `};

  border-radius: 15px;
`;

export const NamePlan = styled.Text`
  font-size: 18px;
  font-weight: 500;

  color: #ffffff;
`;

export const PricePlan = styled.Text`
  font-size: 16px;
  font-weight: 600;
  line-height: 21.4px; /* 133.75% */
  text-transform: capitalize;

  color: #e2daec;
`;

export const ButtonWrapper = styled.View`
  margin: 0 20px;
`;
