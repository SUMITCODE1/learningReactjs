import React ,{Component} from "react";

import Title from './Title';
import PhotoWall from "./PhotoWall";
import { Simulate } from "react-dom/test-utils";
import AddPhoto from "./AddPhoto";







class Main extends Component{
  constructor(){
    super();
    this.state ={
      posts:[{
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
      }],
      screen:'photos'
  }
  this.removePhoto=this.removePhoto.bind(this);
  this.navigate=this.navigate.bind(this);
  }
    removePhoto(postRemoved){
      console.log(postRemoved.discription);
      this.setState((state)=>({
        posts:state.posts.filter(post=>post!==postRemoved)
      })
      )


    }
    navigate(){
      this.setState({
        screen:'addPhoto'
      })
    }
    componentDidUpdate(prevProps,prevState){
      console.log(prevState.posts);
      console.log(this.state);
    
    }
    render(){
      return(
        <div>
          {
            this.state.screen==='photos' &&(
          <div>
          <Title title={'Photowall'}/>
          <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate={this.navigate}/>
          </div>
            )
    }
    {
        this.state.screen ==='addPhoto' &&(
        <div>
            <AddPhoto/>
        </div>  
        )
      
    }
               </div>
      )
    }
  }
  
  export default Main;