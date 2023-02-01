import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Educ from './pages/Educ';

function App() {
  return (
    <>
    <BrowserRouter>
    <Sidebar />
      <Routes>
        <Route index element={<Home />}/>
        <Route path='/linha-do-tempo' element={<Educ />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
