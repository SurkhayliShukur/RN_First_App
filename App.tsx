import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';

// import ProfileScreen from './src/screens/ProfileScreen';
// import UserForm from './src/screens/UserForm';
// import {ProfileList} from './src/screens/ProfileList';
import QuestionList from './src/screens/QuestionList';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      {/* <ProfileScreen backgroundStyle={backgroundStyle} /> */}

      {/* <UserForm /> */}
      {/* <UserForm /> */}
      {/* <ProfileList /> */}
      <QuestionList />
    </SafeAreaView>
  );
}
export default App;
