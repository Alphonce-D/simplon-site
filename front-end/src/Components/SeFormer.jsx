import React from "react";
import "../Styles/Components/_seFormer.scss";

const SeFormer = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      {/* <img src={images.G} alt="g letter" /> */}
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Apprendre à Simplon</h1>
        {/* <img src={images.spoon} alt="aboutus_spoon" /> */}
        <p className="p__opensans">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc
          Tristique Ac Justo Fermentum Pellentesque. Pellentesque Finibus
          Aliquam Urna A Tempor. Morbi Dignissim Ipsum At Vehicula Tincidunt.
          Morbi Venenatis Vehicula Leo Non Ullamcorper. Praesent Non Tellus
          Pulvinar, Mollis Dolor Et, Tempus Ipsum. Nulla Eget Congue Nulla.
          Donec Vestibulum Ultrices Luctus. Donec Auctor Congue Nisi, A Molestie
          Tellus Tincidunt Vel. Quisque Velit Lacus, Ullamcorper Ut Imperdiet
          Sodales, Tristique Fringilla Nisl.
        </p>
        <button type="button" className="custom__button">
          En savoir plus
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        {/* <img src={images.knife} alt="" /> */}
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Les Chiffres</h1>
        {/* <img src={images.spoon} alt="aboutus_spoon" /> */}
        <p className="p__opensans">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc
          Tristique Ac Justo Fermentum Pellentesque. Pellentesque Finibus
          Aliquam Urna A Tempor. Morbi Dignissim Ipsum At Vehicula Tincidunt.
          Morbi Venenatis Vehicula Leo Non Ullamcorper. Praesent Non Tellus
          Pulvinar, Mollis Dolor Et, Tempus Ipsum. Nulla Eget Congue Nulla.
          Donec Vestibulum Ultrices Luctus. Donec Auctor Congue Nisi, A Molestie
          Tellus Tincidunt Vel. Quisque Velit Lacus, Ullamcorper Ut Imperdiet
          Sodales, Tristique Fringilla Nisl.
        </p>
        <button type="button" className="custom__button">
          En savoir plus
        </button>
      </div>
    </div>
  </div>
);

export default SeFormer;
