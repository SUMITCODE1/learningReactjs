import React from 'react';
import  ReactDOM  from 'react-dom';
const element=React.createElement('ol',null,
React.createElement('li',null,'sumit is good boy'),
React.createElement('li',null,'this is good for health'),
React.createElement('li',null,'you are creative boy'));
ReactDOM.render(element,document.getElementById('root'));
