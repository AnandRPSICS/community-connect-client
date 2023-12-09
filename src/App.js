import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "./Pages/Users/UserLogin/userLogin";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  //local
  const url = "http://localhost:4003";

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1> user home </h1>} />
        <Route path="/user/login" element={<UserLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
