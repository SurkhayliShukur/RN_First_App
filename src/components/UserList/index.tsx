// components/UserList.tsx

import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

export interface Person {
  id: string;
  name: string;
  age: string;
}

interface UserListProps {
  people: Person[];
}

const UserList: React.FC<UserListProps> = ({people}) => {
  return (
    <FlatList
      data={people}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <View style={styles.listItem}>
          <Text style={styles.listText}>
            {item.name} - {item.age} years old
          </Text>
        </View>
      )}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 20,
    padding: 10,
  },
  listItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 1,
  },
  listText: {
    fontSize: 18,
  },
});

export default UserList;
