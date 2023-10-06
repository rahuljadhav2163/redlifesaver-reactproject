import React from "react";
import "./PreviewBlogCard.css"
import { Link } from 'react-router-dom'


function PreviewBlogCard({id, title, date,image,description}){
    return(
      
        <div className="preview-blog-card">
                        
       
        <img src={image} className="donor-image"/>
    <h1 className='card-title'>{title}</h1>
    <p>{description}</p>
    <h2 className='card-text'> {date}</h2>
    <div className="blog-link">
    <Link to={`/blog/read/${id}`}className="link">Read More</Link>
    </div>
    </div>
 
    )
}

export default PreviewBlogCard