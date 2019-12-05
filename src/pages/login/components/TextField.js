import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  textField: {
    width: 500
  },
}));

const ValidationTextField = withStyles({
  root: {
    "& input:valid + fieldset": {
      borderColor: "green",
      borderWidth: 2
    },
    "& input:valid:focus + fieldset": {
      borderLeftWidth: 6,
      padding: "4px !important" // override inline-style
    }
  }
})(TextField);

export default function UncontrolledTextField(props) {
    const classes = useStyles();
    const handleChange = event => {
        props.callback(event.target.value);
    }  
    return (
        <ValidationTextField
            error={props.error}
            className={classes.textField}
            onChange={handleChange}
            id="outlined-search"
            label={props.label}
            required
            type="search"
            margin="normal"
            variant="outlined"
        />
    );
}