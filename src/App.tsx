import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Symbols from './pages/Symbols/Symbols';

const App = () => {

  return (
    <main>
    <Header/>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/symbols' element={<Symbols/>}/>
      </Routes>
    </Router>
    </main>
  )
}

export default App;
