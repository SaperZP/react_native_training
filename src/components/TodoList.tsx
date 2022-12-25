import React from 'react';
import {FlatList, View} from 'react-native';
import {TodoItem} from './TodoItem';

type Props = {
  todos: Todo[];
  deleteTodo: (todId: string) => void;
  openDetailView: (todoId: string) => void;
};

export const TodoList: React.FC<Props> = ({
  todos,
  deleteTodo,
  openDetailView,
}) => {
  return (
    <View>
      <FlatList
        keyExtractor={item => item.id}
        data={todos}
        renderItem={({item}) => (
          <TodoItem
            todo={item}
            deleteTodo={deleteTodo}
            openDetailView={openDetailView}
          />
        )}
      />
    </View>
  );
};
