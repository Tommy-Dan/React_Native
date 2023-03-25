import { StyleSheet, Text, View } from 'react-native';
import Jacket from './components/Jacket'
import JacketDetails from './components/JacketDetails';

export default function App() {
  return (
    <View style={styles.container}>
        {/* <Jacket/> */}
      <JacketDetails />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
