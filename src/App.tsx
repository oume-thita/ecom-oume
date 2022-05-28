import React from 'react';
import Header from './components/Header';
import { HomePage } from './pages';

function App() {
  return (
    <div className="App"> 
      <Header />
      <div className="main">
      <HomePage />
      </div>
    </div>
  );
}

export default App;
