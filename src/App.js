import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Pos from './components/pages/pos/Pos'; 
import store from './Store';
import { Provider } from 'react-redux';
import Kitchen from './components/pages/kitchen/Kitchen';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Pos />} /> 
        <Route path="/kitchen" element={<Kitchen />} /> 
      </Routes>
    </Provider>
  );
}

export default App;
