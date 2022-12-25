import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Modal, Button} from 'react-native';
import {THEME} from '../theme';
import {textValidator} from '../utils';

type Props = {
  isVisible: boolean;
  closeModal: () => void;
  title: string;
  todoId: string;
  editTodo: (todoId: string, title: string) => void;
};

export const EditTodoModal: React.FC<Props> = ({
  isVisible,
  closeModal,
  title,
  editTodo,
  todoId,
}) => {
  const [textInputValue, setTextInputValue] = useState(title);

  const onCancelHandler = () => {
    setTextInputValue(title);
    closeModal();
  };
  const onSaveHandler = () => {
    textValidator(textInputValue, () => {
      setTextInputValue('');
      editTodo(todoId, textInputValue);
      closeModal();
    });
  };

  return (
    <Modal animationType={'slide'} visible={isVisible}>
      <View style={styles.wrap}>
        <TextInput
          value={textInputValue}
          onChangeText={setTextInputValue}
          style={styles.input}></TextInput>
        <View style={styles.buttons}>
          <Button title={'Save'} onPress={onSaveHandler} />
          <Button
            title={'Cancel'}
            onPress={onCancelHandler}
            color={THEME.DANGER_COLOR}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrap: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  input: {
    padding: 10,
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 2,
    width: '80%',
  },
  buttons: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
