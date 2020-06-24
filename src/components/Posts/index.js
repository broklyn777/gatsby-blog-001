import React from 'react'
import Post from './Post'
import Banner from '../Banner'
const Posts = ({ posts, title }) => {
  // Parantes???
  return (
    <section className="posts">
      <h3 className="posts-title">{title}</h3>
      <div className="posts-center">
        {/* post kolumn */}
        <article>
          {posts.map(post => {
            return <Post key={post.id} {...post} />
          })}
        </article>
        {/* Banner kolumn */}
        <article>
          <Banner />
        </article>
      </div>
    </section>
  )
}

export default Posts
