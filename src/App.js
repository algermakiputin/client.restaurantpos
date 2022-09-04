import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Pos from './components/pages/pos/Pos'; 

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Pos />} /> 
      </Routes>
    </div>
  );
}

export default App;
