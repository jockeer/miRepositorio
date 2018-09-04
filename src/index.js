import React, { Component } from "react";
import ReactDOM from "react-dom";
import { withStyles } from "@material-ui/core/styles";
import MomentUtils from "material-ui-pickers/utils/moment-utils";
import MuiPickersUtilsProvider from "material-ui-pickers/utils/MuiPickersUtilsProvider";
import moment from "moment";
import "moment/locale/es";


import save from "./services/database";
import styles from "./styles";
import Form from "./components/Form";

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
    model: { ...MODEL }
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
    const { dob, ...newModel} = this.state.model
    //console.log(model.dob.getTime)
    //console.log(model.dob.getTime());
    //model.dob = model.dob.getTime();
    //const newModel = {
    //  ...model,
    //  dob: model.dob.getTime()
    //};

    save(newModel);
  };
  render() {
    const { model } = this.state;
    return (
      <MuiPickersUtilsProvider utils={MomentUtils} locale="es" moment={moment}>
        <Form
          classes={this.props.classes}
          model={model}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </MuiPickersUtilsProvider>
    );
  }
}

App = withStyles(styles)(App);

ReactDOM.render(<App />, document.getElementById("root"));
