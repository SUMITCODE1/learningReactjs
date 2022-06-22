import React,{Component} from 'react';
import  ReactDOM  from 'react-dom';
const tasks=['sumit is good boy','you are creative','this is good for health'];


class List extends Component{
  render(){
    return(<ol>
      {tasks.map((task,index)=><li key={index}>{task}</li>)}
      </ol>)
  }
}

class Title extends Component{
  render(){
    return (<h1>Title list</h1>)
  }
}

class Main extends Component{
  render(){
    return(
      <div><Title/>
             <List/>
             </div>
    )
  }
}
ReactDOM.render(<Main/>,document.getElementById('root'));
