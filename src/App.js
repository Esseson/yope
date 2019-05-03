import React,{ Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import './App.css';
import Particles from 'react-particles-js';


const particlesOptions = {
particles: {
  number: {
    value: 50,
    density: {
      enable: true,
      value_area: 1000
    }
  }
}
}

class App extends Component{
      render(){
          return (
              <div className="App">
                 <Particles className= "particles"
                    params={particlesOptions} 
                  />
                  <Navigation />
                  <Logo />
              </div>
      

          );
      };

    }
    
      


export default App;
