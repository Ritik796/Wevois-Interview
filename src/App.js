import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Components/Register';
import Home from './Components/Home';
import Login from './Components/Login';
import Interview from './Components/Interview';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
         <Route path="/Interview" element={<Interview />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
