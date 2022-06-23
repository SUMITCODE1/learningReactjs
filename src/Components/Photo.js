import React,{Component} from "react";

class Photo extends Component{
    render(){
        const post=this.props.post;
        return <figure class="figure"> 
            <img src={post.imageLink} alt="image"/>
                        </figure>
    }
}
export default Photo;