import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function PokemonDetails() {
    const { name } = useLocalSearchParams<{ name: string }>();

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>{name}</Text>
        </View>
    );
}
