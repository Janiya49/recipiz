import { View, Text } from "react-native";

import RecipeCardScreen from "./components/RecipeCard";

export default function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen ABC</Text>
        <RecipeCardScreen />
      </View>
    );
  }  
