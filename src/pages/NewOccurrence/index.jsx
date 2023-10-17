import React from "react";
import { Keyboard, ScrollView } from "react-native";
import { Controller } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";

import TextInput from "../../components/TextInput";
import {
  AppContainer, HeaderWrapper, MainHeader, FormWrapper, InputBlock, InputLabel, SubmitButton, ButtonLabel, MessageText, ButtonsWrapper,
} from "./styles";
import api from '../../services/api';


const defaultValues = {
  title: "",
  description: "",
  category: "",
  risk_level: 1,
  status: "",
  id_user: "",
  latitude: "-29.71143880",
  longitude: "-53.77776160",
  image: "",
  trust_level: null,
};

const CreateOccurrence = () => {
  const navigation = useNavigation();

  const onSubmit = async (data) => {
    Keyboard.dismiss();

    try {
      await api.post('/occurrences', data);
      reset(defaultValues);
      navigation.navigate("Home");
    } catch (error) {
      console.error("Erro ao enviar dados:", error.message);
    }
  };

  return (
    <AppContainer>
      <HeaderWrapper>
        <MainHeader>Criar Ocorrência</MainHeader>
        <MessageText>Insira os seus dados</MessageText>
      </HeaderWrapper>
      <ScrollView>
        <FormWrapper>
          <InputBlock>
            <Controller
              render={({ field: { onChange, value } }) => (
                <>
                  <InputLabel>TÍTULO</InputLabel>
                  <TextInput
                    name="title"
                    placeholder="DIGITE O TÍTULO"
                    onChange={onChange}
                    value={value}
                    error={errors.title}
                  />
                </>
              )}
              name="title"
            />
          </InputBlock>

          <InputBlock>
            <Controller
              render={({ field: { onChange, value } }) => (
                <>
                  <InputLabel>DESCRIÇÃO</InputLabel>
                  <TextInput
                    name="description"
                    placeholder="ESCREVA UM BREVE RESUMO"
                    onChange={onChange}
                    value={value}
                    error={errors.description}
                  />
                </>
              )}
              name="description"
            />
          </InputBlock>

          <InputBlock>
            <Controller
              render={({ field: { onChange, value } }) => (
                <>
                  <InputLabel>CATEGORIA</InputLabel>
                </>
              )}
              name="category"
            />
          </InputBlock>

          <InputBlock>
            <Controller
              render={({ field: { onChange, value } }) => (
                <>
                  <InputLabel>NÍVEL DE RISCO</InputLabel>
                </>
              )}
              name="risk_level"
            />
          </InputBlock>

          <InputBlock>
            <Controller
              render={({ field: { onChange, value } }) => (
                <>
                  <InputLabel>STATUS</InputLabel>
                </>
              )}
              name="status"
            />
          </InputBlock>
          <InputBlock>
            <InputLabel>LOCALIZAÇÃO</InputLabel>
          </InputBlock>
        </FormWrapper>
        <ButtonsWrapper>
          <SubmitButton onPress={(onSubmit)}>
            <ButtonLabel>Cadastrar</ButtonLabel>
          </SubmitButton>
          <SubmitButton onPress={() => navigation.goBack()}>
            <ButtonLabel>Lista de Ocorrências</ButtonLabel>
          </SubmitButton>
        </ButtonsWrapper>
      </ScrollView>
    </AppContainer>
  );
};
export default CreateOccurrence;
