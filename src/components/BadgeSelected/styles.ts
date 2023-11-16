import styled, { css } from "styled-components/native";

interface BadgeProps {
  selected: boolean;
}

export const Container = styled.View`
  gap: 15px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 600;
  line-height: 21.4px; /* 133.75% */
  text-transform: capitalize;

  color: #e2daec;
`;

export const Badges = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Badge = styled.TouchableOpacity<BadgeProps>`
  ${({ selected }) =>
    selected
      ? css`
          background-color: #14151a;
          border: 1px solid #e9525f;
        `
      : css`
          background-color: #e2daec;
          border: 1px solid #e2daec;
        `};

  border-radius: 15px;
`;

export const BadgeTitle = styled.Text<BadgeProps>`
  font-size: 12px;
  font-weight: 400;

  ${({ selected }) =>
    selected
      ? css`
          color: #ffffff;
        `
      : css`
          color: #14151a;
        `};

  padding: 8px 12px;
`;
