import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import ChatWidget from './components/common/ChatWidget'
import ScrollToTop from './components/common/ScrollToTop'
import Home from './pages/Home'
import Buy from './pages/Buy'
import Rent from './pages/Rent'
import Sell from './pages/Sell'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import { FavoritesProvider } from './context/FavoritesContext'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-charcoal border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-warmGray-600 font-medium">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <FavoritesProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-cream flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/buy" element={<Buy />} />
              <Route path="/rent" element={<Rent />} />
              <Route path="/sell" element={<Sell />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <ChatWidget />
        </div>
      </Router>
    </FavoritesProvider>
  )
}

export default App
