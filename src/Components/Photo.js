import React from "react";

function Photo(props){
        const post=props.post;
        return <figure class="figure"> 
            <img className="photo" src={post.imageLink} alt={post.discription}/>
            <figcaption><p>{post.discription}</p></figcaption> 
            <div className="button-container">
            <button className="remove-button">Remove</button>
            </div>
                        </figure>
                       
    }

export default Photo;