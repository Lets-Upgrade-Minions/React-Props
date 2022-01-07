import React from 'react'
import Welcome from './Welcome';

const App=()=> {
  return (
    <div>
         <Welcome  name="Abhishek" country="India">
              
         </Welcome>
         <Welcome  name="Anubhav" country="USA"/>
         <Welcome  name="Shalini" country="Ireland">
              
          </Welcome>
    </div>
  );
}

export default App;
