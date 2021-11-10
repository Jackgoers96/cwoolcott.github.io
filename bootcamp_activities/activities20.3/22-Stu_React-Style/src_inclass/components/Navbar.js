import React from 'react';
// Here we import the Navbar.css file to grant access to some additional classNames
import '../styles/Navbar.css';

const styles = {
  navbarStyle: {
    display: 'flex',
    background: 'green',
    justifyContent: 'flex-end'
  }
}

function Navbar() {
  // TODO: Add a style attribute to `nav`
  return (
    <nav style={styles.navbarStyle} className="navbar">
      <a href="/">Welcome</a>
    </nav>
  );
}

export default Navbar;
