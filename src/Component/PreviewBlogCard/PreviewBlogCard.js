import React from "react";
import "./PreviewBlogCard.css"
import { Link } from 'react-router-dom'

function PreviewBlogCard({id, title, date,image}){
    return(
        <div className="main-component">
        <div className="preview-blog-card">
                        
       
        <img src={image} className="donor-image"/>
    <h1 className='card-title'>{title}</h1>
    
    <h2 className='card-text'> {date}</h2>
    <Link to={`/blog/read/${id}`}>Read More</Link>
    </div>
    </div>
    )
}

export default PreviewBlogCard