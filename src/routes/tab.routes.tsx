import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialIcons } from "@expo/vector-icons";

const { Screen, Navigator } = createBottomTabNavigator();

import { ScreenA } from "../screens/ScreenA";
import { ScreenB } from "../screens/ScreenB";

export function TabRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerTransparent: true,
        headerTintColor: "white",
        tabBarActiveTintColor: "green",
        tabBarActiveBackgroundColor: "black",
        tabBarLabelStyle: {
          fontSize: 14,
        },
      }}
    >
      <Screen
        name="screenA"
        component={ScreenA}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons color={color} size={size} name="home" />
          ),
        }}
      />
      <Screen
        name="screenB"
        component={ScreenB}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons color={color} size={size} name="settings" />
          ),
        }}
      />
    </Navigator>
  );
}
