import React, { Component } from "react";
import ReactDOM from "react-dom";
import { withStyles } from "@material-ui/core/styles";
import MomentUtils from "material-ui-pickers/utils/moment-utils";
import MuiPickersUtilsProvider from "material-ui-pickers/utils/MuiPickersUtilsProvider";
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import moment from "moment";
import "moment/locale/es";

import { save, list } from "./services/database";
import styles from "./styles";
import Form from "./components/Form";
import { userInfo } from "os";

moment.locale("es");
const MODEL = {
  firstName: "",
  LastName: "",
  phoneNumber: "",
  email: "",
  FacebookId: "",
  dob: new Date(),
  interest: []
};

class App extends Component {
  state = {
    model: { ...MODEL },
    list:[]
  };

  handleChange = event => {
    console.log(event.target);
    const { name, value } = event.target;
    this.setState({
      model: {
        ...this.state.model,
        [name]: value
      }
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    // const { model } = this.state;
    const { dob, ...newModel } = this.state.model;
    //console.log(model.dob.getTime)
    //console.log(model.dob.getTime());
    //model.dob = model.dob.getTime();
    //const newModel = {
    //  ...model,
    //  dob: model.dob.getTime()
    //};

    save(newModel);
  };
  componentDidMount() {
    list((list) =>{
      console.log(list)
      this.setState({
        list
      })
    })
  }
  render() {
    const { classes } = this.props;
    const { model } = this.state;
    return (
      <MuiPickersUtilsProvider utils={MomentUtils} locale="es" moment={moment}>
        <div className={classes.container}>
          <div className={classes.wrapper}>
            <div className={classes.form}>
              <Form
                classes={this.props.classes}
                model={model}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
            </div>
            <div className={classes.list}>
              <Typography variant="display1">Lista de Usuarios</Typography>
              <List>
                {this.state.list.map((user,key) =>(
                  <ListItem button key={key}>
                  <ListItemText primary={ `${user.firstName} ${user.LastName}`}/>

                  </ListItem>
               ))}
                </List>
            </div>
          </div>
        </div>
      </MuiPickersUtilsProvider>
    );
  }
}

App = withStyles(styles)(App);

ReactDOM.render(<App />, document.getElementById("root"));
