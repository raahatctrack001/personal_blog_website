import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Register from "./Pages/Register"
import SignIn from "./Pages/SignIn"
import Header from "./Compnents/Header"
import { FooterComp } from "./Compnents/FooterComp"

function App() {
  return   <BrowserRouter>
              <Header />
                <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/sign-in" element={<SignIn />} />
                </Routes>
                <FooterComp />
            </BrowserRouter>
}

export default App
