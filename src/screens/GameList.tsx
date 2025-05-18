import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  FlatList,
} from 'react-native';

interface Question {
  question: string;
  options: string[];
  correctAnswerIndex: number;
}

const questions: Question[] = [
  {
    question: 'Azərbaycanın paytaxtı haradır?',
    options: ['Gəncə', 'Sumqayıt', 'Bakı', 'Şəki'],
    correctAnswerIndex: 2,
  },
  {
    question: 'İngiltərənin valyutası nədir?',
    options: ['Dollar', 'Euro', 'Funt sterlinq', 'Rubl'],
    correctAnswerIndex: 2,
  },
  {
    question: 'Dünyanın ən uzun çayı hansıdır?',
    options: ['Nil', 'Amazon', 'Dəclə', 'Volqa'],
    correctAnswerIndex: 0,
  },
  {
    question: 'Hansı planet Günəşə daha yaxındır?',
    options: ['Venera', 'Merkuri', 'Mars', 'Yupiter'],
    correctAnswerIndex: 1,
  },
  {
    question: 'Azərbaycan hansı materikdə yerləşir?',
    options: ['Avropa', 'Asiya', 'Afrika', 'Avstraliya'],
    correctAnswerIndex: 1,
  },
  {
    question: 'Türkiyənin milli valyutası hansıdır?',
    options: ['Manat', 'Dollar', 'Lirə', 'Rubl'],
    correctAnswerIndex: 2,
  },
  {
    question: 'HTML nə üçün istifadə olunur?',
    options: [
      'Proqram yazmaq üçün',
      'Veb səhifələrin strukturunu yaratmaq üçün',
      'Qrafika çəkmək üçün',
      'Məlumat bazası qurmaq üçün',
    ],
    correctAnswerIndex: 1,
  },
];

const GameList: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState<number>(0);
  const currentQuestion = questions[currentIndex];

  const handleAnswer = (index: number) => {
    setSelected(index);
    const correct = currentQuestion.correctAnswerIndex === index;
    setIsCorrect(correct);

    if (correct) {
      setScore(prev => prev + 1);
    }

    setTimeout(() => {
      setSelected(null);
      setIsCorrect(null);
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(prev => prev + 1);
      } else {
        Alert.alert("Oyun Bitdi", `Sizin toplam xalınız: ${correct ? score + 1 : score} / ${questions.length}`, [
          { text: "Yenidən başla", onPress: () => restartGame() }
        ]);
      }
    }, 1000);
  };
  const restartGame = () => {
    setCurrentIndex(0);
    setScore(0);
    setSelected(null);
    setIsCorrect(null);
  };

  const renderOption = ({item, index}: {item: string; index: number}) => {
    const isSelected = selected === index;
    const answerStyle = isSelected
      ? isCorrect
        ? styles.correct
        : styles.incorrect
      : styles.option;

    return (
      <TouchableOpacity
        style={[styles.option, isSelected && answerStyle]}
        onPress={() => handleAnswer(index)}
        disabled={selected !== null}>
        <Text style={styles.optionText}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>
        {currentIndex + 1}. {currentQuestion.question}
      </Text>

      <FlatList
        data={currentQuestion.options}
        renderItem={renderOption}
        keyExtractor={(_, index) => index.toString()}
        scrollEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  question: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  option: {
    backgroundColor: '#ddd',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
  },
  correct: {
    backgroundColor: 'green',
  },
  incorrect: {
    backgroundColor: 'red',
  },
  optionText: {
    fontSize: 18,
    textAlign: 'center',
    color:"#333",
  },
});

//make this component available to the app
export default GameList;
