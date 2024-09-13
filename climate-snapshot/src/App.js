import './components/NavBar/Navigation.js';
import './App.css';
import { Container } from 'react-bootstrap';

// import Navbar from './components/NavBar/Navigation.js';
import Navigation from './components/NavBar/Navigation.js';

function App() {
  return (
   <Container id = "app">
    <Navigation/>
    {/* <APIProvider apiKey={'Ekhane API Key dite hbe'} onLoad={() => console.log('Maps API has loaded.')}></APIProvider> */}
   </Container>
  );
}

export default App;
