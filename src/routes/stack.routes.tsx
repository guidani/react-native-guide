import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen, Navigator } = createNativeStackNavigator();

import { ScreenA } from "../screens/ScreenA";
import { ScreenB } from "../screens/ScreenB";

export function StackRoutes() {
  return (
    <Navigator>
      <Screen
        name="screenA"
        component={ScreenA}
        options={{
          title: "Tela A",
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "red",
          },
        }}
      />
      <Screen
        name="screenB"
        component={ScreenB}
        options={{
          title: "Tela B",
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "blue",
          },
        }}
      />
    </Navigator>
  );
}
