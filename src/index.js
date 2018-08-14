import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import MomentUtils from 'material-ui-pickers/utils/moment-utils'
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider'
import DatePicker from 'material-ui-pickers/DatePicker'

const styles = (theme) => {
  return {
    container: {
      width: '40%',
      margin: '0 auto',
      padding: theme.spacing.unit * 2
    },
    textField: {
      marginBottom: theme.spacing.unit * 2
    }
  }
}

class App extends Component {
  render() {
    const classes = this.props.classes
    return (
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Paper className={classes.container}>
          <Typography variant='display1' color='primary'>Registro de la comunidad</Typography>
          <TextField label='nombre' name='firstName' fullWidth className={classes.textField} />
          <TextField label='Apellido' name='LastName' fullWidth className={classes.textField} />
          <TextField label='Celular' name='Number' type='number' fullWidth className={classes.textField} />
          <TextField label='Correo' name='email' type='email' fullWidth className={classes.textField} />
          <TextField label='Facebook' name='FB' fullWidth className={classes.textField} />
          <DatePicker type='date' label='Fecha de Nacimiento'  fullWidth/>    
          <TextField select label='Interes' name='date' fullWidth className={classes.textField}>
            <MenuItem>JavaScript</MenuItem>
            <MenuItem>Firebase</MenuItem>
            <MenuItem>Learn</MenuItem>
            <MenuItem>Share</MenuItem>
          </TextField>
          <Button variant='contained' color="primary" fullWidth>
            Primary
          </Button>
        </Paper>
      </MuiPickersUtilsProvider>
    )
  }
}

App = withStyles(styles)(App)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)