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

export const user = gql`
  query user (
    $login: String!
  ) {
    user(
      login: $login
    ) {
      contributionsCollection {
        commitContributionsByRepository {
          repository{
            name
          },
          contributions (
            first: 20,
            orderBy:{
              field: OCCURRED_AT,
              direction: DESC
            }
          ) {
            nodes{
              occurredAt,
              commitCount
            }
          }
        }
      }
    }
  }
`;

export default function UserContributions({
  login
}) {

  const {data, loading} = useQuery(
    user,
    {
      variables: {
        login
      }
    }
  );

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <div>
      {
        data
          .user
          .contributionsCollection
          .commitContributionsByRepository
          .map(
            ({repository, contributions}) => (
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>{repository.name}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    contributions.nodes.map(
                      ({commitCount, occurredAt}) => (
                        <TableRow
                          key={commitCount}
                        >
                          <TableCell>
                            {occurredAt}
                          </TableCell>
                        </TableRow>
                      )
                    )
                  }
                </TableBody>
              </Table>
            )
          )
      }
    </div>
  );
}

