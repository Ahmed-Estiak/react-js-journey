import React from "react";  

function Header({title}) {
  return(
    <header className="App-header" style={{ backgroundColor: 'lightblue',padding: '20px' }}>
      <h1 style={{color: 'white'}}>{title}</h1>  
    </header>
  );
}

export default Header;
