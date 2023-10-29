import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Blog from "./../../Views/Blog/Blog.json"
import "./ReadBlog.css"
import Navbar from "./../../Component/Navbar/Navbar";
import Footer from "./../../Component/Footer/Footer"

function ReadBlog(image){
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
        <>
        <Navbar/>
        <div className="blood-blog-container">
<div className="img-desc-container">
            <div className="image-container">
            <img src={post.image} className="blood-blog-image" />
          </div>

          <div className="blood-blog-des-container">
            <h1 className="blood-blog-titles" >{post.title}</h1>
            <p className="blood-blog-description">{post.description}</p>
            </div>
            </div>
            </div>
            <div className="title-desc-container">
            <h1 className="blood-blog-title">{post.title1}</h1>
            <p className="blood-blog-description">{post.description1}</p>
            <h1 className="blood-blog-title">{post.title2}</h1>
            <p className="blood-blog-description">{post.description2}</p>
            
            </div>
        <Footer/>
        </>
    )
        
    
   
    
}

export default ReadBlog