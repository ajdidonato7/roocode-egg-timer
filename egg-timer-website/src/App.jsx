import React from 'react';
import './App.css';

// Import components
import Header from './components/Header/Header';
import TimerSection from './components/TimerSection/TimerSection';
import RecipeSection from './components/RecipeSection/RecipeSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <TimerSection />
        <RecipeSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
