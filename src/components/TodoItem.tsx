import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type Props = {
  todo: Todo;
  deleteTodo: (todId: string) => void;
  openDetailView: (todoId: string) => void;
};

export const TodoItem: React.FC<Props> = ({
  todo,
  deleteTodo,
  openDetailView,
}) => (
  <TouchableOpacity
    onPress={() => openDetailView(todo.id)}
    onLongPress={() => deleteTodo(todo.id)}>
    <View style={styles.todo}>
      <Text>{todo.title}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    marginBottom: 10,
  },
});
