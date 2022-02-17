import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" activeClassName='active'>
        <div className="logo">
          <img src={require('../assets/logo-simplon.png')} alt="" />
        </div>
      </NavLink>
      <label htmlFor="btn" className="icon">
        <span className="fa fa-bars"></span>
      </label>
      <input type="checkbox" id="btn" />
      <ul>
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li>
          <label htmlFor="btn-1" className="show">
            Nos formations +
          </label>
          <NavLink to="/Nos-formations">
            Nos formations <i className="fas fa-caret-down"></i>
          </NavLink>
          <input type="checkbox" id="btn-1" />
          <ul>
            <li>
              <NavLink to="/Dev">Développeur Web</NavLink>
            </li>
            <li>
              <NavLink to="/Cda">Concepteur d'app</NavLink>
            </li>
            <li>
              <NavLink to="/Tssr">Tssr</NavLink>
            </li>
            <li>
              <NavLink to="/Ref">Référent digital</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <label htmlFor="btn-2" className="show">
            Nos cours +
          </label>
          <a href="#">
            Nos cours <i className="fas fa-caret-down"></i>
          </a>
          <input type="checkbox" id="btn-2" />
          <ul>
            <li>
              <NavLink to="/Web">Web</NavLink>
            </li>
            <li>
              <NavLink to="/Mobile">Mobile</NavLink>
            </li>
            <li>
              <NavLink to="/Frontend">Frontend</NavLink>
            </li>
            <li>
              <NavLink to="/Backend">Backend</NavLink>
            </li>
            <li></li>
          </ul>
        </li>
        <li>
          <label htmlFor="btn-3" className="show">
            Nos entreprises +
          </label>
          <a href="#">
            Nos entreprises <i className="fas fa-caret-down"></i>
          </a>
          <input type="checkbox" id="btn-3" />
          <ul>
            <li>
              <NavLink to="/Projet-pro">Projets Entreprises</NavLink>
            </li>
            <li>
              <NavLink to="/Appel-projets">Appels à Projets</NavLink>
            </li>
            <li>
              <NavLink to="/Partenaires">Partenaires</NavLink>
            </li>
            <li>
              <NavLink to="/Simploniens">Simplonien.e.s</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/Actu">Actualités</NavLink>
        </li>
        <li>
          <NavLink to="/Contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/Connexion-inscription">Connexion / inscription</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
