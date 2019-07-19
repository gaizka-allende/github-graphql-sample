import {hot} from 'react-hot-loader/root';
import axios from 'axios';
import React from 'react';
import {render} from 'react-dom';
import App from './App';

const HotApp = hot(App);

export const mount = async function () {
  const Response = await axios.get('https://api.github.com/search/users?q=tom+repos:%3E42+followers:%3E1000');
  const JSON = await Response.data;
  render(
    <HotApp JSON={JSON}/>,
    document.getElementById('root')
  );
};

mount();

