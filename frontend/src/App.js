import React, {useState} from 'react';
import './App.css';
import './reset.css'
import SplashHeader from './components/SplashHeader'
import Interface from './components/Interface'


const App = () => {  
  let [activeTab, setActiveTab] = useState(<Interface/>);
  
  return (
    <div className="App h-100percent bg-yellow">
      <SplashHeader setActiveTab={setActiveTab}/>
      {activeTab}
      {/* {About()} */}
    </div>
  );
}

export default App;
