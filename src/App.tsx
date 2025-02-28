import React, { useState } from 'react';
import './App.css';
import HighExplorationViz from './interactive-high-exploration-viz';
import SocialNetworkEvolution from './social-network-evolution';
import ThirdAnalysis from './third-analysis';

function App() {
  const [activeViz, setActiveViz] = useState<'question1' | 'question2' | 'question3'>('question1');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Social Network Evolution Visualization</h1>
      </header>
      
      <div className="viz-menu">
        <button 
          className={`menu-button ${activeViz === 'question1' ? 'active' : ''}`}
          onClick={() => setActiveViz('question1')}
        >
          Question 1: High Exploration
        </button>
        <button 
          className={`menu-button ${activeViz === 'question2' ? 'active' : ''}`}
          onClick={() => setActiveViz('question2')}
        >
          Question 2: Network Evolution
        </button>
        <button 
          className={`menu-button ${activeViz === 'question3' ? 'active' : ''}`}
          onClick={() => setActiveViz('question3')}
        >
          Question 3: Parameter Comparison
        </button>
      </div>
      
      <main className="App-main">
        {activeViz === 'question1' ? (
          <HighExplorationViz />
        ) : activeViz === 'question2' ? (
          <SocialNetworkEvolution />
        ) : (
          <ThirdAnalysis />
        )}
      </main>
      
      <footer className="App-footer">
        <p>© 2023 Social Network Simulation Project</p>
      </footer>
    </div>
  );
}

export default App; 