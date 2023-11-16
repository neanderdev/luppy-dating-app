import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 24px;

  background-color: #0b0b0e;
`;

export const Image = styled.Image.attrs({
  resizeMode: "contain",
})``;

export const InfoContainer = styled.View`
  gap: 12px;

  padding-bottom: 24px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: 700;
  text-align: center;

  color: #ffffff;
`;

export const Description = styled.Text`
  font-size: 14px;
  font-weight: 300;
  line-height: 20.9px; /* 149.286% */
  text-align: center;

  color: #e2daec;

  padding: 0 20px;
`;

export const ButtonWrapper = styled.View`
  gap: 35px;

  width: 100%;

  padding: 0 16px;
`;
