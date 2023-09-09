import React from "react";
import Logo from "../../app/assets/logo.svg";

const Header = () => {
  return (
    <header className=" py-10">
      <nav className="flex items-center justify-around">
        <div>
          <a href="/">
            <img src={Logo} alt="Logo" width={"224px"} />
          </a>
        </div>

        <ul className="flex items-center justify-around [&>li]:mr-12">
          <li>
            <a href="/">How it Works</a>
          </li>
          <li>
            <a href="/">Benefits</a>
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
          <li>
            <a href="/">Account</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
