import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;
  padding: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  background: #fafafa;
  width: 35px;
  height: 35px;
  border-radius: 17.5px;
  justify-content: center;
  align-items: center;
`;
