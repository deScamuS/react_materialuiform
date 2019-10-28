/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

export class Success extends React.Component {
  continue = e => {
    e.preventDefault();
    //process form(send data to api with express & NodeJS)
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    //process form(send data to api with express & NodeJS)
    this.props.prevStep();
  };
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title='SUCCESS!' />
          <h1>Thank You For Your Submission</h1>
          <p>You will get an email with further instructions.</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
