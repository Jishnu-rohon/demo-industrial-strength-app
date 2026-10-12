import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import PanelA from './PanelA';
import PanelB from './PanelB';
import PanelC from './PanelC';
import Employee from './Employee';
import ButtonsPanel from './ButtonsPanel';

function App() {
  const panelCProps = {
    fname: "John",
    lname: "Smith"
  };
  return (
    <div className="App">
      <Menu />
      <ButtonsPanel />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/panel-a" element={<PanelA />} />
        <Route path="/panel-b" element={<PanelB msg="Hello from App component!" />} />
        <Route path="/panel-c" element={<PanelC {...panelCProps} />} />
        <Route path="/employee/:id" element={<Employee />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        just to test the hot reload feature of react app
      </header>
    </div>
  );
}

export default App;
