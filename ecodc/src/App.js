import './App.css';
import Home from './Home';
import Recycle from './Components/Recycle';
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Route path='/' component={<Home/>}/>
        <Route path="/Recycle" component={<Recycle/>}/>
    </div>
  );
}

export default App;