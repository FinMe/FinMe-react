import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';

// Load Components
import Header from './components/Header.js';

class FinMeApp extends React.Component {
   render() {
      return (
         <div>
            <p>FinMeApp</p>
            <Header />
         </div>
      );
   }
}

ReactDOM.render(<FinMeApp />, document.getElementById('app'));