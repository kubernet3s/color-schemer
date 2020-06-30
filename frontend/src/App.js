import React, {useState} from 'react';
import './App.css';
import './reset.css'
import SplashHeader from './components/SplashHeader'
import Interface from './components/Interface'


const App = () => {  
  let {activeTab, setActiveTab} = useState("interface")

  
  return (
    <div className="App vh-100percent">
      <SplashHeader/>
      <Interface/>
    </div>
  );
}

export default App;
