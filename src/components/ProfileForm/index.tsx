import React from 'react';
import {
  Text, 
  View, 
  Image,
  StyleSheet

} from 'react-native';

interface ProfileProps {
  img_url: string;
  name: string;
  bio: string;
}

function Profile(props: ProfileProps): React.JSX.Element {
  const {img_url, name, bio} = props;
  return (
    <View style = {styles.cardContainer}>
      <Text> Profile Information </Text>
      <Image
        source={{uri: img_url}}
        style={{width: 90, height: 90, borderRadius: 50}}
      />
      <Text> {name}</Text>
      <Text> {bio}</Text>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  cardContainer:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
