import React from 'react'
import "./Blog.css"
import Blog from "./blog.json"
import PreviewBlogCard from './../../Component/PreviewBlogCard/PreviewBlogCard'

function Blogs() {
  return (
      <div >
          <h1 className='blog'>Blogs</h1>
<div className='blog-container'>
          {
              Blog.map((post, index) => {
                return(
                <PreviewBlogCard key={index} id={post.id} title={post.title} description={post.description}/>
                ) 
              })

          }
</div>
      </div>

  )
}

export default Blogs