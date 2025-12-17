import React, { useState, useEffect } from "react";
import MultiStepForm from "./pages/MultiStepForm";

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-theme' : '';
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <>
      <div style={{ position: 'absolute', top: 16, right: 16, zIndex: 10 }}>
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          style={{
            background: theme === 'dark' ? '#222' : '#fff',
            color: theme === 'dark' ? '#fff' : '#222',
            border: '1px solid #ccc',
            borderRadius: 20,
            padding: '6px 16px',
            cursor: 'pointer',
            fontWeight: 500,
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
          }}
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? (
            <span role="img" aria-label="Light">🌞 Light</span>
          ) : (
            <span role="img" aria-label="Dark">🌙 Dark</span>
          )}
        </button>
      </div>
      <MultiStepForm />
    </>
  );
}

export default App;
