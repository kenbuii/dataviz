import React from 'react';
import './App.css';
import SocialNetworkChart from './social-network-evolution';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Social Network Evolution Visualization</h1>
      </header>
      <main className="App-main">
        <SocialNetworkChart />
      </main>
      <footer className="App-footer">
        <p>© 2023 Social Network Simulation Project</p>
      </footer>
    </div>
  );
}

export default App; 