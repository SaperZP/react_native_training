import React, {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Navbar} from './src/components/Navbar';
import {MainScreen} from './src/screens/MainScreen';
import {TodoScreen} from './src/screens/TodoScreen';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [selectedTodo, setSelectedTodo] = useState<null | Todo>(null);

  const addTodo = (title: string) => {
    const newTodo = {
      id: Date.now().toString(),
      title,
    };

    setTodos(currentTodos => [...currentTodos, newTodo]);
  };
  const deleteTodo = (todoId: string) => {
    const todoToDeleteName = selectedTodo?.title
      ? selectedTodo?.title
      : todos.find(todo => todo.id === todoId)?.title;
    Alert.alert(
      'Todo deletion',
      `Are you sure you want to delete "${todoToDeleteName}"`,
      [
        {
          text: 'Yes',
          style: 'destructive',
          onPress: () => {
            setTodos(currentTodos =>
              currentTodos.filter(todo => todo.id !== todoId),
            );
            goBack();
          },
        },
        {text: 'No', style: 'cancel'},
      ],
      {cancelable: false},
    );
  };
  const openDetailView = (todoId: string) => {
    const foundTodo = todos.find(todo => todo.id === todoId);
    if (foundTodo) {
      setSelectedTodo(foundTodo);
    }
  };
  const goBack = () => {
    setSelectedTodo(null);
  };
  const editTodo = (todoId: string, title: string) => {
    setTodos(existedTodos =>
      existedTodos.map(todo => {
        if (todo.id === todoId) {
          todo.title = title;
        }

        return todo;
      }),
    );
  };

  return (
    <View style={styles.container}>
      <LinearGradient style={styles.gradient} colors={['yellow', 'blue']}>
        <Navbar title={'Todo App'} />
        <View style={styles.default}>
          {selectedTodo ? (
            <TodoScreen
              goBack={goBack}
              todo={selectedTodo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          ) : (
            <MainScreen
              todos={todos}
              addTodo={addTodo}
              deleteTodo={deleteTodo}
              openDetailView={openDetailView}
            />
          )}
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  default: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  gradient: {
    height: '100%',
  },
});

export default App;
