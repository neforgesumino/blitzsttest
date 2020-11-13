import React from 'react';
import './ScrollLink.scss';


function ScrollLink() {
   
  return (
    <section className="scroll">
      <a href="#" className="scroll__link">
        <p className="scroll__text">
          keep scrolling, there is still more to come
        </p>
      </a>
    </section>
  );
}

export default ScrollLink;