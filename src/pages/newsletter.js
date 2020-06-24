import React from 'react'
import Layout from '../components/Layout'
const NewsLetter = () => {
  return (
    <Layout>
      <section className="newsletter-page">
        <div className="page-center">
          <h2>Få alla de senaste nyheterna till din inbox</h2>
          <h4>Vi skriver till våra digitala vänner varje vecka </h4>
          <form
            className="contact-form"
            name="testing-contact"
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            action="/success"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="testing-contact" />
            <input
              type="text"
              name="name"
              placeholder="Ditt namn"
              className="form-control"
            />
            <input
              type="email"
              name="email"
              placeholder="Din Mailadress"
              className="form-control"
            />
            <button type="submit" className="btn form-control submit-btn">
              prenumerera
            </button>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default NewsLetter
