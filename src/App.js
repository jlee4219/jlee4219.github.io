import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home.js';
import Art from './Art.js';
import Contact from './Contact.js';
import NavBar from './NavBar.js';
import Writing from './Writing.js';

const tabs = {
  'home': <Home />,
  'writing': <Writing />,
  'art': <Art />,
  'contact': <Contact />
};

function App() {
  const [currTab, setCurrTab] = useState('home');
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jefferson Lee</h1>
        <NavBar onSelection={ (selection) => setCurrTab(selection) }/>
      </header>
      <div className='App-content' >
        {tabs[currTab]}
      </div>
    </div>
  );
}

export default App;
