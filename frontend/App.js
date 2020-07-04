import React, {useState} from 'react';
import '../app/assets/stylesheets/App.css'
import '../app/assets/stylesheets/reset.css'
import SplashHeader from './components/SplashHeader';
import ColorList from './components/ColorList'
import Footer from './components/Footer';

const App = () => {  
  let [activeTab, setActiveTab] = useState(<ColorList/>);
  
  return (
    <div className="App min-h-80percent h-fit bg-yellow">
      <SplashHeader setActiveTab={setActiveTab}/>
      {activeTab}
      <Footer/>
    </div>
  );
};

export default App;
