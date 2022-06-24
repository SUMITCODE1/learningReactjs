import React,{Component} from "react";

function AddPhoto(){
    return (
        <div>
            <h1>PhotoWall</h1>
            <div className="form">
                <form>
                    <input type="text" placeholder="Link"/>
                    <input type="text" placeholder="description"/>
                    <button>Post</button>
                </form>
            </div>


        </div>
    )
}
    

export default AddPhoto;