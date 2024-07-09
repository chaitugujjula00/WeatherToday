import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello Chaitanya,xyz Realme. I don't know what i am typing but i am typing because i need to type. Do i need to type more, I don't know</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9d',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
