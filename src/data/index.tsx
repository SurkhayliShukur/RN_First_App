type Question = {
  id: number;
  questionText: string;
  imageUrl: string;
  correctAnswer: string;
};

export const questions: Question[] = [
    {
      id: 1,
      questionText: 'What is the capital of France?',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoEVrj9OqWFw6cVCjOmgU7N8XG63bm_N0Kjg&s',
      correctAnswer: 'Paris',
    },
    {
      id: 2,
      questionText: 'Who developed React Native?',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmMye1SIgoKEJA4EuRc8LMGj_HtfJPnVpvJQ&s',
      correctAnswer: 'Facebook',
    },
    {
      id: 3,
      questionText: 'What is the square root of 16?',
      imageUrl:
        'https://images.squarespace-cdn.com/content/v1/586ec16bb3db2b558ebfec60/694329ee-2cd8-4786-9406-77ca00f30b07/math-header.jpg',
      correctAnswer: '4',
    },
  ];