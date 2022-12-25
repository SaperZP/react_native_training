import React from 'react';
import {Text, View} from 'react-native';
import {AddTodo} from '../components/AddTodo';
import {TodoList} from '../components/TodoList';

type Props = {
  todos: Todo[];
  addTodo: (title: string) => void;
  deleteTodo: (todoId: string) => void;
  openDetailView: (todoId: string) => void;
};

export const MainScreen: React.FC<Props> = ({
  todos,
  addTodo,
  deleteTodo,
  openDetailView,
}) => {
  return (
    <View>
      <AddTodo onSubmit={addTodo} />
      {todos.length ? (
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          openDetailView={openDetailView}
        />
      ) : (
        <Text>Test</Text>
      )}
    </View>
  );
};
