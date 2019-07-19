import React from 'react';

import {
  useQuery
} from 'react-apollo-hooks';
import gql from 'graphql-tag';

import CircularProgress from '@material-ui/core/CircularProgress';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';

export const search = gql`
  query search(
    $query: String!
  ) {
    search (
      query: $query,
      type: USER,
      first: 50
    ){
      edges {
        node {
          ... on User {
            name
            login
            avatarUrl
          }
        }
      }
    }
  }
`;

export default function Users({
  name,
  onClick
}) {
  const {data, loading} = useQuery(
    search,
    {
      variables: {
        query: name
      }
    }
  );

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            data.search.edges.map(
              ({node}) => (
                <TableRow
                  key={node.login}
                  onClick={
                    () => {
                      onClick(node.login);
                    }
                  }
                >
                  <TableCell
                    component="th"
                    scope="row">
                    <Avatar
                      src={node.avatarUrl} />
                  </TableCell>
                  <TableCell>
                    {node.name}
                  </TableCell>
                </TableRow>
              )
            )
          }
        </TableBody>
      </Table>
    </div>
  );
}
