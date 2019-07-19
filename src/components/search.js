import React, {
  useState
} from 'react';

import {makeStyles} from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  search: {
    display: 'flex',
    alignItems: 'end',
    justifyContent: 'space-around'
  }
});

export default function Search({
  onClick
}) {
  const classes = useStyles();
  const [name, setName] = useState('');
  return (
    <div
      className={classes.search}
    >
      <TextField
        id="userName"
        label="Name"
        value={name}
        onChange={
          event => {
            setName(event.target.value);
          }
        }
        margin="normal"
      />
      <Button
        disabled={name === ''}
        variant="contained"
        color="primary"
        onClick={
          () => {
            onClick(name);
          }
        }>
        Search
      </Button>
    </div>
  );
}
