import React from 'react';


class BasicInfo extends React.Component {

  render() {
    return <div class = "BI">Name: {this.props.person.name}, Number: {this.props.person.number}, Date of Birth: {this.props.person.dob}
    </div>;
  }
}

export default BasicInfo;