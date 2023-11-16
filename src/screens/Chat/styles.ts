import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled, { css } from "styled-components/native";

interface MessagesProps {
  author?: boolean;
}

interface MessageProps {
  author?: boolean;
}

export const Container = styled.View`
  flex: 1;
  gap: 15px;
  justify-content: space-between;

  padding: ${getStatusBarHeight() + 60 + "px"} 20px 40px 20px;

  background-color: #0b0b0e;
`;

export const Separator = styled.View`
  height: 1px;

  background-color: #726c7d;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderInfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const HeaderInfo = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const HeaderInfoNameAndStatus = styled.View`
  gap: 5px;
`;

export const HeaderInfoName = styled.Text`
  font-size: 18px;
  font-weight: 500;

  color: #ffffff;
`;

export const HeaderInfoStatus = styled.Text`
  font-size: 12px;
  font-weight: 400;

  color: #e2daec;
`;

export const HeaderCallsIcons = styled.View`
  flex-direction: row;
  gap: 20px;
`;

export const HeaderIconButton = styled.TouchableOpacity``;

export const BadgeContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const MessagesContainer = styled.FlatList`
  flex: 1;
`;

export const Messages = styled.View<MessagesProps>`
  flex-direction: row;
  align-items: flex-start;
  gap: 16px;

  ${({ author }) =>
    author &&
    css`
      justify-content: flex-end;
    `};

  padding: 0px 10px;
`;

export const Message = styled.View<MessageProps>`
  align-items: ${({ author }) => (author ? "flex-end" : "flex-start")};
  gap: 10px;
`;

export const MessageName = styled.Text`
  padding-top: 8px;

  font-size: 16px;
  font-weight: 600;
  line-height: 21.4px; /* 133.75% */
  text-transform: capitalize;

  color: #726c7d;
`;

export const MessageTextContainer = styled.View`
  align-items: center;

  padding: 10px 20px 10px 10px;

  background-color: #14151a;

  border-radius: 10px;
`;

export const MessageText = styled.Text`
  font-size: 14px;
  font-weight: 300;
  line-height: 20.9px; /* 149.286% */

  color: #ffffff;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 15px;
`;

export const InputContainer = styled.View`
  flex: 1;
`;

export const FooterIconButton = styled.TouchableOpacity``;
