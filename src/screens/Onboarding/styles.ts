import { FlatList } from "react-native";
import styled from "styled-components/native";

import { IOnboarding } from "../../utils/data-slides-onboarding";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  gap: 25px;

  background-color: #0b0b0e;
`;

export const Header = styled.View`
  padding: 0 20px;

  margin-left: auto;
`;

export const SkipButton = styled.TouchableOpacity``;

export const SkipText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  line-height: 21.4px; /* 133.75% */
  text-transform: capitalize;
  text-align: center;

  color: #ffffff;
`;

export const ListContainer = styled.View``;

export const ItemList = styled(FlatList as typeof FlatList<IOnboarding>)``;
