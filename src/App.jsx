import { Routes, Route } from "react-router-dom"

import NavbarComponent from "./components/NavbarComponent"
import FooterComponent from "./components/FooterComponent"

import HomePage from "./pages/HomePage"
import KelasPage from "./pages/KelasPage"
import FaqPage from "./pages/FaqPage"
import SyaratPage from "./pages/SyaratPage"
import TestimonialPage from "./pages/TestimonialPage"

function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/kelas" Component={KelasPage} />
        <Route path="/testimonial" Component={TestimonialPage} />
        <Route path="/faq" Component={FaqPage} />
        <Route path="/syarat" Component={SyaratPage} />
      </Routes>

      <FooterComponent />
    </div>
  )
}

export default App
