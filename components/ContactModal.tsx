import React, { useContext } from "react";
import { Button, Modal, StyleSheet, Text, View } from "react-native";
import { AppContext } from "../context/AppContext";

const ContactModal = () => {
  const state = useContext(AppContext).state;
  const dispatch = useContext(AppContext).dispatch;


  // console.log(state.displayContact.name)
  return (
    <Modal
      visible={state.showModal}
      animationType="fade"
      transparent
    >
      <View style={styles.modal}>
        <Text style={styles.modalText}>{state?.displayContact?.name} </Text>
        <Text style={styles.modalText}>{state?.displayContact?.phone} </Text>
        <Button title="close" onPress={() => dispatch({
            type: "SHOW_MODAL",
            payload: false,
        })} />
      </View>
    </Modal>
  );
};

export default ContactModal;

const styles = StyleSheet.create({
  modal: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellowgreen",
    borderRadius: 15,
    top: "25%",
    height: "20%",
    marginHorizontal: 20
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold"
  }
});
