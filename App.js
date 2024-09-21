import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { fonts } from './src/global/fonts';
import MainNavigator from './src/navigation/MainNavigator';
import { store } from './src/app/store';
import { Provider } from 'react-redux';
import { init } from './src/db';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  init();
  const [fontLoaded] = useFonts(fonts);

  if (!fontLoaded) {
    return null;
  }

  return (
    <>
      <Provider store={store}>
        <MainNavigator />
        <FlashMessage position="top" />
      </Provider>
      <StatusBar style='light' />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});


