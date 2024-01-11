import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './Pages/Index'
import Play from './Pages/Play'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/play' element={<Play />} />
      </Routes>
      {/* Error */}

    </BrowserRouter>
  );
}

export default App;
