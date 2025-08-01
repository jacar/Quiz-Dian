import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, CheckCircle2, XCircle, BarChart3 } from 'lucide-react';
import { questions, QuestionType } from '../data/questions';
import QuestionCard from './QuestionCard';
import Results from './Results';
import { useQuizData } from '../hooks/useQuizData';
import { useAuth } from '../contexts/AuthContext';

interface QuizProps {
  onBackToHome: () => void;
}

const Quiz: React.FC<QuizProps> = ({ onBackToHome }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(7200); // 2 hours in seconds
  const [isFinished, setIsFinished] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState<string>('all');
  const [startTime, setStartTime] = useState<number>(Date.now());
  const { user } = useAuth();
  const { saveQuizAttempt, loading: savingQuiz } = useQuizData();

  const themes = [
    'all',
    'tributario',
    'aduanero',
    'procedimiento',
    'sancionatorio',
    'comercial',
    'constitucional'
  ];

  const filteredQuestions = selectedTheme === 'all' 
    ? questions 
    : questions.filter(q => q.theme === selectedTheme);

  useEffect(() => {
    if (!isFinished && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setIsFinished(true);
    }
  }, [timeLeft, isFinished]);

  useEffect(() => {
    // Reset start time when quiz starts or theme changes
    setStartTime(Date.now());
  }, [selectedTheme]);
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = selectedAnswer;
      setAnswers(newAnswers);
      setSelectedAnswer(null);

      if (currentQuestion < filteredQuestions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
      } else {
        finishQuiz(newAnswers);
      }
    }
  };

  const finishQuiz = async (finalAnswers: number[]) => {
    const timeTaken = Math.floor((Date.now() - startTime) / 1000);
    const score = calculateScore(finalAnswers);
    
    // Save quiz attempt if user is logged in
    if (user) {
      await saveQuizAttempt(
        selectedTheme,
        filteredQuestions.length,
        score,
        timeTaken,
        finalAnswers
      );
    }
    
    setIsFinished(true);
  };
  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setSelectedAnswer(answers[currentQuestion - 1] || null);
    }
  };

  const calculateScore = (answersToCheck = answers) => {
    return answersToCheck.reduce((score, answer, index) => {
      return score + (answer === filteredQuestions[index].correctAnswer ? 1 : 0);
    }, 0);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setShowResult(false);
    setTimeLeft(7200);
    setIsFinished(false);
    setStartTime(Date.now());
  };

  if (isFinished || showResult) {
    return (
      <Results
        score={calculateScore()}
        totalQuestions={filteredQuestions.length}
        answers={answers}
        questions={filteredQuestions}
        onRestart={resetQuiz}
        onBackToHome={onBackToHome}
        timeTaken={Math.floor((Date.now() - startTime) / 1000)}
      />
    );
  }

  if (filteredQuestions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">No hay preguntas disponibles para este tema</p>
          <button
            onClick={onBackToHome}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={onBackToHome}
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Volver al inicio</span>
            </button>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-red-600">
                <Clock className="h-5 w-5" />
                <span className="font-mono text-lg">{formatTime(timeLeft)}</span>
              </div>
            </div>
          </div>

          {/* Theme Selector */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Eje Temático:
            </label>
            <select
              value={selectedTheme}
              onChange={(e) => {
                setSelectedTheme(e.target.value);
                resetQuiz();
              }}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">Todos los temas (160 preguntas)</option>
              <option value="tributario">Tributario</option>
              <option value="aduanero">Aduanero</option>
              <option value="procedimiento">Procedimiento Tributario</option>
              <option value="sancionatorio">Régimen Sancionatorio</option>
              <option value="comercial">Código de Comercio</option>
              <option value="constitucional">Derecho Constitucional</option>
            </select>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <div
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-300"
              style={{
                width: `${((currentQuestion + 1) / filteredQuestions.length) * 100}%`
              }}
            ></div>
          </div>

          <div className="flex justify-between text-sm text-gray-600">
            <span>Pregunta {currentQuestion + 1} de {filteredQuestions.length}</span>
            <span>Respondidas: {answers.filter(a => a !== undefined).length}</span>
          </div>
        </div>

        {/* Question Card */}
        <QuestionCard
          question={filteredQuestions[currentQuestion]}
          selectedAnswer={selectedAnswer}
          onAnswerSelect={handleAnswerSelect}
          questionNumber={currentQuestion + 1}
        />

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <button
            onClick={handlePrevQuestion}
            disabled={currentQuestion === 0}
            className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 
                     disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors 
                     flex items-center space-x-2"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Anterior</span>
          </button>

          <button
            onClick={handleNextQuestion}
            disabled={selectedAnswer === null}
            className={`bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 
                     disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors
                     flex items-center space-x-2 ${savingQuiz ? 'opacity-50' : ''}`}
          >
            {savingQuiz && currentQuestion === filteredQuestions.length - 1 ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Guardando...</span>
              </div>
            ) : (
              <span>
                {currentQuestion === filteredQuestions.length - 1 ? 'Finalizar' : 'Siguiente'}
              </span>
            )}
            {currentQuestion !== filteredQuestions.length - 1 && (
              <ArrowLeft className="h-5 w-5 rotate-180" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;