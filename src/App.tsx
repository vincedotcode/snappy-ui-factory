
import React from 'react';
import { ShadcnShowcase } from './components/ShadcnShowcase';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1 className="title">shadcn/ui Component Library</h1>
          <p className="subtitle">
            Beautifully designed components built with Radix UI and pure CSS
          </p>
        </header>
        <ShadcnShowcase />
      </div>
    </div>
  );
}

export default App;
