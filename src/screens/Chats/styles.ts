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

export const NewMatchesContainer = styled.View`
  gap: 15px;
`;

export const NewMatchesInfoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NewMatchesInfoTitle = styled.Text`
  font-size: 18px;
  font-weight: 500;

  color: #ffffff;
`;

export const NewMatchesInfoSeeAll = styled.Text`
  font-size: 12px;
  font-weight: 400;
  text-align: right;

  color: #ffffff;
`;

export const MatchesList = styled.FlatList``;

export const Messages = styled.View`
  gap: 25px;

  margin: 25px 0;
`;

export const MessageContainer = styled.TouchableOpacity``;

export const Message = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;

  margin-bottom: 25px;
  padding: 0 10px;
`;

export const MessageInfo = styled.View`
  gap: 5px;
`;

export const MessageInfoName = styled.Text`
  font-size: 18px;
  font-weight: 500;

  color: #ffffff;
`;

export const MessageInfoMessageAndDate = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MessageInfoMessage = styled.Text`
  font-size: 14px;
  font-weight: 300;
  line-height: 20.9px; /* 149.286% */

  color: #e2daec;
`;

export const MessageInfoDate = styled.Text`
  font-size: 12px;
  font-weight: 400;

  color: #726c7d;
`;

export const Separator = styled.View`
  height: 1px;

  background-color: #726c7d;
`;
