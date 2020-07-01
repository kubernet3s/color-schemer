import React, {useState} from 'react';
import './App.css';
import './reset.css'
import SplashHeader from './components/SplashHeader'
import Interface from './components/Interface'
import About from './components/About'


const App = () => {  
  let [activeTab, setActiveTab] = useState(<Interface/>);
  
  return (
    <div className="App h-100percent padding-5percent bg-yellow">
      <p className="pointer" onClick={()=> setActiveTab(<About/>) }>About</p>
      <p className="pointer" onClick={()=> setActiveTab(<Interface/>) }>Scheme Selector</p>
      <SplashHeader/>
      {activeTab}
      {/* {About()} */}
    </div>
  );
}

export default App;
