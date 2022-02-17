import React from "react";
import Navbar from "../Components/Navbar.jsx";
import SeFormer from "../Components/SeFormer.jsx";
import Header from "../Components/Header.jsx";
import "../Styles/Components/_header.scss";

const Accueil = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <SeFormer />
    </div>
  );
};

export default Accueil;
