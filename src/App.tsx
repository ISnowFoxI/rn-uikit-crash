import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import Stacks from './Stacks';

const App = () => {
  return (
    <GestureHandlerRootView style={styles.gestureHandlerWrapper}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stacks />
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  gestureHandlerWrapper: {
    flex: 1,
  },
});

export default App;
