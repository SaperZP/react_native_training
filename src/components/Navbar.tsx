import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {THEME} from '../theme';

type Props = {
  title: string;
};

export const Navbar: React.FC<Props> = ({title}) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
    height: 100,
    backgroundColor: THEME.MAIN_COLOR,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});
