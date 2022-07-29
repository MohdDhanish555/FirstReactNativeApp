import React, { useContext } from "react";
import { Button, Image, View } from "react-native";
import { AppContext } from "../context/AppContext";

const ImageDisplay = ({ navigation }: any) => {
  const state = useContext(AppContext).state;
  // console.log(state);

  return (
    <>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          source={{ uri: state.displayImage }}
          style={{ width: "90%", height: "90%" }}
        />
        <View style={{ marginTop: 10 }}>
          <Button title="Back" onPress={navigation.goBack} />
        </View>
      </View>
    </>
  );
};

export default ImageDisplay;
