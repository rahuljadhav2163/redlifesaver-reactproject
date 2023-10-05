import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Blog from "./../Blog/blog.json"
import "./ReadBlog.css"

function ReadBlog(){
    const {id}=useParams({})

const [post, setPost]=useState({})

useEffect(()=>{
    Blog.forEach((postObj) => {
        if(postObj.id==id){
            setPost(postObj)
        }
    })
},[id])

    return(
        <div>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            
        </div>
    )
        
    
   
    
}

export default ReadBlog