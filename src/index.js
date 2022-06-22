import React from 'react';
import  ReactDOM  from 'react-dom';
const tasks=['sumit is good boy','you are creative','this is good for health'];
const element=<div>
  <h1>Task List</h1>
   <ol>
        {tasks.map((task,index)=><li key={index}>{task}</li>)}
        <li>hello sumit kumar </li>
        <li>{tasks[0]}</li>
        <li>{tasks[1]}</li>
        <li>{tasks[2]}</li>
</ol>
</div>
ReactDOM.render(element,document.getElementById('root'));
