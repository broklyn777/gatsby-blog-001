import React from 'react'
import Layout from '../components/Layout'
import Hero2 from '../components/Hero2'
import Navbar from '../components/Navbar'
import { Counter, LikeButton, RegVideo, Video } from '../components/Complete'

const about = () => {
  return (
    <Layout>
      <Navbar />

      <Hero2 />
      <section className="mdx-page">
        <div style={{ color: `#ffbc00` }}>
          <h1>GNAGET!!!!</h1>

          <Video src="https://www.youtube.com/embed/VqnTnDXb0X8" />
          <p>What a world.</p>
          <RegVideo src="https://www.youtube.com/embed/VqnTnDXb0X8" />
        </div>
      </section>
    </Layout>
  )
}

export default about
