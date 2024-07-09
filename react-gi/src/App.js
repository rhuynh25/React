import './index.css';
import React from 'react';
import BasicInfo from './BasicInfo';

class App extends React.Component {
// Very Easy was replaced by Medium
  // <div>
  //   <p> Name: John</p>
  //   <p> Number: 123-456-7890</p>
  //   <p> Date of Birth: 01/01/2000</p>
  // </div>
  
// Easy, Medium and Hard section all together
  constructor(props) {
    super(props);
    this.state = {
      person: [
        {name: 'John', number: '123-456-7890', dob: '01/01/2000'},
        {name: 'Jane', number: '123-456-7890', dob: '01/01/2000'},
        {name: 'Jim', number: '123-456-7890', dob: '01/01/2000'},
        {name: 'Jill', number: '123-456-7890', dob: '01/01/2000'},
        {name: 'Jack', number: '123-456-7890', dob: '01/01/2000'},
      ]
    }
  }

  render() {
    return <div>
      {this.state.people.map(person => <BasicInfo person={person}/>)} 
    </div>
  }
}
// Map applys a function to everyhting in the array

export default App;
