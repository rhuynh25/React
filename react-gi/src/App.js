import './index.css';
import React from 'react';
import BasicInfo from './BasicInfo';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      people: [
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
