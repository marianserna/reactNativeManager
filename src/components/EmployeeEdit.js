import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import { employeeUpdate } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends React.Component {
  // componentWillMount() {
  //   this.props.employee.forEach(({ value, prop }) => {
  //     this.props.employeeUpdate({ prop, value });
  //   });
  // }

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });

    console.log(this.props.employee, cwm);
  }

  onButtonPress = () => {
    const { name, phone, shift } = this.props;
    // console.log(name, phone, shift);
    console.log(this.props.employee, onbp);
  };

  render() {
    console.log(this.props.employee, render);

    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress}>Save Changes</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.EmployeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeEdit);
