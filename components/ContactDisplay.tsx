import { useContext } from "react";
import { Button, Text, View } from "react-native";
import { AppContext } from "../context/AppContext";


const ContactDisplay = ({ navigation }: any) => {
  const state = useContext(AppContext).state;

  return (
    <View
      style={{
        margin: 10,
      }}
    >
      <Text>NAME : {state?.displayContact?.name}</Text>
      <Text>PHONE : {state?.displayContact?.phone}</Text>
      <Text
        style={{
          fontWeight: "bold",
          marginTop: 10,
          textDecorationLine: "underline",
        }}
      >
        BIO
      </Text>
      <Text style={{ textAlign: "center" }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
        consequatur nam nemo ducimus magnam atque eaque numquam voluptate ad
        est, fugiat, quibusdam amet saepe, eligendi vel veniam dolor neque
        officiis. Consectetur assumenda cumque quam minus, doloribus
        necessitatibus vitae laborum earum officiis tenetur nemo voluptas, neque
        laboriosam id maiores eius minima fugiat odit qui velit obcaecati
        repudiandae sed! Ratione, voluptatum esse! Necessitatibus sit corrupti
        iure? Quo pariatur libero mollitia deserunt labore, qui repellendus
        blanditiis soluta iusto quam assumenda saepe odio expedita odit minima,
        esse modi, fugiat facere architecto sapiente voluptas! Labore. Iusto
        voluptas, modi natus fugit assumenda et, sint ea quis debitis nam labore
        saepe accusamus omnis ullam ad esse rerum nisi hic qui iure ipsum
        magnam! Ea laudantium amet quidem! Numquam aliquam deleniti at id
        impedit pariatur reiciendis neque fugiat nam sapiente a dolor libero
        eveniet distinctio iure autem fugit, ut ducimus repellendus aliquid
        obcaecati porro. Architecto sint voluptatem voluptatibus.
      </Text>
      <View style={{ marginTop: 15 }}>
        <Button title="Back" onPress={navigation.goBack} />
      </View>
    </View>
  );
};

export default ContactDisplay;
