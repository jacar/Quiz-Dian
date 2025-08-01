import React, { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import HeroSlider from './components/HeroSlider';
import Quiz from './components/Quiz';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import UserMenu from './components/UserMenu';
import { BookOpen, LogIn, UserPlus } from 'lucide-react';

function AppContent() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const { user, loading } = useAuth();

  const handleShowLogin = () => {
    setAuthMode('login');
    setShowAuthModal(true);
  };

  const handleShowRegister = () => {
    setAuthMode('register');
    setShowAuthModal(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-blue-600">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-800">Quiz Concurso DIAN 2025</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              {user ? (
                <UserMenu />
              ) : (
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleShowLogin}
                    className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <LogIn className="h-4 w-4" />
                    <span>Iniciar Sesión</span>
                  </button>
                  <button
                    onClick={handleShowRegister}
                    className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <UserPlus className="h-4 w-4" />
                    <span>Registrarse</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {!showQuiz ? (
          <HeroSlider onStartQuiz={() => setShowQuiz(true)} user={user} />
        ) : (
          <Quiz onBackToHome={() => setShowQuiz(false)} />
        )}
      </main>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        initialMode={authMode}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;