/*import React from 'react';   
import ReactDOM from 'react-dom'; 

export default function App() {
  return (
    <div>
      
    {(10>5)&&alert('hello')};
    </div>
  );
}*/
import React from 'react';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true // You can set the initial state value as per your requirement
    };
  }
  render() {  
    const isLoggedIn = this.state.isLoggedIn;  
    return (  
      <div>  
        Welcome {isLoggedIn ? 'Back' : 'Please login first'}  
      </div>  
    ) ; 
  }  
}

export default App