import { createStackNavigator } from "@react-navigation/stack";
import ContactDisplay from "../components/ContactDisplay";
import ContactsScreen from "./ContactsScreen";


const ContactsStack = createStackNavigator();


const ContactsStackScreen = () => {
  return (
    <ContactsStack.Navigator screenOptions={{ headerShown: false }}>
      <ContactsStack.Screen name="ContactsStack" component={ContactsScreen} />
      <ContactsStack.Screen name="ContactDisplay" component={ContactDisplay} />
    </ContactsStack.Navigator>
  )
}

export default ContactsStackScreen
