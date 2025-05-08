import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import { questions } from '../data/index';

type AnswerState = {
  [key: number]: {
    userAnswer: string;
    feedback: string;
    isAnswered: boolean;
  };
};

export default function QuestionList() {
  const [answers, setAnswers] = useState<AnswerState>({});
  const [score, setScore] = useState<number>(0);

  const handleCheckAnswer = (index: number) => {
    const correctAnswer = questions[index].correctAnswer.toLowerCase().trim();
    const userAnswer = answers[index]?.userAnswer?.toLowerCase().trim() || '';

    if (userAnswer === correctAnswer) {
      setScore(prev => prev + 1);
      updateAnswer(index, 'Correct!', true);
    } else {
      updateAnswer(index, 'Incorrect!', true);
    }
  };

  const updateAnswer = (index: number, feedback: string, isAnswered: boolean) => {
    setAnswers(prev => ({
      ...prev,
      [index]: {
        ...prev[index],
        feedback,
        isAnswered,
      }
    }));
  };

  const renderItem = ({ item, index }: { item: typeof questions[number]; index: number }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} resizeMode="cover" />
      <Text style={styles.question}>{item.questionText}</Text>

      <TextInput
        value={answers[index]?.userAnswer || ''}
        onChangeText={(text) =>
          setAnswers(prev => ({
            ...prev,
            [index]: {
              ...prev[index],
              userAnswer: text,
            }
          }))
        }
        style={styles.input}
        placeholder="Type your answer"
        editable={!answers[index]?.isAnswered}
      />

      <TouchableOpacity
        style={[styles.button, answers[index]?.isAnswered && { backgroundColor: 'gray' }]}
        onPress={() => handleCheckAnswer(index)}
        disabled={answers[index]?.isAnswered}
      >
        <Text style={styles.buttonText}>
          {answers[index]?.isAnswered ? 'Answered' : 'Check Answer'}
        </Text>
      </TouchableOpacity>

      {answers[index]?.feedback && (
        <Text
          style={[
            styles.feedback,
            answers[index]?.feedback === 'Correct!' ? styles.correct : styles.incorrect,
          ]}
        >
          {answers[index]?.feedback}
        </Text>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.score}>Score: {score}</Text>

      <FlatList
        data={questions}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 50 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  score: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  question: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 15,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
  },
  feedback: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  correct: {
    color: 'green',
  },
  incorrect: {
    color: 'red',
  },
});
