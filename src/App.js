import React from 'react'
import './App.css';
import InitialPage from './pages/InitialPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <InitialPage /> } />
      </Routes>
     </BrowserRouter>
  );
  }
}

export default App;
