import React from "react";

const Header = () => {
  return (
    <div>
      <div className="app__header app__wrapper section__padding" id="home">
        <div className="app__wrapper_info">
          <h1 className="app__header-h1">Simplon</h1>
          <p className="p__opensans" style={{ margin: "2rem 0" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            tristique ac justo fermentum pellentesque. Pellentesque finibus
            aliquam urna a tempor. Morbi dignissim ipsum at vehicula tincidunt.
            Morbi venenatis vehicula leo non ullamcorper. Praesent non tellus
            pulvinar, mollis dolor et, tempus ipsum. Nulla eget congue nulla.
            Donec vestibulum ultrices luctus. Donec auctor congue nisi, a
            molestie tellus tincidunt vel. Quisque velit lacus, ullamcorper ut
            imperdiet sodales, tristique fringilla nisl.
          </p>
          <button type="button" className="custom__button">
            Button Type
          </button>
        </div>

        <div className="app__wrapper_img">
          <img src={require("../assets/logo_lg.png")} alt="" />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;
