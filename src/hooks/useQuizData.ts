import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { useAuth } from '../contexts/AuthContext'

export interface QuizAttempt {
  id: string
  user_id: string
  theme: string
  total_questions: number
  correct_answers: number
  score_percentage: number
  time_taken: number
  answers: number[]
  completed_at: string
  created_at: string
}

export interface UserProgress {
  id: string
  user_id: string
  theme: string
  total_attempts: number
  best_score: number
  average_score: number
  last_attempt_at: string
  updated_at: string
}

export const useQuizData = () => {
  const { user } = useAuth()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const saveQuizAttempt = async (
    theme: string,
    totalQuestions: number,
    correctAnswers: number,
    timeTaken: number,
    answers: number[]
  ) => {
    if (!user) return { error: 'Usuario no autenticado' }

    setLoading(true)
    setError(null)

    try {
      const scorePercentage = Math.round((correctAnswers / totalQuestions) * 100)

      // Guardar intento de quiz
      const { error: attemptError } = await supabase
        .from('quiz_attempts')
        .insert({
          user_id: user.id,
          theme,
          total_questions: totalQuestions,
          correct_answers: correctAnswers,
          score_percentage: scorePercentage,
          time_taken: timeTaken,
          answers
        })

      if (attemptError) throw attemptError

      // Actualizar progreso del usuario
      await updateUserProgress(theme, scorePercentage)

      return { success: true }
    } catch (err: any) {
      const errorMessage = err.message || 'Error al guardar el intento'
      setError(errorMessage)
      return { error: errorMessage }
    } finally {
      setLoading(false)
    }
  }

  const updateUserProgress = async (theme: string, newScore: number) => {
    if (!user) return

    try {
      // Obtener progreso actual
      const { data: currentProgress } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', user.id)
        .eq('theme', theme)
        .single()

      if (currentProgress) {
        // Actualizar progreso existente
        const newTotalAttempts = currentProgress.total_attempts + 1
        const newBestScore = Math.max(currentProgress.best_score, newScore)
        const newAverageScore = 
          (currentProgress.average_score * currentProgress.total_attempts + newScore) / newTotalAttempts

        await supabase
          .from('user_progress')
          .update({
            total_attempts: newTotalAttempts,
            best_score: newBestScore,
            average_score: newAverageScore,
            last_attempt_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          })
          .eq('user_id', user.id)
          .eq('theme', theme)
      } else {
        // Crear nuevo progreso
        await supabase
          .from('user_progress')
          .insert({
            user_id: user.id,
            theme,
            total_attempts: 1,
            best_score: newScore,
            average_score: newScore,
            last_attempt_at: new Date().toISOString()
          })
      }
    } catch (err) {
      console.error('Error updating user progress:', err)
    }
  }

  const getUserProgress = async () => {
    if (!user) return { data: null, error: 'Usuario no autenticado' }

    setLoading(true)
    setError(null)

    try {
      const { data, error } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', user.id)
        .order('updated_at', { ascending: false })

      if (error) throw error

      return { data, error: null }
    } catch (err: any) {
      const errorMessage = err.message || 'Error al obtener progreso'
      setError(errorMessage)
      return { data: null, error: errorMessage }
    } finally {
      setLoading(false)
    }
  }

  const getQuizHistory = async (limit = 10) => {
    if (!user) return { data: null, error: 'Usuario no autenticado' }

    setLoading(true)
    setError(null)

    try {
      const { data, error } = await supabase
        .from('quiz_attempts')
        .select('*')
        .eq('user_id', user.id)
        .order('completed_at', { ascending: false })
        .limit(limit)

      if (error) throw error

      return { data, error: null }
    } catch (err: any) {
      const errorMessage = err.message || 'Error al obtener historial'
      setError(errorMessage)
      return { data: null, error: errorMessage }
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    error,
    saveQuizAttempt,
    getUserProgress,
    getQuizHistory
  }
}