import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Button, Text, View } from "react-native";

type ParamsProps = {
  name: string;
};

export function ScreenB() {
  const route = useRoute();
  const navigation = useNavigation();

  const { name } = route.params as ParamsProps;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "white", fontSize: 40 }}>Olá: {name}</Text>
      <Button onPress={() => navigation.goBack()} title="Voltar" />
    </View>
  );
}
