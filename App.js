import { StyleSheet, View } from 'react-native';
import Main from './src/Main.jsx'
import { PaperProvider } from 'react-native-paper';


export default function App() {
  return (
    <View style={styles.container}>
      <PaperProvider>
        <Main />
      </PaperProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
