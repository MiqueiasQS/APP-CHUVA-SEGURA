import { FlatList, SafeAreaView, ScrollView, Text, View } from "react-native";
import HeaderHome from "../../components/HeaderHome";
import { useCallback, useContext, useEffect, useState } from "react";
import api from '../../services/api';
import { AuthContext } from "../../contexts/auth";
import Card from "../../components/CardHome";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
    const { navigate } = useNavigation();
    const [items, setItems] = useState();

    const getData = useCallback(async () => {
        try {
            const response = await api.get('occurrences');
            setItems(response.data.data);
        } catch (error) {
            console.error('Erro ao carregar dados:', error);
        }
    }, []);

    useEffect(() => {
        getData();
    }, []);

    const navigateNewOccurrence = () => {
        navigate("NewOccurrence");
    };
    const navigateOccurence = (id) => {
        navigate("EditOccurrence", { id });
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <HeaderHome onPress={() => navigateNewOccurrence()} />
            <View style={{ flex: 1 }}>
                <FlatList
                    data={items}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <Card data={item} navigate={() => navigateOccurence(item.id)} />}
                    ListFooterComponent={<View style={{ width: 10, height: 20 }} />}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    );
};

export default Home;