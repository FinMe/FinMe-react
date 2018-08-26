import React from 'react';
import ReactDOM from 'react-dom';

class FinMeApp extends React.Component {
   render() {
      return (
         <div>
            <p>FinMeApp</p>
         </div>
      );
   }
}

ReactDOM.render(<FinMeApp />, document.getElementById('app'));