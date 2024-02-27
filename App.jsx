import { StyleSheet, StatusBar, Text, View } from "react-native";
import { Inicial } from './src/telas/Inicial';
import { Usuarios } from "./src/telas/Usuarios";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Usuarios/>
    </View>
  );
}

//styles => é o nome do css
const styles = StyleSheet.create(
  {
  container: {
    flex: 1, // é para ocupar todo o espaço disponivel
  },
}
);
