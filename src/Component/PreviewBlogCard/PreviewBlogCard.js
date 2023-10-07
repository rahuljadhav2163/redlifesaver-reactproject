import React from "react";
import "./PreviewBlogCard.css"
import { Link } from 'react-router-dom'


function PreviewBlogCard({id, title, date,image,description}){
    return(
      
        <div className="preview-blog-card">
                        
       
        <img src={image} className="donor-image"/>
    <h1 className='card-title'>{title}</h1>
    <p className="preview-description">{description}</p>
    <div className="date-read-container">
    <div>
    <p className='card-text'> {date}</p>
    </div>
    <div className="blog-link">
    <Link to={`/blog/read/${id}`}className="link">Read More</Link>
    </div>
    </div>
    </div>
    )
}

export default PreviewBlogCard