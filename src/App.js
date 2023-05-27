import './App.css';
import { BrowserRouter as Router,Routes,  Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';


function App() {
  return (

    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  
  );
}

export default App;
