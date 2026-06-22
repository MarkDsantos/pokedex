import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";


export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="pokedex" options={{
                title: "Pokedex",
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="book-outline" size={size} color={color} />
                )
            }} />
            <Tabs.Screen name="favorites" options={{
                title: "Favorites",
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="heart-outline" size={size} color={color} />
                )
            }} />
        </Tabs>
    );
}
