import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Educ from './pages/Educ';
import Skills from './pages/Skills';

function App() {
  return (
    <>
    <BrowserRouter>
    <Sidebar />
      <Routes>
        <Route index element={<Home />}/>
        <Route path='/linha-do-tempo' element={<Educ />}/>
        <Route path='/skills' element={<Skills />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
