import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, { useCallback } from 'react';
import { FlashList, ListRenderItem } from '@shopify/flash-list';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import LocalStorage from '../../store/localStorage';
import { Task } from '../../interface';
import TodoAddModal from './TodoAddModal';


const TodoApp = () => {
  const [todos, setTodos] = React.useState<Task[]>(LocalStorage.getItem('todos') || []);
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const handleAddTodo = (todo: Task) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    LocalStorage.setItem('todos', newTodos);
    setIsModalVisible(false);
  };

  const handleDelete = (id: number) => {
    const newTodos = todos.filter((todo: Task) => todo.id !== id);
    setTodos(newTodos);
    LocalStorage.setItem('todos', newTodos);
  };



    const handleDone = (id: number) => {
      const newTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(newTodos);
      LocalStorage.setItem('todos', newTodos);
    };

  const renderRightActions = useCallback((id: number) => {
    return (
      <>
        <TouchableOpacity style={styles.doneBtn} onPress={() => handleDone(id)}>
          <Text style={{ color: 'white' }}>done</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.delBtn}
          onPress={() => handleDelete(id)}
        >
          <Text style={{ color: 'white' }}>del</Text>
        </TouchableOpacity>
      </>
    );
  }, []);

  const renderItem: ListRenderItem<Task> = useCallback(
    ({ item }) => (
      <Swipeable renderRightActions={() => renderRightActions(item.id)}>
        <View style={styles.item}>
          <Text style={styles.todo_title}>{item.title}</Text>
          <Text>{item.completed ? 'Completed' : 'Not Completed'}</Text>
        </View>
      </Swipeable>
    ),
    [todos]
  );

  return (
    <View style={styles.container}>
      <TodoAddModal
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onConfirm={handleAddTodo}
      />
      <FlashList
        ListHeaderComponent={() => (
          <TouchableOpacity onPress={() => setIsModalVisible(true)}>
            <Text style={styles.title}>Todo app +</Text>
          </TouchableOpacity>
        )}
        data={todos}
        estimatedItemSize={50}
        renderItem={renderItem}
        ListEmptyComponent={() => <Text style={styles.title}>No todos</Text>}
      />
    </View>
  );
};

export default TodoApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    paddingBottom: 20,
  },

  todo_title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },

  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#DDDDDD',
    borderRadius: 10,
    marginTop: 10,
  },

  delBtn: {
    height: 70,
    width: 70,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: '#CB0404',
    justifyContent: 'center',
    alignItems: 'center',
  },
  doneBtn: {
    height: 70,
    width: 70,
    borderRadius: 10,
    marginTop: 10,
    marginLeft:10,
    backgroundColor: '#1F7D53',
    justifyContent: 'center',
    alignItems: 'center',
  },
});