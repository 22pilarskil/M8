import React from "react";
import { STATIC_URL } from "../constants";

function Header() {
  const logo = STATIC_URL + "logo.png";
  const logoStyle = {
    'width':'20%',
    'height':'auto'
  }
  return (
    <div className="text-center">
      <hr />
      <img src={logo} alt="Failed" style={logoStyle}></img>
      <h5>
        <i>presents</i>
      </h5>
      <h3>The next generation in online relationships</h3>
    </div>
  );

}

export default Header;