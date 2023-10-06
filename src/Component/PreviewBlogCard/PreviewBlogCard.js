import React from "react";
import "./PreviewBlogCard.css"
import { Link } from 'react-router-dom'


function PreviewBlogCard({id, title, date,image}){
    return(
      
        <div className="preview-blog-card">
                        
       
        <img src={image} className="donor-image"/>
    <h1 className='card-title'>{title}</h1>
    
    <h2 className='card-text'> {date}</h2>
    <Link to={`/blog/read/${id}`}className="link">Read More</Link>
    </div>
 
    )
}

export default PreviewBlogCard