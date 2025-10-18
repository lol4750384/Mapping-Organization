import { Routes, Route } from 'react-router-dom'
import PageTemplate from './components/PageTemplate'
import Home from './pages/Home'

const About = () => (
  <PageTemplate title="Acerca de">
    <div>Acerca</div>
  </PageTemplate>
)

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default App
