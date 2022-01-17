import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import InfoBottomModal from './InfoBottomModal';

export default function App() {
  return (
    <View>
      <InfoBottomModal/>
      <StatusBar style="auto" />
    </View>
  );
}
