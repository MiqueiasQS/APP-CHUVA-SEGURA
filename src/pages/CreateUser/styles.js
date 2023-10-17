import styled from "styled-components/native";
import { Text, View, SafeAreaView, ScrollView } from "react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #FFF;
  padding-top: 60%;
`;

export const Image = styled.Image`
rezide-mode: contain;
  width: 100%;
  height: 266px;
  margin-bottom: 20%;
`;

export const ScrollViewContent = styled(ScrollView)`
  padding: 20px;
`;

export const Header = styled(Text)`
  font-size: 24px;
  font-weight: bold;
  padding: 12px 0;
  margin-bottom: 5px;
  color: #fff;
`;

export const InputContainer = styled(View)`
  background-color: #FFF;
  padding: 10px;
  color: #121212;
`;

export const Label = styled(Text)`
  font-size: 16px;
  margin-bottom: 6px;
  font-weight: bold;
  color: #000;
`;

export const ErrorText = styled(Text)`
  color: #FF0000; /* Cor para mensagens de erro */
  font-size: 14px;
  margin-top: 5px;
`;

export const StyledSwitch = styled.Switch`
  width: 40px;
  height: 40px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #44B2F8D9;
  width: 100%;
  height: 45px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const Link = styled.TouchableOpacity`
  margin-top: 10px;
  margin-bottom: 10px;
  flex:1;
  align-items: center;
  justify-content: center;
  margin-bottom: 10%;
`;

export const LinkText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #000;
`;

export const LinkTextSingIn = styled.Text`
  color: #68B2F8;
`;