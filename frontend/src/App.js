import React, {useState} from 'react';
import './App.css';
import './reset.css';
import SplashHeader from './components/SplashHeader';
import Interface from './components/Interface';
import Footer from './components/Footer';

const App = () => {  
  let [activeTab, setActiveTab] = useState(<Interface/>);
  
  return (
    <div className="App h-100percent bg-yellow">
      <SplashHeader setActiveTab={setActiveTab}/>
      {activeTab}
      {/* {About()} */}
      <Footer/>
    </div>
  );
};

export default App;
