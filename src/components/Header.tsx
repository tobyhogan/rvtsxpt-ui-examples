import { Link, useLocation } from 'react-router-dom'
import { useDarkMode } from '../contexts/DarkModeContext'
import { useState } from 'react'

function Header() {
  const location = useLocation()
  const { isDarkMode, toggleDarkMode } = useDarkMode()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isActive = (path: string) => location.pathname === path

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`shadow-sm border-b ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
      <nav className="px-2 sm:px-4 ml-[2vw] md:ml-[60px] md:mr-[40px] lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center mr-2 sm:mr-4 md:mr-6">
              <Link to="/page1" className={`text-[20px] md:text-xl font-bold whitespace-nowrap ${isDarkMode ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-700'}`}>
                <span className="hidden sm:inline">UI Design Examples</span>
                <span className="sm:hidden">UI Examples</span>
              </Link>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden sm:ml-4 md:ml-6 lg:ml-9 sm:flex sm:space-x-2 md:space-x-4 lg:space-x-8 overflow-hidden">
              <Link
                to="/page1"
                className={`inline-flex items-center px-0.5 sm:px-1 pt-1 text-sm sm:text-[15px] md:text-[16px] font-medium whitespace-nowrap flex-shrink-0 ${
                  isActive('/page1')
                    ? isDarkMode ? 'text-blue-400 font-semibold' : 'text-blue-600 font-semibold'
                    : isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Designs 1
              </Link>
              <Link
                to="/page2"
                className={`inline-flex items-center px-0.5 sm:px-1 pt-1 text-sm sm:text-[15px] md:text-[16px] font-medium whitespace-nowrap flex-shrink-0 ${
                  isActive('/page2')
                    ? isDarkMode ? 'text-blue-400 font-semibold' : 'text-blue-600 font-semibold'
                    : isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Designs 2
              </Link>
            
              <Link
                to="/page3"
                className={`inline-flex items-center px-0.5 sm:px-1 pt-1 text-sm sm:text-[15px] md:text-[16px] font-medium whitespace-nowrap flex-shrink-0 ${
                  isActive('/page3')
                    ? isDarkMode ? 'text-blue-400 font-semibold' : 'text-blue-600 font-semibold'
                    : isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Duolingo
              </Link>

              <Link
                to="/page4"
                className={`inline-flex items-center px-0.5 sm:px-1 pt-1 text-sm sm:text-[15px] md:text-[16px] font-medium whitespace-nowrap flex-shrink-0 ${
                  isActive('/page4')
                    ? isDarkMode ? 'text-blue-400 font-semibold' : 'text-blue-600 font-semibold'
                    : isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Todoist
              </Link>

              <Link
                to="/page5"
                className={`inline-flex items-center px-0.5 sm:px-1 pt-1 text-sm sm:text-[15px] md:text-[16px] font-medium whitespace-nowrap flex-shrink-0 ${
                  isActive('/page5')
                    ? isDarkMode ? 'text-blue-400 font-semibold' : 'text-blue-600 font-semibold'
                    : isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Glassmorphism
              </Link>
              
            </div>
          </div>
          <div className="flex items-center">
            {/* Mobile menu button */}
            <div className="sm:hidden">
              <button
                onClick={toggleMobileMenu}
                className={`p-1.5 rounded-md ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-white hover:bg-gray-700' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-1.5 sm:p-2 rounded-md ml-1 sm:ml-2 ${
                isDarkMode 
                  ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden">
            <div className={`pt-2 pb-3 space-y-1 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <Link
                to="/page1"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 text-base font-medium whitespace-nowrap ${
                  isActive('/page1')
                    ? isDarkMode ? 'text-blue-400 bg-gray-700 font-semibold' : 'text-blue-600 bg-blue-50 font-semibold'
                    : isDarkMode ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                Designs 1
              </Link>
              <Link
                to="/page2"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 text-base font-medium whitespace-nowrap ${
                  isActive('/page2')
                    ? isDarkMode ? 'text-blue-400 bg-gray-700 font-semibold' : 'text-blue-600 bg-blue-50 font-semibold'
                    : isDarkMode ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                Designs 2
              </Link>
              <Link
                to="/page3"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 text-base font-medium whitespace-nowrap ${
                  isActive('/page3')
                    ? isDarkMode ? 'text-blue-400 bg-gray-700 font-semibold' : 'text-blue-600 bg-blue-50 font-semibold'
                    : isDarkMode ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                Duolingo
              </Link>
              <Link
                to="/page4"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 text-base font-medium whitespace-nowrap ${
                  isActive('/page4')
                    ? isDarkMode ? 'text-blue-400 bg-gray-700 font-semibold' : 'text-blue-600 bg-blue-50 font-semibold'
                    : isDarkMode ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                Todoist
              </Link>
              <Link
                to="/page5"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 text-base font-medium whitespace-nowrap ${
                  isActive('/page5')
                    ? isDarkMode ? 'text-blue-400 bg-gray-700 font-semibold' : 'text-blue-600 bg-blue-50 font-semibold'
                    : isDarkMode ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                Glassmorphism
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
