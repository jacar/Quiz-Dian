import React, { useState } from 'react'
import { User, LogOut, Settings, BarChart3, History } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import StatsModal from './StatsModal'

const UserMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showStats, setShowStats] = useState(false)
  const { user, signOut } = useAuth()

  const handleSignOut = async () => {
    await signOut()
    setIsOpen(false)
  }

  if (!user) return null

  return (
    <>
      <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-4 py-2 text-white hover:bg-opacity-20 transition-all duration-300"
      >
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
          <User className="h-4 w-4 text-white" />
        </div>
        <span className="hidden md:block font-medium">
          {user.user_metadata?.full_name || user.email?.split('@')[0]}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 z-50">
          <div className="px-4 py-3 border-b border-gray-100">
            <p className="text-sm font-medium text-gray-900">
              {user.user_metadata?.full_name || 'Usuario'}
            </p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
          
          <div className="py-2">
            <button 
              onClick={() => {
                setShowStats(true);
                setIsOpen(false);
              }}
              className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 flex items-center space-x-3 transition-colors"
            >
              <BarChart3 className="h-4 w-4" />
              <span>Mi Progreso</span>
            </button>
            <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 flex items-center space-x-3 transition-colors">
              <History className="h-4 w-4" />
              <span>Historial</span>
            </button>
            <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 flex items-center space-x-3 transition-colors">
              <Settings className="h-4 w-4" />
              <span>Configuración</span>
            </button>
          </div>

          <div className="border-t border-gray-100 py-2">
            <button
              onClick={handleSignOut}
              className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-50 flex items-center space-x-3 transition-colors"
            >
              <LogOut className="h-4 w-4" />
              <span>Cerrar Sesión</span>
            </button>
          </div>
        </div>
      )}
      </div>
      
      <StatsModal 
        isOpen={showStats} 
        onClose={() => setShowStats(false)} 
      />
    </>
  )
}

export default UserMenu