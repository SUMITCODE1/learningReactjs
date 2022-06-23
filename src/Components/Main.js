import React ,{Component} from "react";

import Title from './Title';
import PhotoWall from "./PhotoWall";






class Main extends Component{
  constructor(){
    super();
    this.state ={
      posts:[{
      id:"0",
      discription:"beautyful landscape",
      imageLink:"Image/image1.jpg"
    
    },{
      id:"1",
      discription:"Alien ??",
      imageLink:"Image/image2.jpg"
    
    },
    {
      id:"2",
      discription:"On a vaction",
      imageLink:"Image/image3.jpg"
    }
    ]
  }
  }
    render(){
      return(
        <div><Title title={'Photowall'}/>
       <PhotoWall posts={this.state.posts}/>
              
               </div>
      )
    }
  }
  export default Main;