import {Alert} from 'react-native';

export const textValidator = (
  text: string,
  toExecute: (...args: any) => void,
) => {
  if (text.trim().length > 3) {
    toExecute();
  } else {
    Alert.alert('Task description should be longer than 3 characters!');
  }
};
