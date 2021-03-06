import './App.css';
import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className='card-container'>
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;
