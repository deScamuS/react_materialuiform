/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class FormUserDetails extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values } = this.props; //destructuring again
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title='Enter User Details' />
          <TextField
            hintTex='Enter your First Name'
            floatingLabelText='First Name '
            onChange={this.props.handleChange("firstName")}
            defaultValue={values.firstName}
          />
          <br />
          <TextField
            hintTex='Enter your Last Name'
            floatingLabelText='Last Name '
            onChange={this.props.handleChange("lastName")}
            defaultValue={values.lastName}
          />
          <br />
          <TextField
            hintTex='Enter your email'
            floatingLabelText='email '
            onChange={this.props.handleChange("email")}
            defaultValue={values.email}
          />
          <br />
          <RaisedButton
            label='continue'
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};
export default FormUserDetails;
