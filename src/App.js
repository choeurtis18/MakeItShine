//import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Privacy from "./pages/Privacy";
import NoPage from "./pages/NoPage";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";

import { SercicesList } from "./components/SercicesList";
import { AvisClient } from "./components/AvisClient";
import { MesProjects } from "./components/MesProjects";

const App = () => {
//export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
        <Route index element={<Home sercicesList={SercicesList} avisClient={AvisClient} mesProjects={MesProjects}/>} />
          <Route path="projets" element={<Projects />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

export default App;