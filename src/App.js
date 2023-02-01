import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
    <BrowserRouter>
    <Sidebar />
      <Routes>
        <Route index element={<Home />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
