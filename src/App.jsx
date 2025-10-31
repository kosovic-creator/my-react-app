import './App.css';
import HomePage from './pages/Home';
import ChilsPage from './pages/lift/Child';
import ChildPage from './pages/props/Child';
import ParentPage from './pages/props/Parent';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default App;



function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/lift/child" element={<ChilsPage />} />
        <Route path="/lift/parent" element={<ParentPage />} />
        <Route path="/props/child" element={<ChildPage />} />
        <Route path="/props/parent" element={<ParentPage />} />
        <Route path="*" element={<h2>Stranica nije pronađena</h2>} />

      </Routes>
    </Router>
  );
}

// const Home = () => <h2>Početna</h2>;
// const About = () => <h2>O nama</h2>;

