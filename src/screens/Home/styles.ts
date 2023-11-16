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

export const OptionContainer = styled.View`
  gap: 15px;
`;

export const HeaderOptionContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: 500;

  color: #ffffff;
`;

export const SeeAll = styled.Text`
  font-size: 12px;
  font-weight: 400;
  text-align: right;

  color: #ffffff;
`;

export const FlatList = styled.FlatList``;

export const PopularDogs = styled.View`
  position: relative;
`;

export const PopularDogImage = styled.Image`
  width: 135px;
  height: 184px;

  border-radius: 10px;
`;

export const PopularDogInfo = styled.View`
  gap: 5px;

  position: absolute;

  bottom: 4px;
  left: 12px;
`;

export const PopularDogNameContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const PopularDogName = styled.Text`
  font-size: 16px;
  font-weight: 600;
  line-height: 21.4px; /* 133.75% */
  text-transform: capitalize;

  color: #e2daec;
`;

export const PopularDogDescription = styled.Text`
  font-size: 12px;
  font-weight: 400;

  color: #e2daec;

  padding-right: 12px;
`;

export const TopEvent = styled.View`
  width: 350px;

  padding: 20px;

  gap: 10px;

  background-color: #14151a;

  border-radius: 10px;
`;

export const EventDate = styled.Text`
  font-size: 12px;
  font-weight: 400;

  color: #ffffff;
`;

export const EventInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const EventInfoTitle = styled.Text`
  font-size: 18px;
  font-weight: 500;

  color: #fecc66;
`;

export const EventInfoLocaleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 3px;
`;

export const EventInfoLocale = styled.Text`
  font-size: 12px;
  font-weight: 400;

  color: #ffffff;
`;

export const EventDescription = styled.Text`
  font-size: 12px;
  font-weight: 400;

  color: #e2daec;
`;

export const EventContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
