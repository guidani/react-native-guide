import { NavigationContainer } from "@react-navigation/native";
import { DrawerRoutes } from "./drawer.routes";

export function Routes() {
  return (
    <NavigationContainer>
      {/* <StackRoutes /> */}
      {/* <TabRoutes /> */}
      <DrawerRoutes />
    </NavigationContainer>
  );
}
