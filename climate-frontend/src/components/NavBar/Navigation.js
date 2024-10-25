import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

import { Home } from '../Home';
import {Tools} from './Tools';
import { Data } from './Data';
import { Help } from './Help';
import { Blog } from './Blog';
import { Events } from './Events';
import { About } from './About';
import { ErrorPage } from '../../ErrorPage';
// import { ErrorPage } from '../../ErrorPage';

const Navigation = () => {
  return (
    <Router>
    <Navbar bg="dark" variant="dark" className="sticky top-0 rounded-3xl" >
      <Navbar.Brand href="/home" className="ml-4 mr-auto font-sans system-ui">Climate Snapshot</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="" id="basic-navbar-nav" style={styles.navList}>
        <Nav className="ml-auto mr-4">
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/blog">
            <Nav.Link>Blog</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/data">
            <Nav.Link>Data</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/events">
            <Nav.Link>Events</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/help">
            <Nav.Link>Help</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/tools">
            <Nav.Link>Tools</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/tools' element={<Tools/>}/>
            <Route path='/data' element={<Data/>}/>
            <Route path='/help' element={<Help/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/events' element={<Events/>}/>
            <Route path='/about' element={<About/>} />
            <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    </Router>
    
  );
};

/*
, Routes, Route, Link
// <Container>
    //   <Navbar>
        /* <BrowserRouter> /}
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Nav style={styles.nav}/>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <ul>
                <li>
              <Nav.Link href="#about">Home</Nav.Link>  
              </li>
              <li>
              <Nav.Link href="#link">Link</Nav.Link>
              </li>
              <li>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              </li>
              </ul>
            </Nav>

          </Navbar.Collapse> /}

            {/* <ul style={styles.navList}>
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
                <Link to="/blog" style={styles.navLink}>Blog</Link>
              </li>
              <li style={styles.navItem}>
                <Link to="/events" style={styles.navLink}>Events</Link>
              </li>
              <li style={styles.navItem}>
                <Link to="/about" style={styles.navLink}>About</Link>
              </li>
            </ul> /}
          {/* </Nav> /}

          {/* <Routes>
            <Route path='/' element={<index/>}/>
            <Route path='/home' element={<index/>}/>
            <Route path='/tools' element={<Tools/>}/>
            <Route path='/data' element={<Data/>}/>
            <Route path='/help' element={<Help/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/events' element={<Events/>}/>
            <Route path='/about' element={<About/>} />
            <Route path='/scwcqwwabout' element={<About/>} />
            <Route path='*' element={<ErrorPage/>}/>
          </Routes>
        </BrowserRouter> /}
      {/* </Navbar>
    </Container> /}
*/
const styles = {
  nav: {
    backgroundColor: '#333',
    padding: '10px',
  },
  navBrand: {
    padding: '10px',
  },
  navList: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'right',
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

export default Navigation;