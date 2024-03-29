import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Signin from "./pages/Signin";
import Singup from "./pages/Singup";
import Dashboard from "./pages/Dashboard";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/Sign-in" element={<Signin />}></Route>
        <Route path="/sign-up" element={<Singup />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App