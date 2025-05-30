import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import TodoApp from './components/TodoApp';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <TodoApp />
    </SafeAreaView>
  );
}
export default gestureHandlerRootHOC(App);
