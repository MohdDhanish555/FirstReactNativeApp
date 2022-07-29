import { createStackNavigator } from "@react-navigation/stack";
import ImageDisplay from "../components/ImageDisplay";
import AlbumScreen from "./AlbumScreen";


const AlbumStack = createStackNavigator();


const AlbumStackScreen = () => {
  return (
    <AlbumStack.Navigator screenOptions={{ headerShown: false }}>
      <AlbumStack.Screen name="AlbumStack" component={AlbumScreen} />
      <AlbumStack.Screen name="ImageDisplay" component={ImageDisplay} />
    </AlbumStack.Navigator>
  )
}

export default AlbumStackScreen
