
import React, { useState, useEffect } from 'react';
import { ShadcnShowcase } from './components/ShadcnShowcase';
import { Button } from './components/ui/button';
import { Moon, Sun } from 'lucide-react';
import './App.css';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <div className="header-content">
            <div>
              <h1 className="title">IG Component Library</h1>
              <p className="subtitle">
                Beautifully designed components with your custom theme system
              </p>
            </div>
            <Button variant="outline" size="icon" onClick={toggleTheme} className="theme-toggle">
              {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>
          </div>
        </header>
        <ShadcnShowcase />
      </div>
    </div>
  );
}

export default App;
