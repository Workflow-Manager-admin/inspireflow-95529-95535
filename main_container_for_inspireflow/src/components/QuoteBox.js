import React from 'react';
import './QuoteBox.css';

// PUBLIC_INTERFACE
/**
 * Component for rendering the quote and its author
 * @param {Object} props - Component props
 * @param {string} props.quote - The quote text to display
 * @param {string} props.author - The author of the quote
 */
const QuoteBox = ({ quote, author }) => {
  return (
    <div className="quote-box">
      <div className="quote-text">"{quote}"</div>
      <div className="quote-author">— {author}</div>
    </div>
  );
};

export default QuoteBox;
