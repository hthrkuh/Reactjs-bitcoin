import React from 'react';
import FlippingCardPage from './components/flipcard';
import './css/App.css';
import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {


  render() {
    return (
      <div className="App" >
        <FlippingCardPage />
      </div>
    );
  }



}

export default App;
