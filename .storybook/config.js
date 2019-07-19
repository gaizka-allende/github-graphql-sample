import React from 'react';
import {
  addParameters,
  addDecorator,
  configure
} from '@storybook/react';
import {themes} from '@storybook/theming';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);


const ScreenDecorator = story => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh'

    }}>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        height: '100%'
      }}>
      <div
        style={{
          display: 'flex',
          position: 'relative',
          width: '100%'
        }}>
        <div
          style={{
            flexGrow: 1,
            overflow: 'auto',
            position: 'relative',
            backgroundColor: 'white',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: 16,
            paddingRight: 16,
            paddingBottom: 16,
            height: '100%'
          }}>
          <div>
            <div
              style={{
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                padding: `32px 32px`
              }}>
              { story() }
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

addDecorator(ScreenDecorator);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addParameters({
  options: {
    theme: themes.dark,
  },
});
configure(loadStories, module);
