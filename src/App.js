import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Pos from './components/pages/pos/Pos'; 
import store from './Store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Pos />} /> 
      </Routes>
    </Provider>
  );
}

export default App;
