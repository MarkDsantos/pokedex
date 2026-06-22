import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Pokedex() {
    const router = useRouter();

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 16 }}>
            <Text>Pokedex</Text>
            <Button
                title="View Bulbasaur"
                onPress={() => router.push("/(tabs)/pokedex/bulbasaur")}
            />
        </View>
    );
}
