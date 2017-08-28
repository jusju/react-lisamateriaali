import React from "react";

class Header extends React.Component {
  
  inputChange(event) {
    console.log(event);
  }
  
  render() {
      return (
        <header>
          <div className="logo"
            onClick={() => {  console.log("clicked"); }}>
            Logo
          </div>
          <input onChange={this.inputChange}/>
        </header>
      );
  }
}

export default Header;
