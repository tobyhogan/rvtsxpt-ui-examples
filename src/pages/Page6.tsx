import { useState } from 'react'
import { useDarkMode } from '../contexts/DarkModeContext'

function Page6() {
  const { isDarkMode } = useDarkMode()
  const [currentlyPlaying, setCurrentlyPlaying] = useState<number | null>(null)
  const [isLiked, setIsLiked] = useState<boolean[]>([false, false, false, false, false, false])

  const toggleLike = (index: number) => {
    const newLiked = [...isLiked]
    newLiked[index] = !newLiked[index]
    setIsLiked(newLiked)
  }

  const playTrack = (index: number) => {
    setCurrentlyPlaying(currentlyPlaying === index ? null : index)
  }

  const playlists = [
    { name: 'Liked Songs', count: '234 songs', image: '💚' },
    { name: 'My Playlist #1', count: '45 songs', image: '🎵' },
    { name: 'Discover Weekly', count: '30 songs', image: '📻' },
    { name: 'Release Radar', count: '28 songs', image: '🔥' },
    { name: 'Daily Mix 1', count: '50 songs', image: '🎯' },
    { name: 'Chill Vibes', count: '67 songs', image: '😌' },
  ]

  const recentTracks = [
    { title: 'Blinding Lights', artist: 'The Weeknd', album: 'After Hours', duration: '3:20' },
    { title: 'Good 4 U', artist: 'Olivia Rodrigo', album: 'Sour', duration: '2:58' },
    { title: 'Stay', artist: 'The Kid LAROI, Justin Bieber', album: 'F*CK LOVE 3', duration: '2:21' },
    { title: 'Industry Baby', artist: 'Lil Nas X, Jack Harlow', album: 'MONTERO', duration: '3:32' },
    { title: 'Heat Waves', artist: 'Glass Animals', album: 'Dreamland', duration: '3:58' },
    { title: 'Levitating', artist: 'Dua Lipa', album: 'Future Nostalgia', duration: '3:23' },
  ]

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Spotify-style layout */}
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className={`w-64 ${isDarkMode ? 'bg-black' : 'bg-white'} border-r ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} flex flex-col`}>
          {/* Logo */}
          <div className="p-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm">♪</span>
              </div>
              <span className="text-xl font-bold">Spotify</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="px-6 space-y-4">
            <div className="space-y-2">
              <a href="#" className={`flex items-center space-x-3 ${isDarkMode ? 'text-white hover:text-green-400' : 'text-gray-900 hover:text-green-600'} transition-colors`}>
                <span className="text-xl">🏠</span>
                <span className="font-medium">Home</span>
              </a>
              <a href="#" className={`flex items-center space-x-3 ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                <span className="text-xl">🔍</span>
                <span className="font-medium">Search</span>
              </a>
              <a href="#" className={`flex items-center space-x-3 ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                <span className="text-xl">📚</span>
                <span className="font-medium">Your Library</span>
              </a>
            </div>

            <div className="pt-4 space-y-2">
              <a href="#" className={`flex items-center space-x-3 ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                <span className="text-xl">➕</span>
                <span className="font-medium">Create Playlist</span>
              </a>
              <a href="#" className={`flex items-center space-x-3 ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                <span className="text-xl">💚</span>
                <span className="font-medium">Liked Songs</span>
              </a>
            </div>
          </nav>

          {/* Playlists */}
          <div className="flex-1 px-6 py-4 overflow-y-auto">
            <div className="space-y-1">
              {playlists.map((playlist, index) => (
                <div
                  key={index}
                  className={`p-2 rounded cursor-pointer ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-600 rounded flex items-center justify-center text-xl">
                      {playlist.image}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-medium truncate ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {playlist.name}
                      </p>
                      <p className={`text-xs truncate ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {playlist.count}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Top Bar */}
          <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} p-4`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button className={`p-2 rounded-full ${isDarkMode ? 'bg-black hover:bg-gray-800' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}>
                  <span className="text-lg">←</span>
                </button>
                <button className={`p-2 rounded-full ${isDarkMode ? 'bg-black hover:bg-gray-800' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}>
                  <span className="text-lg">→</span>
                </button>
              </div>
              <div className="flex items-center space-x-4">
                <button className="bg-green-500 hover:bg-green-600 text-black px-6 py-2 rounded-full font-medium transition-colors">
                  Upgrade
                </button>
                <div className={`w-8 h-8 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'} rounded-full flex items-center justify-center`}>
                  <span className="text-sm font-bold">U</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto p-8">
            <div className="max-w-7xl mx-auto">
              {/* Good Morning Section */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold mb-6">Good evening</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {playlists.slice(0, 6).map((playlist, index) => (
                    <div
                      key={index}
                      className={`${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} rounded-lg p-4 flex items-center space-x-4 cursor-pointer transition-colors group`}
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-2xl">
                        {playlist.image}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{playlist.name}</h3>
                      </div>
                      <button className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-black text-lg">▶</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recently Played */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6">Recently played</h2>
                <div className="space-y-2">
                  {recentTracks.map((track, index) => (
                    <div
                      key={index}
                      className={`${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} rounded-lg p-3 flex items-center space-x-4 group cursor-pointer transition-colors`}
                    >
                      <button
                        onClick={() => playTrack(index)}
                        className="w-10 h-10 bg-gray-600 rounded flex items-center justify-center hover:bg-gray-500 transition-colors"
                      >
                        <span className="text-white text-sm">
                          {currentlyPlaying === index ? '⏸' : '▶'}
                        </span>
                      </button>
                      <div className="flex-1 min-w-0">
                        <p className={`font-medium truncate ${currentlyPlaying === index ? 'text-green-400' : isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {track.title}
                        </p>
                        <p className={`text-sm truncate ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {track.artist} • {track.album}
                        </p>
                      </div>
                      <button
                        onClick={() => toggleLike(index)}
                        className={`opacity-0 group-hover:opacity-100 transition-opacity ${isLiked[index] ? 'text-green-400' : isDarkMode ? 'text-gray-400' : 'text-gray-600'} hover:text-green-400`}
                      >
                        <span className="text-lg">{isLiked[index] ? '💚' : '🤍'}</span>
                      </button>
                      <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} opacity-0 group-hover:opacity-100 transition-opacity`}>
                        {track.duration}
                      </span>
                      <button className={`opacity-0 group-hover:opacity-100 transition-opacity ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                        <span className="text-lg">⋯</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Player Bar */}
      <div className={`${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border-t px-4 py-3`}>
        <div className="flex items-center justify-between">
          {/* Current Track */}
          <div className="flex items-center space-x-3 w-1/4">
            <div className="w-14 h-14 bg-gray-600 rounded flex items-center justify-center">
              <span className="text-xl">🎵</span>
            </div>
            <div className="min-w-0">
              <p className={`font-medium text-sm truncate ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {currentlyPlaying !== null ? recentTracks[currentlyPlaying].title : 'Select a song'}
              </p>
              <p className={`text-xs truncate ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {currentlyPlaying !== null ? recentTracks[currentlyPlaying].artist : ''}
              </p>
            </div>
            <button className={`${isDarkMode ? 'text-gray-400 hover:text-green-400' : 'text-gray-600 hover:text-green-600'} transition-colors`}>
              <span className="text-lg">🤍</span>
            </button>
          </div>

          {/* Player Controls */}
          <div className="flex flex-col items-center space-y-2 w-1/2">
            <div className="flex items-center space-x-4">
              <button className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                <span className="text-lg">🔀</span>
              </button>
              <button className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                <span className="text-xl">⏮</span>
              </button>
              <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                <span className="text-black text-lg">{currentlyPlaying !== null ? '⏸' : '▶'}</span>
              </button>
              <button className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                <span className="text-xl">⏭</span>
              </button>
              <button className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                <span className="text-lg">🔁</span>
              </button>
            </div>
            <div className="flex items-center space-x-2 w-full max-w-md">
              <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>1:23</span>
              <div className={`flex-1 h-1 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'} rounded-full overflow-hidden`}>
                <div className="w-1/3 h-full bg-white rounded-full"></div>
              </div>
              <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>3:45</span>
            </div>
          </div>

          {/* Volume and Options */}
          <div className="flex items-center space-x-3 w-1/4 justify-end">
            <button className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors text-sm`}>
              📋
            </button>
            <button className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors text-sm`}>
              🖥
            </button>
            <div className="flex items-center space-x-2">
              <button className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors text-sm`}>
                🔊
              </button>
              <div className={`w-20 h-1 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'} rounded-full overflow-hidden`}>
                <div className="w-2/3 h-full bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page6