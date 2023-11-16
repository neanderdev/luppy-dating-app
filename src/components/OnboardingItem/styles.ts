import styled from "styled-components/native";

interface ContainerProps {
  width: number;
}

export const Container = styled.View<ContainerProps>`
  justify-content: center;
  align-items: center;
  gap: 40px;

  width: ${({ width }) => `${width}px`};
`;

export const Image = styled.Image.attrs({
  resizeMode: "contain",
})``;

export const ItemContainer = styled.View``;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: 700;
  text-align: center;

  color: #ffffff;

  margin-bottom: 10px;
`;

export const Description = styled.Text`
  font-size: 14px;
  font-weight: 300;
  line-height: 20.9px; /* 149.286% */
  text-align: center;

  color: #e2daec;

  padding: 0 20px;
`;
