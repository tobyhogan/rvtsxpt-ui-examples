import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Page1 />} />
            <Route path="/second" element={<Page2 />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
