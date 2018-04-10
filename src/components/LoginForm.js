import React from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';

import { Card, Input, Button, CardSection } from './common';

class LoginForm extends React.Component {
  render() {
    onEmailChange = text => {
      this.props.emailChanged(text);
    };

    onPasswordChange = text => {
      this.props.passwordChange(text);
    };

    onButtonPress = () => {
      const { email, password } = this.props;
      this.props.loginUser({ email, password });
    };

    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            onChangeText={this.onPasswordChange}
            label="Password"
            placeholder="Password"
            secureTextEntry
            value={this.props.password}
          />
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress}>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

mapStateToProps = state => {
  return { email: state.auth.email, password: state.auth.password };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser
})(LoginForm);
