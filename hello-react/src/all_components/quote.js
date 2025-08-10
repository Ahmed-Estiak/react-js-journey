import React from 'react';
import '../components_css/quote.css';

function Quote({quote, author}) {

  return (
    <div className="quote-card">
      <p className="quote-text">"{quote}"</p>
      <p className="quote-author">— {author}</p>
    </div>
  );
  
}


export default Quote;
