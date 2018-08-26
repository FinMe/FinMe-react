import React from 'react';
import ReactDOM from 'react-dom';
import Web3 from 'web3';
import IPFS from 'ipfs-mini';
import Linnia from '@linniaprotocol/linnia-js';

// Load Components
import Header from './components/Header.js';
import Hero from './components/Hero.js';

// Linnia Config
import {
  LINNIA_IPFS_HOST,
  LINNIA_IPFS_PORT,
  LINNIA_IPFS_PROTOCOL,
  LINNIA_HUB_ADDRESS,
  LINNIA_SEARCH_URI,
} from './config.js';


class FinMeApp extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         metaMaskExists: false,
         ipfs: '',
         linnia: '',
         web3: ''
      };

   }
   async componentDidMount() {
      try {
         web3 = await this.getWeb3();
      } catch (e) {

      }
   }
   getWeb3() {

      return new Promise((resolve, reject) => {

         window.addEventListener('load', async dispatch => {

            if (typeof window.web3 !== undefined) {
               resolve(new Web3(web3.currentProvider));
            } else {
               reject('No Meta Mask');
            }

         });

      });


      /*
      const ipfs = new IPFS({ 
         host: LINNIA_IPFS_HOST, 
         port: LINNIA_IPFS_PORT, 
         protocol: LINNIA_IPFS_PROTOCOL 
      });

      const linnia = new Linnia(web3, ipfs, LINNIA_HUB_ADDRESS);

      this.setState((prevState) => { 
         return {
            web3,
            ipfs,
            linnia 
         };    
      });

      */
   }
   render() {
      return (
         <div>
            <Header />
            <Hero />
         </div>
      );
   }
}

ReactDOM.render(<FinMeApp />, document.getElementById('app'));