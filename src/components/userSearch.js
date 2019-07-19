import React, {
  useState
} from 'react';

import {makeStyles} from '@material-ui/styles';

import Divider from '@material-ui/core/Divider';

import Search from './search';
import Users from './users';
import UserContributions from './userContributions';

const useStyles = makeStyles({
  divider: {
    marginTop: '32px',
    marginBottom: '32px'
  }
});

export default function UserSearch() {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  return (
    <>
      <Search
        onClick={
          (searchName) => {
            setName(searchName);
            setLogin('');
          }
        }
      />
      <Divider
        className={classes.divier}
      />
      {
        !!(name !== '' && login === '') && (
          <Users
            name={name}
            onClick={
              (login) => {
                setLogin(login);
              }
            }
          />
        )
      }
      {
        login !== '' && (
          <UserContributions
            login={login}
          />
        )
      }
    </>
  );
}

