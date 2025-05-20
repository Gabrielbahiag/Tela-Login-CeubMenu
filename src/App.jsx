import './App.css';
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Register from "./pages/register/Register";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Cadastro" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;