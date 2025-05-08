//import liraries
import React, {useState} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    Button,
    ViewStyle,
    View,
    Switch,
  } from 'react-native';

import Profile from '../components/ProfileForm';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import { FormInput } from '../assets';

interface ProfileScreenProps {

    backgroundStyle: ViewStyle;
  
  }

  const ProfileScreen: React.FC<ProfileScreenProps> = ({backgroundStyle}) => {

    const [isDarkMode, setIsDarkMode] = useState(false);
    
    const [imgUrl, setImgUrl] = useState('');
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
  
    const [profileData, setProfileData] = useState<{
      img_url: string;
      name: string;
      bio: string;
    } | null>(null);
  
    const handleSubmit = (e: any) => {
      e.preventDefault();
      setProfileData({
        img_url: imgUrl,
        name: name,
        bio: bio,
      });
  
      setImgUrl('');
      setName('');
      setBio('');
    };
    return (
        <SafeAreaView style={backgroundStyle}>
            <FormInput width={100} height={80}  />
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
              padding: 20,
            }}>
            <Text style={[styles.label, isDarkMode && styles.darkText]}>
              Image URL
            </Text>
            <TextInput
              style={[styles.input, isDarkMode && styles.darkText]}
              value={imgUrl}
              onChangeText={setImgUrl}
              placeholder="Enter image URL"
              placeholderTextColor={isDarkMode ? 'white' : '#999'}
            />
  
            <Text style={[styles.label, isDarkMode && styles.darkText]}>
              Name
            </Text>
            <TextInput
              style={[styles.input, isDarkMode && styles.darkText]}
              value={name}
              onChangeText={setName}
              placeholder="Enter your name"
              placeholderTextColor={isDarkMode ? 'white' : '#999'}
            />
  
            <Text style={[styles.label, isDarkMode && styles.darkText]}>Bio</Text>
            <TextInput
              style={[styles.input, isDarkMode && styles.darkText]}
              value={bio}
              onChangeText={setBio}
              placeholder="Enter a short bio"
              placeholderTextColor={isDarkMode ? 'white' : '#999'}
            />
  
            <View style={styles.container}>
              <Text style={[styles.label, isDarkMode && styles.darkText]}>
                Dark mode
              </Text>
              <Switch value={isDarkMode} onValueChange={setIsDarkMode} />
            </View>
  
            <View style={{marginVertical: 10}}>
              <Button title="Save Profile" onPress={handleSubmit} />
            </View>
  
            {profileData && (
              <Profile
                img_url={profileData.img_url}
                name={profileData.name}
                bio={profileData.bio}
              />
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    label: {
      fontSize: 16,
      fontWeight: '600',
      marginBottom: 5,
      marginTop: 10,
    },
    darkText: {
      color: 'white',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      padding: 10,
      marginBottom: 10,
    },
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  });


export default ProfileScreen;
