import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Components/Register';
import Home from './Components/Home';
import Login from './Components/Login';
import SiderBar from './Components/SiderBar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/Siderbar" element={<SiderBar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
