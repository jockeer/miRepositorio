import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import DatePicker from "material-ui-pickers/DatePicker";
import MenuItem from "@material-ui/core/MenuItem";

const INTEREST = [
  { value: "js", name: "Javascript" },
  { value: "fb", name: "Firebase" },
  { value: "le", name: "Aprender" },
  { value: "sh", name: "Compartir" }
];
export default class Form extends Component {
  render() {
    const { model } = this.props;
    const classes = this.props.classes;
    return (
      <form className={classes.paperContainer} onSubmit={this.props.handleSubmit}>
        <Paper className={classes.container}>
          <Typography variant="display1" color="primary">
            Registro de la comunidad
          </Typography>
          <TextField
            label="nombre"
            value={model.firstName}
            onChange={this.props.handleChange}
            name="firstName"
            fullWidth
            className={classes.textField}
          />
          <TextField
            label="Apellido"
            value={model.LastName}
            onChange={this.props.handleChange}
            name="LastName"
            fullWidth
            className={classes.textField}
          />
          <TextField
            label="Celular"
            value={model.phoneNumber}
            onChange={this.props.handleChange}
            name="phoneNumber"
            type="number"
            fullWidth
            className={classes.textField}
          />
          <TextField
            label="Correo"
            value={model.email}
            onChange={this.props.handleChange}
            name="email"
            type="email"
            fullWidth
            className={classes.textField}
          />
          <TextField
            label="Facebook"
            value={model.FacebookId}
            onChange={this.props.handleChange}
            name="FacebookId"
            fullWidth
            className={classes.textField}
          />
          <DatePicker
            type="date"
            label="Fecha de Nacimiento"
            fullWidth
            onChange={date => {
              console.log(date);
              const event = {
                target: {
                  name: "dob",
                  value: date.format("YYYY-MM-DD")
                }
              };
              this.props.handleChange(event);
            }}
            name="dob"
            value={model.dob}
          />
          <TextField
            select
            label="Interes"
            name="interest"
            SelectProps={{
              multiple: true
            }}
            fullWidth
            value={model.interest}
            className={classes.textField}
            onChange={this.props.handleChange}
          >
            {INTEREST.map(item => (
              <MenuItem key={item.value} value={item.value}>
                {item.value}
              </MenuItem>
            ))}
          </TextField>

          <Button variant="contained" color="primary" fullWidth type='submit'>
            Primary
          </Button>
        </Paper>
      </form>
    );
  }
}
