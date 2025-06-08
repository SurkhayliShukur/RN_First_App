import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { pixelHorizontal, pixelVertical } from '../utils/metrics';
// import { HomeIcon } from '../../assets/icons';
import { useNavigation } from '@react-navigation/native';

interface AppHeaderProps {
  title?: string;
  onPressLeft?: () => void;
  onPressRight?: () => void;
  rightElement?: React.ReactNode;
  leftElement?: React.ReactNode;
  isGoBack?: boolean;
}

const AppHeader = ({
  title = 'Header',
  rightElement,
  leftElement,
  onPressLeft,
  onPressRight,
  isGoBack = false,
}: AppHeaderProps) => {
  const { goBack } = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        style={{ flex: 1 }}
        onPress={onPressLeft ?? isGoBack ? goBack : undefined}
        hitSlop={20}
      >
        {/* {leftElement ?? <leftIcon width={20} height={20} />} */}
      </Pressable>
      <View style={{ flex: 3, alignItems: 'center' }}>
        <Text style={{ fontSize: 18 }}>{title}</Text>
      </View>
      {/* <Pressable
        style={{ flex: 1, alignItems: 'flex-end' }}
        onPress={onPressRight}
        hitSlop={20}
      >
        {rightElement}
      </Pressable> */}
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    paddingVertical: pixelVertical(20),
    paddingHorizontal: pixelHorizontal(16),
    backgroundColor: '#fff',

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
});