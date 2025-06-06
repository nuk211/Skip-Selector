import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import SkipSelector from './components/SkipSelector/SkipSelector';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import './App.css';
import './styles/theme.css'; // Import the theme styles

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <SkipSelector />
      </div>
    </ThemeProvider>
  );
}

export default App;