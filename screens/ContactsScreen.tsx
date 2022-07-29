import { useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { AppContext } from "../context/AppContext";
import { contacts } from "../utils/contacts";

export default function ContactsScreen({ navigation } : any) {
  const dispatch = useContext(AppContext).dispatch;

  function handleTextPress(item: any) {
    dispatch({ type: "DISPLAY_CONTACT", payload: item });
    // dispatch({
    //   type: "SHOW_MODAL",
    //   payload: true,
    // });
    navigation.navigate("ContactDisplay")

  }
  return (
    <View>
      <FlatList
        data={contacts}
        renderItem={({ item }) => (
          <View style={styles.items}>
            <Text style={{ color : "blue"}} onPress={() => handleTextPress(item)}>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  items: {
    backgroundColor: "lightgray",
    padding: 25,
    margin: 5,
    borderRadius : 10

  },
});
