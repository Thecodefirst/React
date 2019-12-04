import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  textField: {
    width: 500
  },
}));

export default function UncontrolledTextField(props) {
    const classes = useStyles();
    const handleChange = event => {
        props.callback(event.target.value);
    }  
    return (
        <TextField
            className={classes.textField}
            onChange={handleChange}
            id="outlined-search"
            label="Search field"
            type="search"
            margin="normal"
            variant="outlined"
        />
    );
}