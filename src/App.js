import React, { Suspense } from 'react';
import './App.css';
import { ThreeDots } from 'react-loader-spinner'



const AboutUs = React.lazy(() => import('./components/AboutUs'))
const Packages = React.lazy(() => import('./components/Packages'))

function App() {

  return (
    <div className="App">
      <div>
        <Suspense fallback={<ThreeDots type= "Bars" color="#FF00FF" height={200} width ={200} style={{margin: "0 auto"}}/>}>
          <AboutUs />
          <Packages />
        </Suspense>
      </div>
      </div>
  );
}


export default App;
