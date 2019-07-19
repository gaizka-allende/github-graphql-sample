import React from 'react';

import {
  ApolloProvider
} from 'react-apollo-hooks';
import {ApolloClient} from 'apollo-client';

import {createHttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

import {makeStyles} from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';

import UserSearch from './components/userSearch';

// import Style from './App.scss';

//eslint-disable-next-line
console.log(process.env);

export const client = new ApolloClient({
  link: createHttpLink({
    uri: 'https://api.github.com/graphql',
    headers: {
      /* authorization: `Bearer ${
        process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
      }`,*/
      authorization: 'bearer aa00a254a34304f4c2cdff129e0a47c15569b3c6'
    }
  }),
  cache: new InMemoryCache({addTypename: false})
});

const useStyles = makeStyles({
  paper: {
    width: '75%',
    maxWidth: '450px',
    margin: '10px auto',
    textAlign: 'right'
  }
});

const App = () => {
  const classes = useStyles();
  return (
    <ApolloProvider client={client}>
      <Paper
        className={classes.paper}
      >
        <UserSearch/>
      </Paper>
    </ApolloProvider>
  );
};

export default App;
