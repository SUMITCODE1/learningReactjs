import React ,{Component} from "react";
import List from './List';
import Title from './Title';



class Main extends Component{
    render(){
      return(
        <div><Title title={'toDo'}/>
        <List tasks={['Aniket is my guru ji','He is good empo in mindtree']}/>
              
               </div>
      )
    }
  }
  export default Main;