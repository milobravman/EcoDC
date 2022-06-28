
import './App.css';
import Home from './Home';
import Recycle from './Recycle';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Recycle" element={<Recycle/>}/>
      </Routes>
    </div>
  );
}

export default App;
