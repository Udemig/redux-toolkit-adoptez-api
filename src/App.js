import Header from './components/header'
import {HashRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'

function App() {
  return (
    <div className="container py-3">
      <Header />

      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />

        </Routes>
      </HashRouter>

    </div>
  )
}

export default App
