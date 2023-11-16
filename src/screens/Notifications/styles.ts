import { FlatList } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled, { css } from "styled-components/native";

import { INotifications } from ".";

interface NotificationProps {
  viewed: boolean;
}

export const Container = styled.View`
  flex: 1;
  gap: 35px;

  padding: ${getStatusBarHeight() + 60 + "px"} 20px 40px 20px;

  background-color: #0b0b0e;
`;

export const NotificationsContainer = styled(
  FlatList as typeof FlatList<INotifications>
)``;

export const Notification = styled.View<NotificationProps>`
  flex-direction: row;
  align-items: center;
  gap: 15px;

  padding: 15px;

  ${({ viewed }) =>
    viewed
      ? css`
          background-color: #14151a;

          border-radius: 15px;
        `
      : css`
          border: 0.5px solid #e9525f;
          border-radius: 15px;
        `};
`;

export const Info = styled.View`
  gap: 10px;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: 300;
  line-height: 20.9px; /* 149.286% */

  color: #ffffff;
`;

export const BadgeContainer = styled.View`
  width: 150px;
`;
