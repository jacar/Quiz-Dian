import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, BookOpen, Target, Trophy } from 'lucide-react';
import { User } from '@supabase/supabase-js';

interface HeroSliderProps {
  onStartQuiz: () => void;
  user: User | null;
}

const slides = [
  {
    title: "Quiz Concurso DIAN 2025",
    subtitle: "Prepárate para el concurso con 160 preguntas reales",
    description: "Practica con preguntas casuísticas y generales basadas en el temario oficial del concurso DIAN 2025",
    icon: BookOpen,
    bgColor: "from-blue-600 to-blue-800"
  },
  {
    title: "Ejes Temáticos Completos",
    subtitle: "Tributario, Aduanero, Procedimiento y más",
    description: "Preguntas organizadas por ejes temáticos para un estudio estructurado y efectivo",
    icon: Target,
    bgColor: "from-indigo-600 to-purple-700"
  },
  {
    title: "Sistema Inteligente",
    subtitle: "Respuestas aleatorias y seguimiento de progreso",
    description: "La posición de las respuestas correctas cambia aleatoriamente para mejorar tu aprendizaje",
    icon: Trophy,
    bgColor: "from-purple-600 to-pink-700"
  }
];

const HeroSlider: React.FC<HeroSliderProps> = ({ onStartQuiz, user }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
        <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].bgColor} opacity-90`} />
        <div className="absolute inset-0 bg-black opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="mb-8 transform transition-all duration-700 ease-out">
          {React.createElement(slides[currentSlide].icon, { 
            className: "h-20 w-20 mx-auto mb-6 animate-pulse" 
          })}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
            {slides[currentSlide].title}
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-100">
            {slides[currentSlide].subtitle}
          </h2>
          <p className="text-lg md:text-xl text-blue-50 leading-relaxed max-w-2xl mx-auto">
            {slides[currentSlide].description}
          </p>
        </div>

        {/* CTA Button */}
        <button
          onClick={onStartQuiz}
          className="bg-white text-blue-600 px-8 py-4 rounded-full text-xl font-bold 
                   hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 
                   shadow-2xl hover:shadow-3xl flex items-center space-x-3 mx-auto"
        >
          <Play className="h-6 w-6" />
          <span>Comenzar Quiz</span>
        </button>

        {user && (
          <div className="mt-4 text-center">
            <p className="text-blue-100">
              ¡Bienvenido de vuelta, {user.user_metadata?.full_name || user.email?.split('@')[0]}!
            </p>
          </div>
        )}

        {/* Instructions */}
        <div className="mt-12 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold mb-4">¿Cómo usar la aplicación?</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <div className="font-semibold mb-2">📚 Estudia por temas</div>
              <div>Preguntas organizadas por ejes temáticos del concurso DIAN</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <div className="font-semibold mb-2">🎯 Respuestas aleatorias</div>
              <div>Las opciones se mezclan para evitar memorización mecánica</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <div className="font-semibold mb-2">⏱️ Simulacro real</div>
              <div>Practica con tiempo límite como en el concurso oficial</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <div className="font-semibold mb-2">📊 Seguimiento</div>
              <div>Revisa tu progreso y áreas de mejora</div>
            </div>
          </div>
        </div>

        {!user && (
          <div className="mt-8 bg-yellow-500 bg-opacity-20 backdrop-blur-sm rounded-xl p-4 max-w-lg mx-auto">
            <p className="text-yellow-100 text-center">
              💡 <strong>Tip:</strong> Regístrate para guardar tu progreso y acceder a estadísticas detalladas
            </p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-200 
                 transition-colors duration-300 z-20"
      >
        <ChevronLeft className="h-12 w-12" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-200 
                 transition-colors duration-300 z-20"
      >
        <ChevronRight className="h-12 w-12" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;