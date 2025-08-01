/*
  # Schema para Quiz Concurso DIAN 2025

  1. New Tables
    - `quiz_attempts`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to auth.users)
      - `theme` (text) - Eje temático seleccionado
      - `total_questions` (integer) - Total de preguntas en el quiz
      - `correct_answers` (integer) - Respuestas correctas
      - `score_percentage` (integer) - Porcentaje de acierto
      - `time_taken` (integer) - Tiempo tomado en segundos
      - `answers` (jsonb) - Array con las respuestas del usuario
      - `completed_at` (timestamp)
      - `created_at` (timestamp)

    - `user_progress`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to auth.users)
      - `theme` (text) - Eje temático
      - `total_attempts` (integer) - Total de intentos
      - `best_score` (integer) - Mejor puntuación
      - `average_score` (decimal) - Puntuación promedio
      - `last_attempt_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users to manage their own data
</sql>

CREATE TABLE IF NOT EXISTS quiz_attempts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  theme text NOT NULL DEFAULT 'all',
  total_questions integer NOT NULL DEFAULT 0,
  correct_answers integer NOT NULL DEFAULT 0,
  score_percentage integer NOT NULL DEFAULT 0,
  time_taken integer NOT NULL DEFAULT 0,
  answers jsonb DEFAULT '[]'::jsonb,
  completed_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS user_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  theme text NOT NULL,
  total_attempts integer NOT NULL DEFAULT 0,
  best_score integer NOT NULL DEFAULT 0,
  average_score decimal(5,2) NOT NULL DEFAULT 0.00,
  last_attempt_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id, theme)
);

-- Enable Row Level Security
ALTER TABLE quiz_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

-- Policies for quiz_attempts
CREATE POLICY "Users can view own quiz attempts"
  ON quiz_attempts
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own quiz attempts"
  ON quiz_attempts
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own quiz attempts"
  ON quiz_attempts
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Policies for user_progress
CREATE POLICY "Users can view own progress"
  ON user_progress
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own progress"
  ON user_progress
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own progress"
  ON user_progress
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Indexes for better performance
CREATE INDEX IF NOT EXISTS idx_quiz_attempts_user_id ON quiz_attempts(user_id);
CREATE INDEX IF NOT EXISTS idx_quiz_attempts_theme ON quiz_attempts(theme);
CREATE INDEX IF NOT EXISTS idx_quiz_attempts_created_at ON quiz_attempts(created_at);
CREATE INDEX IF NOT EXISTS idx_user_progress_user_id ON user_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_theme ON user_progress(theme);