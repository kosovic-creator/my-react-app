import './App.css';
import TestPage from './test/TestPage';
import Parent from './components/Parent';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default App;



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/parent" element={<Parent />} />
          <Route path="/test" element={<TestPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

const Home = () => <h2>Početna</h2>;
const About = () => <h2>O nama</h2>;

