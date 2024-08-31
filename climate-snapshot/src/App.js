import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/tools'>Tools</Route>
          <Route path='/data'>Data</Route>
          <Route path='/help'>Help</Route>
          <Route path='/blog'>Blog</Route>
          <Route path='/events'>Events</Route>
          <Route path='/about'>About</Route>
          <Route path='*'>Error 404! Page Not Found</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
