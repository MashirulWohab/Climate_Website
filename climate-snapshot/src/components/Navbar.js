import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

const Navbar = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/home">CLimate Snapshot</Navbar.Brand>
        <nav style={styles.nav}>
          <ul style={styles.navList}>
            <li style={styles.navItem}>
              <Link to="/tools" style={styles.navLink}>Tools</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/data" style={styles.navLink}>Data</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/help" style={styles.navLink}>Help</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/blogs" style={styles.navLink}>Blogs</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/events" style={styles.navLink}>Events</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/about" style={styles.navLink}>About</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </Navbar>
  );
};

const styles = {
  nav: {
    backgroundColor: '#333',
    padding: '10px',
  },
  navList: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: '0 10px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
  }
};

export default Navbar;
