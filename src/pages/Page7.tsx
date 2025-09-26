import { useState } from 'react'
import { useDarkMode } from '../contexts/DarkModeContext'

function Page7() {
  const { isDarkMode } = useDarkMode()
  const [isConnected, setIsConnected] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState('United States')
  const [selectedProtocol, setSelectedProtocol] = useState('WireGuard')
  const [showCountryList, setShowCountryList] = useState(false)

  const countries = [
    { name: 'United States', flag: '🇺🇸', servers: 1547, load: 23 },
    { name: 'Netherlands', flag: '🇳🇱', servers: 234, load: 12 },
    { name: 'Switzerland', flag: '🇨🇭', servers: 189, load: 8 },
    { name: 'Germany', flag: '🇩🇪', servers: 312, load: 34 },
    { name: 'Japan', flag: '🇯🇵', servers: 145, load: 19 },
    { name: 'United Kingdom', flag: '🇬🇧', servers: 298, load: 28 },
    { name: 'Canada', flag: '🇨🇦', servers: 167, load: 15 },
    { name: 'Australia', flag: '🇦🇺', servers: 98, load: 21 },
  ]

  const protocols = ['WireGuard', 'OpenVPN UDP', 'OpenVPN TCP', 'IKEv2']

  const toggleConnection = () => {
    setIsConnected(!isConnected)
  }

  const features = [
    { icon: '🛡️', title: 'Kill Switch', description: 'Blocks internet if VPN drops', active: true },
    { icon: '🚫', title: 'Ad-blocker', description: 'NetShield blocks ads & trackers', active: true },
    { icon: '🔒', title: 'Secure Core', description: 'Route traffic through multiple servers', active: false },
    { icon: '🌐', title: 'Tor over VPN', description: 'Access .onion sites securely', active: false },
  ]

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold">ProtonVPN</h1>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                High-speed Swiss VPN that safeguards your privacy
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className={`px-3 py-1 rounded-full text-xs font-medium ${isDarkMode ? 'bg-green-900 text-green-400' : 'bg-green-100 text-green-800'}`}>
              PLUS
            </div>
            <button className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'} transition-colors`}>
              <span className="text-xl">⚙️</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Connection Panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* Connection Status */}
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-sm`}>
              <div className="text-center">
                <div className="mb-6">
                  <div className={`w-32 h-32 mx-auto rounded-full border-4 ${isConnected ? 'border-green-400 bg-green-50' : isDarkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300 bg-gray-100'} flex items-center justify-center transition-all duration-300`}>
                    <div className={`w-20 h-20 rounded-full ${isConnected ? 'bg-green-400' : isDarkMode ? 'bg-gray-600' : 'bg-gray-300'} flex items-center justify-center transition-all duration-300`}>
                      <span className={`text-2xl ${isConnected ? 'text-white' : isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {isConnected ? '🔒' : '🔓'}
                      </span>
                    </div>
                  </div>
                </div>
                
                <h2 className={`text-2xl font-bold mb-2 ${isConnected ? 'text-green-400' : isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {isConnected ? 'Protected' : 'Not Protected'}
                </h2>
                
                <p className={`text-sm mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {isConnected 
                    ? `Connected to ${selectedCountry} • Your connection is secure`
                    : 'Your real IP address is exposed'
                  }
                </p>

                <button
                  onClick={toggleConnection}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 ${
                    isConnected 
                      ? 'bg-red-500 hover:bg-red-600 text-white' 
                      : 'bg-purple-600 hover:bg-purple-700 text-white'
                  }`}
                >
                  {isConnected ? 'Disconnect' : 'Quick Connect'}
                </button>
              </div>
            </div>

            {/* Connection Details */}
            {isConnected && (
              <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-sm`}>
                <h3 className="text-lg font-semibold mb-4">Connection Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Server</p>
                    <p className="font-medium">{selectedCountry} #1</p>
                  </div>
                  <div>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Protocol</p>
                    <p className="font-medium">{selectedProtocol}</p>
                  </div>
                  <div>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Server Load</p>
                    <p className="font-medium text-green-500">
                      {countries.find(c => c.name === selectedCountry)?.load}%
                    </p>
                  </div>
                  <div>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Session Time</p>
                    <p className="font-medium">00:23:45</p>
                  </div>
                  <div>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Downloaded</p>
                    <p className="font-medium">2.4 GB</p>
                  </div>
                  <div>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Uploaded</p>
                    <p className="font-medium">0.8 GB</p>
                  </div>
                </div>
              </div>
            )}

            {/* Server Selection */}
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-sm`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Select Server</h3>
                <button
                  onClick={() => setShowCountryList(!showCountryList)}
                  className={`px-4 py-2 rounded-lg ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
                >
                  {showCountryList ? 'Hide List' : 'Show All'}
                </button>
              </div>

              <div className="space-y-2">
                {(showCountryList ? countries : countries.slice(0, 4)).map((country, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedCountry(country.name)}
                    className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                      selectedCountry === country.name 
                        ? 'bg-purple-100 border border-purple-300' 
                        : isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{country.flag}</span>
                      <div>
                        <p className="font-medium">{country.name}</p>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {country.servers} servers
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className={`px-2 py-1 rounded text-xs ${
                        country.load < 20 
                          ? 'bg-green-100 text-green-800' 
                          : country.load < 50 
                          ? 'bg-yellow-100 text-yellow-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {country.load}%
                      </div>
                      {selectedCountry === country.name && (
                        <span className="text-purple-600">✓</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Features */}
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-sm`}>
              <h3 className="text-lg font-semibold mb-4">Security Features</h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">{feature.icon}</span>
                      <div>
                        <p className="font-medium">{feature.title}</p>
                        <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {feature.description}
                        </p>
                      </div>
                    </div>
                    <div className={`w-10 h-6 rounded-full ${feature.active ? 'bg-purple-600' : isDarkMode ? 'bg-gray-600' : 'bg-gray-300'} relative transition-colors cursor-pointer`}>
                      <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${feature.active ? 'transform translate-x-5' : 'translate-x-1'}`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Protocol Selection */}
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-sm`}>
              <h3 className="text-lg font-semibold mb-4">VPN Protocol</h3>
              <div className="space-y-2">
                {protocols.map((protocol, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedProtocol(protocol)}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      selectedProtocol === protocol 
                        ? 'bg-purple-100 border border-purple-300' 
                        : isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{protocol}</span>
                      {selectedProtocol === protocol && (
                        <span className="text-purple-600">✓</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Usage Stats */}
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-sm`}>
              <h3 className="text-lg font-semibold mb-4">Monthly Usage</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Data Transfer</span>
                    <span>45.2 GB / 500 GB</span>
                  </div>
                  <div className={`w-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2`}>
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '9%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Connection Time</span>
                    <span>127h / ∞</span>
                  </div>
                  <div className={`w-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2`}>
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-sm`}>
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className={`w-full p-3 rounded-lg text-left ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} transition-colors`}>
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">🎯</span>
                    <span>Fastest Server</span>
                  </div>
                </button>
                <button className={`w-full p-3 rounded-lg text-left ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} transition-colors`}>
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">📺</span>
                    <span>Streaming</span>
                  </div>
                </button>
                <button className={`w-full p-3 rounded-lg text-left ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} transition-colors`}>
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">💰</span>
                    <span>P2P</span>
                  </div>
                </button>
                <button className={`w-full p-3 rounded-lg text-left ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} transition-colors`}>
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">🛡️</span>
                    <span>Secure Core</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page7