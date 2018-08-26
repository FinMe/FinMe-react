import React from 'react';

const styles = {
   heroStyle: {
      background: '../img/hero.jpg',
      width: '100%',
      height: '100%',
      backgroundSize: 'cover'
   }
};

const Hero = () => {
   return (
      <div>
         <div id="hero" style={styles.heroStyle}></div>
      </div>
   );
};

export default Hero;

