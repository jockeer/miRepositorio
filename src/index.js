import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { withStyles } from '@material-ui/core/styles'
import MomentUtils from 'material-ui-pickers/utils/moment-utils'
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider'
import moment from 'moment'
import 'moment/locale/es'


import styles from './styles'
import Form from './components/Form'

moment.locale('es')

class App extends Component {
  render() {
    
    return (
      <MuiPickersUtilsProvider utils={MomentUtils} locale='es' moment={ moment }>
        <Form classes={this.props.classes} />
      </MuiPickersUtilsProvider>
    )
  }
}

App = withStyles(styles)(App)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)