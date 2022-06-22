import React from 'react';
import  ReactDOM  from 'react-dom';
const tasks=['sumit is good boy','you are creative','this is good for health'];
const element=React.createElement('ol',null,tasks.map((task)=>React.createElement('li',null,task)));
ReactDOM.render(element,document.getElementById('root'));
