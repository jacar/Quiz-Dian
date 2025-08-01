import React, { useState, useEffect } from 'react'
import { X, TrendingUp, Target, Clock, Award, BarChart3 } from 'lucide-react'
import { useQuizData, UserProgress, QuizAttempt } from '../hooks/useQuizData'
import { useAuth } from '../contexts/AuthContext'

interface StatsModalProps {
  isOpen: boolean
  onClose: () => void
}

const StatsModal: React.FC<StatsModalProps> = ({ isOpen, onClose }) => {
  const [progress, setProgress] = useState<UserProgress[]>([])
  const [history, setHistory] = useState<QuizAttempt[]>([])
  const [loading, setLoading] = useState(true)
  const { getUserProgress, getQuizHistory } = useQuizData()
  const { user } = useAuth()

  useEffect(() => {
    if (isOpen && user) {
      loadData()
    }
  }, [isOpen, user])

  const loadData = async () => {
    setLoading(true)
    try {
      const [progressResult, historyResult] = await Promise.all([
        getUserProgress(),
        getQuizHistory(5)
      ])
      
      if (progressResult.data) setProgress(progressResult.data)
      if (historyResult.data) setHistory(historyResult.data)
    } catch (error) {
      console.error('Error loading stats:', error)
    } finally {
      setLoading(false)
    }
  }

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    if (hours > 0) {
      return `${hours}h ${minutes}m`
    } else if (minutes > 0) {
      return `${minutes}m`
    } else {
      return `${seconds}s`
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getThemeDisplayName = (theme: string) => {
    const themeNames: Record<string, string> = {
      'all': 'Todos los temas',
      'tributario': 'Tributario',
      'aduanero': 'Aduanero',
      'procedimiento': 'Procedimiento Tributario',
      'sancionatorio': 'Régimen Sancionatorio',
      'comercial': 'Código de Comercio',
      'constitucional': 'Derecho Constitucional'
    }
    return themeNames[theme] || theme
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 bg-green-100'
    if (score >= 60) return 'text-yellow-600 bg-yellow-100'
    return 'text-red-600 bg-red-100'
  }

  const totalAttempts = progress.reduce((sum, p) => sum + p.total_attempts, 0)
  const overallAverage = progress.length > 0 
    ? progress.reduce((sum, p) => sum + p.average_score * p.total_attempts, 0) / totalAttempts
    : 0

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <BarChart3 className="h-8 w-8 text-white" />
              <div>
                <h2 className="text-2xl font-bold text-white">Mi Progreso</h2>
                <p className="text-blue-100">Estadísticas y rendimiento</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-blue-200 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              <span className="ml-3 text-gray-600">Cargando estadísticas...</span>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Overall Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <Target className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-600">{totalAttempts}</div>
                  <div className="text-sm text-gray-600">Intentos Totales</div>
                </div>
                <div className="bg-green-50 rounded-xl p-4 text-center">
                  <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">
                    {overallAverage.toFixed(1)}%
                  </div>
                  <div className="text-sm text-gray-600">Promedio General</div>
                </div>
                <div className="bg-yellow-50 rounded-xl p-4 text-center">
                  <Award className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-yellow-600">
                    {progress.length > 0 ? Math.max(...progress.map(p => p.best_score)) : 0}%
                  </div>
                  <div className="text-sm text-gray-600">Mejor Puntuación</div>
                </div>
                <div className="bg-purple-50 rounded-xl p-4 text-center">
                  <Clock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-600">{progress.length}</div>
                  <div className="text-sm text-gray-600">Temas Practicados</div>
                </div>
              </div>

              {/* Progress by Theme */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Progreso por Eje Temático</h3>
                <div className="space-y-3">
                  {progress.map((item) => (
                    <div key={item.id} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-800">
                          {getThemeDisplayName(item.theme)}
                        </h4>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getScoreColor(item.best_score)}`}>
                            Mejor: {item.best_score}%
                          </span>
                          <span className="text-sm text-gray-600">
                            {item.total_attempts} intentos
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                        <span>Promedio: {item.average_score.toFixed(1)}%</span>
                        <span>Último: {formatDate(item.last_attempt_at)}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            item.average_score >= 80 ? 'bg-green-500' :
                            item.average_score >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${item.average_score}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent History */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Historial Reciente</h3>
                <div className="space-y-3">
                  {history.map((attempt) => (
                    <div key={attempt.id} className="bg-white border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="font-semibold text-gray-800">
                            {getThemeDisplayName(attempt.theme)}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {formatDate(attempt.completed_at)}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className={`text-lg font-bold ${
                            attempt.score_percentage >= 80 ? 'text-green-600' :
                            attempt.score_percentage >= 60 ? 'text-yellow-600' : 'text-red-600'
                          }`}>
                            {attempt.score_percentage}%
                          </div>
                          <div className="text-sm text-gray-600">
                            {attempt.correct_answers}/{attempt.total_questions}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>Tiempo: {formatTime(attempt.time_taken)}</span>
                        <span className={`px-2 py-1 rounded-full text-xs ${getScoreColor(attempt.score_percentage)}`}>
                          {attempt.score_percentage >= 80 ? 'Excelente' :
                           attempt.score_percentage >= 60 ? 'Bueno' : 'Necesita mejorar'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {progress.length === 0 && (
                <div className="text-center py-12">
                  <BarChart3 className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">
                    No hay estadísticas aún
                  </h3>
                  <p className="text-gray-500">
                    Completa tu primer quiz para ver tu progreso aquí
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default StatsModal