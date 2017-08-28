import React from "react";

class Header extends React.Component {
    render() {
      return (
        <header>
          <div className="logo"
            onClick={() => {  console.log("clicked"); }}>
            Logo
          </div>
          <input />
        </header>
      );
  }
}

export default Header;
