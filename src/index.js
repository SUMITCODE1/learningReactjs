import React from 'react';
import  ReactDOM  from 'react-dom';
const tasks=['sumit is good boy','you are creative','this is good for health'];
const element=React.createElement('ol',null,tasks.map((task,index)=>React.createElement('li',{key:index},task)));
ReactDOM.render(element,document.getElementById('root'));
