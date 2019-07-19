import React from 'react';

import {storiesOf} from '@storybook/react';
import 'storybook-addon-material-ui/register';

import {MockedProvider} from 'react-apollo/test-utils';

import UserSearch from '../src/components/userSearch';

storiesOf('User search', module)
  .add(
    'initial view',
    () => (
      <MockedProvider>
        <UserSearch />
      </MockedProvider>
    )
  );

