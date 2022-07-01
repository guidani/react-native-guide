import { MaterialIcons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";

const { Screen, Navigator } = createDrawerNavigator();

import { ScreenA } from "../screens/ScreenA";
import { ScreenB } from "../screens/ScreenB";

export function DrawerRoutes() {
  return (
    <Navigator>
      <Screen
        name="screenA"
        component={ScreenA}
        options={{
          drawerLabel: "Home",
          drawerIcon: () => <MaterialIcons name="home" size={14} />,
        }}
      />
      <Screen
        name="screenB"
        component={ScreenB}
        options={{
          drawerLabel: "Settings",
          drawerIcon: () => <MaterialIcons name="settings" size={14} />,
        }}
      />
    </Navigator>
  );
}
