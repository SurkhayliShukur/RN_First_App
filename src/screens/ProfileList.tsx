import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { SvgUri } from 'react-native-svg'; 


type User = {
  id: string;
  name: string;
  profileImage: string; 
  iconUrl: string;      
};

const users: User[] = [
  {
    id: '1',
    name: 'John Doe',
    profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
    iconUrl: 'https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/airplane.svg',
  },
  {
    id: '2',
    name: 'Jane Smith',
    profileImage: 'https://randomuser.me/api/portraits/women/2.jpg',
    iconUrl: 'https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/car.svg',
  },
  {
    id: '3',
    name: 'Alice Johnson',
    profileImage: 'https://randomuser.me/api/portraits/women/3.jpg',
    iconUrl: 'https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/planet.svg',
  },
  {
    id: '4',
    name: 'Bob Williams',
    profileImage: 'https://randomuser.me/api/portraits/men/4.jpg',
    iconUrl: 'https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/circle.svg',
  },
  {
    id: '5',
    name: 'Emily Brown',
    profileImage: 'https://randomuser.me/api/portraits/women/5.jpg',
    iconUrl: 'https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/rect.svg',
  },
  {
    id: '6',
    name: 'Michael Davis',
    profileImage: 'https://randomuser.me/api/portraits/men/6.jpg',
    iconUrl: 'https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/star.svg',
  },
  {
    id: '7',
    name: 'Olivia Wilson',
    profileImage: 'https://randomuser.me/api/portraits/women/7.jpg',
    iconUrl: 'https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/triangle.svg',
  }
];

export const ProfileList: React.FC = () => {
  const renderItem = ({ item }: { item: User }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.profileImage }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <SvgUri uri={item.iconUrl} width={40} height={40} />
    </View>
  );

  const ListHeader = () => (
    <Text style={styles.header}>User List</Text>
  );

  const ListFooter = () => (
    <Text style={styles.footer}>End of List</Text>
  );

  const ListEmpty = () => (
    <Text style={styles.empty}>No users found.</Text>
  );

  return (
    <FlatList
      data={users}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      ListHeaderComponent={ListHeader}
      ListFooterComponent={ListFooter}
      ListEmptyComponent={ListEmpty}
      contentContainerStyle={users.length === 0 ? styles.emptyContainer : undefined}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 8,
    elevation: 2, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 16,
    textAlign: 'center',
  },
  footer: {
    fontSize: 16,
    padding: 16,
    textAlign: 'center',
    color: '#888',
  },
  empty: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: '#aaa',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
