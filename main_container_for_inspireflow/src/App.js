import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import quotes from './data/quotes';
import QuoteBox from './components/QuoteBox';
import NewQuoteButton from './components/NewQuoteButton';

function App() {
  // State to hold the current quote
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  
  // Function to get a random quote index with useCallback to prevent recreation on each render
  const getRandomQuoteIndex = useCallback(() => {
    const newIndex = Math.floor(Math.random() * quotes.length);
    // Make sure we don't get the same quote twice in a row
    return newIndex === currentQuoteIndex && quotes.length > 1 
      ? (newIndex + 1) % quotes.length 
      : newIndex;
  }, [currentQuoteIndex]);
  
  // Function to generate a new quote
  const generateNewQuote = () => {
    setFadeIn(false);
    // Small delay for the fade out animation before changing quote
    setTimeout(() => {
      setCurrentQuoteIndex(getRandomQuoteIndex());
      setFadeIn(true);
    }, 300);
  };
  
  // Get a random quote when the component mounts
  useEffect(() => {
    // When the component mounts, initialize with a random quote
    setCurrentQuoteIndex(getRandomQuoteIndex());
  }, [getRandomQuoteIndex]);

  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">✧</span> InspireFlow
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div className="container">
          <div className="hero">
            <div className="subtitle">Daily Inspiration</div>
            
            <h1 className="title">InspireFlow</h1>
            
            <div className="description">
              Discover wisdom and motivation with our curated collection of inspirational quotes.
            </div>
            
            <div className={`quote-container ${fadeIn ? 'fade-in' : 'fade-out'}`}>
              {quotes.length > 0 && (
                <QuoteBox 
                  quote={quotes[currentQuoteIndex].text} 
                  author={quotes[currentQuoteIndex].author} 
                />
              )}
            </div>
            
            <NewQuoteButton onClick={generateNewQuote} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
