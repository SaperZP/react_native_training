import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {THEME} from '../theme';
import {AppCard} from '../components/ui/AppCard';
import {EditTodoModal} from '../components/EditTodoModal';

type Props = {
  todo: Todo;
  goBack: () => void;
  deleteTodo: (todoId: string) => void;
  editTodo: (todoId: string, title: string) => void;
};

export const TodoScreen: React.FC<Props> = ({
  goBack,
  todo,
  deleteTodo,
  editTodo,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View>
      <EditTodoModal
        isVisible={modalOpen}
        todoId={todo.id}
        title={todo.title}
        closeModal={() => setModalOpen(false)}
        editTodo={editTodo}
      />

      <AppCard styles={styles.card}>
        <Text style={styles.title}>{todo.title}</Text>
        <Button title={'Edit'} onPress={() => setModalOpen(true)} />
      </AppCard>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title={'Return'} color={THEME.GRAY_COLOR} onPress={goBack} />
        </View>
        <View style={styles.button}>
          <Button
            title={'Delete'}
            color={THEME.DANGER_COLOR}
            onPress={() => deleteTodo(todo.id)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    width: '40%',
  },
  title: {
    fontSize: 20,
  },
  card: {
    marginBottom: 20,
    padding: 15,
  },
});
