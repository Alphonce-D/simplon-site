import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./Pages/Accueil.jsx";
import Actu from "./Pages/Actu.jsx";
import Contact from "./Pages/Contact.jsx";
import NosCours from "./Pages/NosCours.jsx";
import NosEntreprises from "./Pages/NosEntreprises.jsx";
import NosFormations from "./Pages/NosFormations.jsx";
import SignInUp from "./Pages/SignInUp.jsx";
import Dev from "./Pages/Dev.jsx";
import Ref from "./Pages/Ref.jsx";
import Tssr from "./Pages/Tssr.jsx";
import Cda from "./Pages/Cda.jsx";
import AppelProjets from "./Pages/AppelProjets.jsx";
import ProjetsPro from "./Pages/ProjetsPro.jsx";
import Partenaires from "./Pages/Partenaires.jsx";
import Simploniens from "./Pages/Simploniens.jsx";
import Web from "./Pages/Web.jsx";
import Mobile from "./Pages/Mobile.jsx";
import Frontend from "./Pages/Frontend.jsx";
import Backend from "./Pages/Backend.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Actu" element={<Actu />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Nos-cours" element={<NosCours />} />
        <Route path="/Nos-entreprises" element={<NosEntreprises />} />
        <Route path="/Nos-formations" element={<NosFormations />} />
        <Route path="/Connexion-inscription" element={<SignInUp />} />
        <Route path="/Dev" element={<Dev />} />
        <Route path="/Tssr" element={<Tssr />} />
        <Route path="/Ref" element={<Ref />} />
        <Route path="/Cda" element={<Cda />} />
        <Route path="/Appel-projets" element={<AppelProjets />} />
        <Route path="/Projet-pro" element={<ProjetsPro />} />
        <Route path="/Partenaires" element={<Partenaires />} />
        <Route path="/Simploniens" element={<Simploniens />} />
        <Route path="/Web" element={<Web />} />
        <Route path="/Mobile" element={<Mobile />} />
        <Route path="/Frontend" element={<Frontend />} />
        <Route path="/Backend" element={<Backend />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
