import React from 'react';
import { Github, Globe, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-lg">Desarrollado con</span>
            <Heart className="h-5 w-5 text-red-500 animate-pulse" />
            <span className="text-lg">por</span>
          </div>
          
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-blue-400 mb-2">
              Armando Ovalle J.
            </h3>
            <p className="text-gray-300">
              Desarrollador Full Stack especializado en aplicaciones educativas
            </p>
          </div>

          <div className="flex items-center justify-center space-x-6 mb-6">
            <a
              href="https://github.com/jacar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.armandomi.space/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Globe className="h-5 w-5" />
              <span>Portfolio</span>
            </a>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 text-sm">
              © 2025 Quiz Concurso DIAN. Esta aplicación es una herramienta de estudio 
              independiente y no está oficialmente afiliada a la DIAN.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Las preguntas están basadas en el temario oficial del concurso DIAN 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;