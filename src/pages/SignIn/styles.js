import styled from 'styled-components/native';

export const Background = styled.View`
  flex:1;
  background-color: #fff;
`;

export const Container = styled.KeyboardAvoidingView`
  flex:1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 237px;
  height: 266px;
  margin-bottom: 20%;
`;

export const AreaInput = styled.View`
  border-bottom-width: 1px; /* Adicione uma borda na parte inferior */
  border-color: #000; /* Cor da borda */
  margin-bottom: 15px;
  width: 90%;
`;

export const Label = styled.Text`
  color: #121212;
  font-size: 16px; /* Tamanho da fonte do rótulo */
  margin-bottom: 5px; /* Espaçamento inferior do rótulo */
`;

export const Input = styled.TextInput`
  background-color: #FFF;
  padding: 10px;
  color: #121212;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 90%;
  height: 45px;
  border-radius: 8px;  
  background-color: #44B2F8D9;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;

export const SubmitText = styled.Text`
  font-size: 20px;
  color: #FFF;
`;

export const Link = styled.TouchableOpacity`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const LinkText = styled.Text`
  font-weight: bold;
  font-size: 14px;
  bottom: -40px; 
`;
