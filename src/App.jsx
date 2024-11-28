import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoggedLayout from './layouts/LoggedLayout';

// Importing pages
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoggedLayout><Home /></LoggedLayout>} />
      </Routes>
    </Router>
  )
}

export default App
