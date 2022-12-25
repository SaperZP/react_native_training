import React from 'react';
import {StyleSheet, View} from 'react-native';

type Props = {
  children: JSX.Element[];
  styles?: {};
};

export const AppCard: React.FC<Props> = ({children, styles: extraStyles}) => {
  return <View style={{...styles.default, ...extraStyles}}>{children}</View>;
};

const styles = StyleSheet.create({
  default: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: '#000',
    shadowRadius: 2,
    shadowOpacity: 0.3,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    elevation: 8,
  },
});
