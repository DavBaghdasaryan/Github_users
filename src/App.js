import React from 'react';
import './App.css';

// components
import Header from './components/Header';


//pages
import Users from './pages/Users'

function App() {
  return (
    <div className="App">
      <Header />
      <Users />
    </div>
  );
}

export default App;
