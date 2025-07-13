import { Link, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="bg-white shadow-sm border-b">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-bold text-gray-900">My App</h1>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  isActive('/')
                    ? 'text-blue-600 font-semibold'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Modern 1
              </Link>
              <Link
                to="/second"
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  isActive('/second')
                    ? 'text-blue-600 font-semibold'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Duolingo-esque
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
