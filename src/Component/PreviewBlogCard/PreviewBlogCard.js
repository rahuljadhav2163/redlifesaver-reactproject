import React from "react";
import "./PreviewBlogCard.css"
import { Link } from 'react-router-dom'

function PreviewBlogCard({id, title, description}){
    return(
        <div className="main-component">
        <div className="preview-blog-card">
                        
        <h1>{id}</h1>
    <h1 className='card-title'>{title}</h1>
    
    <h2 className='card-text'> {description}</h2>
    <Link to={`/post/read/${id}`}>Read More</Link>
    </div>
    </div>
    )
}

export default PreviewBlogCard