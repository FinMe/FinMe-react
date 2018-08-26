import React from 'react';

const styles = {
   navBar: {
      background: '#ffffff'
   }
};

const Header = () => {
   return (
      <div>
         <nav className="navbar navbar-default navbar-fixed-top" style={styles.navBar}>
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">FinMe</a>
              </div>
              <div id="navbar" className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                  <li className="active"><a href="#">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
            </div>
          </nav>
      </div>
   );
};

export default Header;