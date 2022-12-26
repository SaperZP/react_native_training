import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AddTodo} from '../components/AddTodo';
import {TodoList} from '../components/TodoList';
import NoItemsImage from './../assets/images/test.svg';
import {THEME} from '../theme';

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
        <View style={styles.no_items}>
          <Text style={styles.text}>No big deals, add one!</Text>
          <NoItemsImage width={'100%'} height={300} fill={THEME.GRAY_COLOR} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  no_items: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Roboto-Bold',
  },
});
