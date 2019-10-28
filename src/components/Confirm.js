/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";

export class Confirm extends React.Component {
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
    const {
      values: { firstName, lastName, email, occupation, city, bio }
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title='Confirm User Data' />
          <List>
            <ListItem
              primaryText='First Name' //this is a label
              secondaryText={firstName} // this is the data we pulled from values & props.
            />
            <ListItem
              primaryText='Last Name' //this is a label
              secondaryText={lastName} // this is the data we pulled from values & props.
            />
            <ListItem
              primaryText='Email' //this is a label
              secondaryText={email} // this is the data we pulled from values & props.
            />
            <ListItem
              primaryText='Occupation' //this is a label
              secondaryText={occupation} // this is the data we pulled from values & props.
            />
            <ListItem
              primaryText='City' //this is a label
              secondaryText={city} // this is the data we pulled from values & props.
            />
            <ListItem
              primaryText='Bio' //this is a label
              secondaryText={bio} // this is the data we pulled from values & props.
            />
          </List>
          <RaisedButton
            label='Confirm & Continue'
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label='Back'
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
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
export default Confirm;
