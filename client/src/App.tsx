import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Testing from './pages/Testing'
import AboutDeveloper from './pages/AboutDeveloper'
import Funding from './pages/Funding'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/testing" element={<Testing />} />
      <Route path="/about" element={<AboutDeveloper />} />
      <Route path="/funding" element={<Funding />} />
    </Routes>
  )
}

export default App
