import React, { useState, useEffect } from 'react';
import { QuestionType } from '../data/questions';

interface QuestionCardProps {
  question: QuestionType;
  selectedAnswer: number | null;
  onAnswerSelect: (answerIndex: number) => void;
  questionNumber: number;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswer,
  onAnswerSelect,
  questionNumber
}) => {
  const [shuffledOptions, setShuffledOptions] = useState<{text: string, originalIndex: number}[]>([]);

  useEffect(() => {
    // Shuffle options while keeping track of original indices
    const optionsWithIndex = question.options.map((option, index) => ({
      text: option,
      originalIndex: index
    }));
    
    // Simple shuffle algorithm
    const shuffled = [...optionsWithIndex];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    setShuffledOptions(shuffled);
  }, [question]);

  const getOptionLetter = (index: number) => {
    return String.fromCharCode(65 + index); // A, B, C, D
  };

  const themeColors = {
    tributario: 'from-blue-500 to-blue-600',
    aduanero: 'from-green-500 to-green-600',
    procedimiento: 'from-purple-500 to-purple-600',
    sancionatorio: 'from-red-500 to-red-600',
    comercial: 'from-orange-500 to-orange-600',
    constitucional: 'from-indigo-500 to-indigo-600'
  };

  const themeColor = themeColors[question.theme as keyof typeof themeColors] || 'from-gray-500 to-gray-600';

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Theme Header */}
      <div className={`bg-gradient-to-r ${themeColor} p-4`}>
        <div className="flex items-center justify-between text-white">
          <span className="text-sm font-medium uppercase tracking-wide">
            {question.theme.charAt(0).toUpperCase() + question.theme.slice(1)}
          </span>
          <span className="text-sm font-medium">
            Pregunta #{questionNumber}
          </span>
        </div>
      </div>

      {/* Question Content */}
      <div className="p-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-6 leading-relaxed">
          {question.question}
        </h2>

        {/* Options */}
        <div className="space-y-4">
          {shuffledOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => onAnswerSelect(option.originalIndex)}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 
                       hover:shadow-md transform hover:-translate-y-1 ${
                selectedAnswer === option.originalIndex
                  ? 'border-blue-500 bg-blue-50 shadow-lg'
                  : 'border-gray-200 bg-gray-50 hover:border-blue-300 hover:bg-blue-25'
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${
                  selectedAnswer === option.originalIndex
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-300 text-gray-700'
                }`}>
                  {getOptionLetter(index)}
                </div>
                <span className="text-gray-800 leading-relaxed flex-1">
                  {option.text}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Question Type Indicator */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
            question.type === 'casuistica' 
              ? 'bg-orange-100 text-orange-800' 
              : 'bg-blue-100 text-blue-800'
          }`}>
            {question.type === 'casuistica' ? 'Pregunta Casuística' : 'Pregunta General'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;