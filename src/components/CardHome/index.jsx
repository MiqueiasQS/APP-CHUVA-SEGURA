import { Text, TouchableOpacity, View } from "react-native";
import {
  Main,
  TetxTitle,
  TextTitleItem,
  ViewBlue,
  ViewColumn,
  ViewLine,
} from "./styled";

const Card = ({ data, navigate }) => {
  return (
    <Main>
      <ViewLine>
        <TetxTitle>{data.title}</TetxTitle>
        <TetxTitle>{data.created_at}</TetxTitle>
      </ViewLine>
      <ViewLine>
        <Text>{data.description}</Text>
      </ViewLine>
      <ViewLine>
        <ViewColumn>
          <TextTitleItem>Categoria</TextTitleItem>
          <ViewBlue>
            <Text>{data.category}</Text>
          </ViewBlue>
        </ViewColumn>
        <ViewColumn>
          <TextTitleItem>Nível de Risco</TextTitleItem>
          <ViewBlue>
            <Text>{data.risk_level}</Text>
          </ViewBlue>
        </ViewColumn>
        <ViewColumn>
          <TextTitleItem>Status</TextTitleItem>
          <ViewBlue>
            <Text>{data.status}</Text>
          </ViewBlue>
        </ViewColumn>
      </ViewLine>
      <ViewLine>
        <Text>Cidade: city fazer lat long</Text>
      </ViewLine>

      <TouchableOpacity onPress={navigate}>
        <ViewBlue>
          <Text>Ver detalhes</Text>
        </ViewBlue>
      </TouchableOpacity>
    </Main>
  );
};

export default Card;
