import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme();

export default class Signup extends Component {
  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this)
    this.enterUser = this.enterUser.bind(this)
    this.handleDialogOpen = this.handleDialogOpen.bind(this)
    this.handleDialogClose = this.handleDialogClose.bind(this)

    this.state = {
      open: false,
      email:"",
      username:"",
      password:""
    }
  }

	handleChange (e) {
    const target = e.target
    const value = target.value
    const name = target.name

    this.setState({ [name]: value })
	};

  handleDialogOpen = () => {
    this.setState({open: true});
  };

  handleDialogClose = () => {
    this.setState({open: false});
  };

  enterUser = (e) => {
    e.preventDefault();
    console.log('submit happened')
  };

  render() {
    const actions = [
      <FlatButton
        label='Cancel'
        primary={true}
        onTouchTap={this.handleDialogClose}
      />,
      <FlatButton
        label='Submit'
        primary={true}
        onTouchTap={this.handleDialogClose}
      />,
    ];

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <RaisedButton label='Signup' onTouchTap={this.handleDialogOpen} />
          <Dialog
            title='Signup'
            actions={actions}
            modal={true}
            open={this.state.open}
          >
          <form onSubmit={this.enterUser} autoComplete='off'>
            <TextField
            name='username'
            type='text'
            // required={true}
            value={this.state.username}
            onChange={this.handleChange}
            floatingLabelText='Create username'
            />
            <br />
           <TextField
             name='email'
             type='text'
            //  required={true}
             value={this.state.email}
             onChange={this.handleChange}
             floatingLabelText='Enter Email Address'
           />
           <br />
           <TextField
             name='password'
             type='text'
            //  required={true}
             value={this.state.password}
             onChange={this.handleChange}
             floatingLabelText='Enter Password'
           />
           <br />
           <RaisedButton
             label='Register'
             type='submit'
           />
         </form>
          </Dialog>
        </div>
      </MuiThemeProvider>
    );
  }
}
