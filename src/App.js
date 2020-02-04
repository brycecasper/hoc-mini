import React from 'react';
import './App.css';
import SuperSecret from './components/superSecret';
import OnOffButton from './components/onOffButton';
import AccordianMenu from './components/accordianMenu';

function App() {
  return (
    <div className="App">
      <SuperSecret isAuthenticated={true} />
      <OnOffButton />
      <AccordianMenu title='Aloha!' />
    </div>
  );
}

export default App;
