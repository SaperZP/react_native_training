import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {THEME} from '../theme';
import {textValidator} from '../utils';

type Props = {
  onSubmit: (title: string) => void;
};

export const AddTodo: React.FC<Props> = ({onSubmit}) => {
  const [task, setTask] = useState('');

  return (
    <View style={styles.block}>
      <TextInput
        value={task}
        style={styles.input}
        onChangeText={setTask}
        autoCorrect={false}
        autoCapitalize={'none'}
        keyboardType={'default'}
      />
      <Button
        title={'Add'}
        onPress={() =>
          textValidator(task, () => {
            onSubmit(task.trim());
            setTask('');
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },

  input: {
    width: '70%',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: THEME.MAIN_COLOR,
  },
});
