
import './App.css';
import Home from './Home';
import Recycle from './Components/Recycle';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/EcoDC" element={<Home/>}/>
        <Route path="/Recycle" element={<Recycle/>}/>
      </Routes>
    </div>
  );
}

export default App;
