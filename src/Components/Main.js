import React ,{Component} from "react";

import Title from './Title';
import PhotoWall from "./PhotoWall";
import { Simulate } from "react-dom/test-utils";






class Main extends Component{
  constructor(){
    super();
    this.state ={
      posts:[]
  }
  this.removePhoto=this.removePhoto.bind(this);
  }
    removePhoto(postRemoved){
      console.log(postRemoved.discription);
      this.setState((state)=>({
        posts:state.posts.filter(post=>post!==postRemoved)
      })
      )

    }
    componentDidMount(){
      const data=SimulateFetchFromDatabase();
      this.setState({
        posts:data
      })
    
    }
    render(){
      return(
        <div><Title title={'Photowall'}/>
       <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto}/>
              
               </div>
      )
    }
  }
  function SimulateFetchFromDatabase(){
    return [{
      id:"0",
      discription:"Cat",
      imageLink:"Image/image1.jpg"
    
    },{
      id:"1",
      discription:"Laptop with notebook",
      imageLink:"Image/image2.jpg"
    
    },
    {
      id:"2",
      discription:"Laptop",
      imageLink:"Image/image3.jpg"
    }]
  }
  export default Main;