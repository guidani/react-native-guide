import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export function ScreenA() {
  const navigation = useNavigation();
  function openScreen() {
    navigation.navigate("screenB", {name: "Guilherme"});
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* <Button title="Go to ScreenB" onPress={openScreen} /> */}
      <Pressable style={styles.button} onPress={openScreen}>
        <Text style={styles.text}>Go to page B</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "black",

    borderRadius: 4,
    elevation: 3,
    backgroundColor: "white",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "red",
  },
});
