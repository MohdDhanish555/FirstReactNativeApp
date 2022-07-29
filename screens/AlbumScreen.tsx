import * as React from "react";
import { FlatList, Image, TouchableHighlight, View } from "react-native";
import { AppContext } from "../context/AppContext";
import { images } from "../utils/images";

export default function AlbumScreen({navigation} : any) {
  const dispatch = React.useContext(AppContext).dispatch;

  function handleImagePress(item : string) {
    dispatch({ type: "DISPLAY_IMAGE", payload: item })
    navigation.navigate("ImageDisplay")
  }

  return (
    <View style={{ alignItems: "center" }}>
      <FlatList
        data={images}
        renderItem={({ item }) => (
          <TouchableHighlight onPress={() => handleImagePress(item)}>
            <Image
              source={{ uri: item }}
              style={{ width: 300, height: 200, marginVertical: 15 }}
            />
          </TouchableHighlight>
        )}
      />
    </View>
  );
}
