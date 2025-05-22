import React from 'react';
import './NewQuoteButton.css';

// PUBLIC_INTERFACE
/**
 * Button component for generating a new quote
 * @param {Object} props - Component props
 * @param {Function} props.onClick - Function to call when button is clicked
 */
const NewQuoteButton = ({ onClick }) => {
  return (
    <button 
      className="quote-button btn btn-large" 
      onClick={onClick}
      aria-label="Generate new quote"
    >
      New Inspiration
    </button>
  );
};

export default NewQuoteButton;
