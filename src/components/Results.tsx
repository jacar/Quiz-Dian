import React from 'react';
import { Trophy, RotateCcw, Home, CheckCircle2, XCircle, BarChart3 } from 'lucide-react';
import { QuestionType } from '../data/questions';

interface ResultsProps {
  score: number;
  totalQuestions: number;
  answers: number[];
  questions: QuestionType[];
  onRestart: () => void;
  onBackToHome: () => void;
  timeTaken?: number;
}

const Results: React.FC<ResultsProps> = ({
  score,
  totalQuestions,
  answers,
  questions,
  onRestart,
  onBackToHome
  timeTaken = 0
}) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getGradeColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getGradeMessage = (percentage: number) => {
    if (percentage >= 90) return '¡Excelente! Estás muy bien preparado';
    if (percentage >= 80) return '¡Muy bien! Buen nivel de preparación';
    if (percentage >= 70) return 'Bien, pero necesitas repasar algunos temas';
    if (percentage >= 60) return 'Regular, requiere más estudio';
    return 'Necesitas estudiar más los temas evaluados';
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    if (hours > 0) {
      return `${hours}h ${minutes}m ${secs}s`;
    } else if (minutes > 0) {
      return `${minutes}m ${secs}s`;
    } else {
      return `${secs}s`;
    }
  };
  // Calculate results by theme
  const resultsByTheme = questions.reduce((acc, question, index) => {
    const theme = question.theme;
    if (!acc[theme]) {
      acc[theme] = { correct: 0, total: 0 };
    }
    acc[theme].total++;
    if (answers[index] === question.correctAnswer) {
      acc[theme].correct++;
    }
    return acc;
  }, {} as Record<string, { correct: number; total: number }>);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Main Results Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 text-center">
          <div className="mb-6">
            <Trophy className={`h-20 w-20 mx-auto mb-4 ${getGradeColor(percentage)}`} />
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Resultados del Quiz
            </h1>
            <p className="text-gray-600">Quiz Concurso DIAN 2025</p>
          </div>

          {/* Score Display */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-6">
            <div className="text-6xl font-bold mb-2">
              <span className={getGradeColor(percentage)}>{percentage}%</span>
            </div>
            <div className="text-2xl text-gray-700 mb-2">
              {score} de {totalQuestions} respuestas correctas
            </div>
            <div className={`text-lg font-medium ${getGradeColor(percentage)}`}>
              {getGradeMessage(percentage)}
            </div>
            {timeTaken > 0 && (
              <div className="text-gray-600 mt-2">
                <span className="font-medium">Tiempo empleado:</span> {formatTime(timeTaken)}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={onRestart}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 
                       transition-colors flex items-center space-x-2"
            >
              <RotateCcw className="h-5 w-5" />
              <span>Reiniciar Quiz</span>
            </button>
            <button
              onClick={onBackToHome}
              className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 
                       transition-colors flex items-center space-x-2"
            >
              <Home className="h-5 w-5" />
              <span>Volver al Inicio</span>
            </button>
          </div>
        </div>

        {/* Results by Theme */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <BarChart3 className="h-6 w-6 mr-2" />
            Resultados por Eje Temático
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(resultsByTheme).map(([theme, result]) => {
              const themePercentage = Math.round((result.correct / result.total) * 100);
              return (
                <div key={theme} className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 capitalize mb-2">
                    {theme}
                  </h3>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">
                      {result.correct}/{result.total}
                    </span>
                    <span className={`font-bold ${getGradeColor(themePercentage)}`}>
                      {themePercentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        themePercentage >= 80 ? 'bg-green-500' :
                        themePercentage >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${themePercentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Review */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Revisión Detallada
          </h2>
          <div className="space-y-6">
            {questions.map((question, index) => {
              const isCorrect = answers[index] === question.correctAnswer;
              const userAnswer = answers[index];
              
              return (
                <div key={index} className={`border-l-4 pl-4 py-2 ${
                  isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'
                }`}>
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600 uppercase">
                      {question.theme} - Pregunta {index + 1}
                    </span>
                    {isCorrect ? (
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-600" />
                    )}
                  </div>
                  <p className="text-gray-800 mb-2">{question.question}</p>
                  <div className="text-sm">
                    <div className="mb-1">
                      <span className="font-medium">Tu respuesta: </span>
                      <span className={isCorrect ? 'text-green-600' : 'text-red-600'}>
                        {question.options[userAnswer]}
                      </span>
                    </div>
                    {!isCorrect && (
                      <div>
                        <span className="font-medium">Respuesta correcta: </span>
                        <span className="text-green-600">
                          {question.options[question.correctAnswer]}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;