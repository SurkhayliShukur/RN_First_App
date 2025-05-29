import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  TextInput,
} from 'react-native';
import {Task} from '../../../interface/index';

interface DeleteModalProps {
  visible: boolean;
  onConfirm: (payload: Task) => void;
  onCancel: () => void;
  message?: string;
}

const TodoAddModal: React.FC<DeleteModalProps> = ({
  visible,
  onConfirm,
  onCancel,
}) => {
  const [title, setTitle] = useState('');

  const handleSubmit = () => {
    if (!title) {
      Alert.alert('Please fill title field');
      return;
    }
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };
    onConfirm?.(newTodo);
    setTitle('');
  };

  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.message}>Add todo</Text>
          <TextInput
            placeholder="Enter todo title"
            value={title}
            onChangeText={t => setTitle(t)}
            style={styles.input}
          />
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={[styles.button, styles.cancel]}
              onPress={onCancel}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.delete]}
              onPress={handleSubmit}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TodoAddModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modal: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
  },

  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },

  message: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  cancel: {
    backgroundColor: '#ccc',
  },
  delete: {
    backgroundColor: '#1DCD9F',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
