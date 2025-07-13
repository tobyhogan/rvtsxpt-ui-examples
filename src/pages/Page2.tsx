import { useDarkMode } from '../contexts/DarkModeContext'

function Page2() {
  const { isDarkMode } = useDarkMode()

  return (
    <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? 'bg-gray-900' : 'bg-blue-100'}`}>
      <div className={`max-w-md mx-auto rounded-xl shadow-md overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="p-8">
          <h1 className={`text-4xl font-bold text-center mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-800'}`}>
            Hello World 2
          </h1>
          <p className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            This is the second page! The background is blue to show the difference.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Page2
