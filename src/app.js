import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';

// Load Components
import Header from './components/Header.js';

class FinMeApp extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         metaMaskExists: false
      };
   }
   componentDidMount() {
      // Check if metamask is in users browser
      if (web3.currentProvider.isMetaMask) {
         this.setState(() => {
            metaMaskExists: true
         });
      } else {
         alert('Install metamask to use application');
      }
   }
   render() {
      return (
         <div>
            <Header />
         </div>
      );
   }
}

ReactDOM.render(<FinMeApp />, document.getElementById('app'));