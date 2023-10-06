import React from 'react'
import "./Blog.css"
import Blog from "./Blog.json"
import PreviewBlogCard from './../../Component/PreviewBlogCard/PreviewBlogCard'
import Navbar from './../../Component/Navbar/Navbar'
import Footer from './../../Component/Footer/Footer'

function Blogs() {
  return (
      <div>
        <Navbar/>
          <h1 className='blog'>Blog's</h1>
<div className='blog-container'>
          {
              Blog.map((post, index) => {
                return(
                <PreviewBlogCard key={index} id={post.id} title={post.title} date={post.date} image={post.image} description={post.description}/>
                ) 
              })

          }
          <Footer/>
</div>

      </div>

  )
}

export default Blogs