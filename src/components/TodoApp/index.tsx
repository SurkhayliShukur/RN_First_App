//import liraries
import React, {useState, useCallback} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {FlashList, ListRenderItem} from '@shopify/flash-list';
import {Task} from '../../interface/index';
import LocalStorage from '../../store/localStorage';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import TodoAddModal from './TodoAddModal';

const TodoApp = () => {
  const [tasks, setTasks] = useState(LocalStorage.getItem('todos') || []);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAddTask = (task: Task) => {
    const newTask = [...tasks, task];
    setTasks(newTask);
    LocalStorage.setItem('todos', newTask);
    setIsModalVisible(false);
  };

  const handleDelete = (id: number) => {
    const newTask = tasks.filter((task: Task) => task.id !== id);
    setTasks(newTask);
    LocalStorage.setItem('todos', newTask);
  };

  const renderRightActions = useCallback((id: number) => {
    return (
      <>
        <TouchableOpacity
          style={styles.delBtn}
          onPress={() => handleDelete(id)}>
          <Text style={{color: 'white'}}>delete</Text>
        </TouchableOpacity>
      </>
    );
  }, []);

  const renderItem: ListRenderItem<Task> = useCallback(
    ({item}) => {
      if (!item || !item.text) return null;
  
      return (
        <Swipeable renderRightActions={() => renderRightActions(item.id)}>
          <View style={styles.item}>
            <Text>{item.text}</Text>
            <Text>{item.completed ? 'Completed' : 'Not Completed'}</Text>
          </View>
        </Swipeable>
      );
    },
    [tasks],
  );

  return (
    <View style={styles.container}>
      <TodoAddModal
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onConfirm={handleAddTask}
      />
      <FlashList
        ListHeaderComponent={() => (
          <TouchableOpacity onPress={() => setIsModalVisible(true)}>
            <Text style={styles.text}>Todo app +</Text>
          </TouchableOpacity>
        )}
        data={tasks}
        estimatedItemSize={50}
        renderItem={renderItem}
        ListEmptyComponent={() => <Text style={styles.text}>No todos</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, paddingTop: 50},
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#3e2f5b',
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0d4f7',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
  },
  item: {
    flexDirection: 'column',
    marginVertical: 6,
    height: 50,
    width: '100%',
    padding:12,
    backgroundColor: '#f4f0fa',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    elevation: 2,
  },
  text: {fontSize: 32, color: '#2d2d2d', textAlign: 'center'},
  completed: {textDecorationLine: 'line-through', color: '#888'},
  delBtn: {
    height: 50,
    width: 50,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default TodoApp;
