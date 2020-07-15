import React from 'react'
import Helmet from 'react-helmet'
import Gallery from '../components/Gallery'
import Layout from '../components/layout'

const HomeIndex = () => {
  const siteTitle = 'Gatsby Starter - Strata'
  const siteDescription = 'Site description'

  return (
    <Layout>
      <Helmet>
        <title>Jonas Artmeier</title>
        <meta
          name="description"
          content="find all inforamtion about Jonas Artmeier as a IT Strategy Consultant and Software Developer with a deep knowledge in Digital Transformation"
        />

        <meta property="og:title" content="Jonas Artmeier - Portfolio" />
        <meta
          property="og:image"
          content="https://amazing-wilson-fa6a47.netlify.app/static/avatar-1deef899cc5860533a54e00b17dc475e.png/"
        />
        <meta
          property="og:description"
          content="Find all inforamtion about Jonas Artmeier as an IT Strategy Consultant and Software Developer with a deep knowledge in Digital Transformation"
        />
        <meta
          property="og:url"
          content="https://amazing-wilson-fa6a47.netlify.app/"
        />
        <meta name="twitter:title" content="Jonas Artmeier - Portfolio" />
        <meta
          name="twitter:description"
          content="Find all inforamtion about Jonas Artmeier as an IT Strategy Consultant and Software Developer with a deep knowledge in Digital Transformation"
        />
        <meta name="twitter:image" content="../assets/images/avatar.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <img
        style={{ display: 'none' }}
        src={require('../assets/images/avatar.png')}
        alt="Titelbild Artikel"
      ></img>
      <div id="main">
        <section id="one">
          <header className="major">
            <h2>
              What is my task
              <br />
            </h2>
          </header>
          <p>
            In times like these, the need for emerging technologies is even more
            important than usually and I am here to support companies to
            develope and use this technologies. <br />
            <br />I earned a Bachelor’s degree in Sales and Management, which
            qualifies me for business administration roles. In my 10+ years of
            professional experience in global IT companies, namely Oracle, IBM
            and Ingram Micro, I gained a broad knowledge of emerging
            technologies in areas like IoT or Cloud Computing. Since I worked
            for these multinational companies in Germany, Austria and Ireland, I
            bring broad insights into the global business partner landscape in
            the IT industry with me. <br />
            To acquire a deeper technical understanding about IT infrastructure
            and code I successfully completed my training as Full Stack Web
            Developer. This enabled me to work independently on web projects in
            the front-, and backend.
            <br />
            <br />
            My goal is to take the next step into digitalization together with
            you.That means we develop a strategy and define the next projects to
            ensure that you will remain successful in the future. I will gladly
            implement these projects successfully for you.
          </p>
        </section>

        <section id="two">
          <h2>My Tech Stack</h2>
          <p>
            - HTML - CSS <br />- JavaScript <br />- TypeScript <br />- React and
            React Native <br />- Node.js <br />- Next.js <br />- GraphQL <br />-
            PostgreSQL <br />- MongoDB <br />- Google Firebase and Firestore{' '}
            <br />- Google Analytics <br />- Docker <br />- Technical SEO <br />
            - AWS, Azure, Heroku and Netlify <br />- GitHub and GitLab <br />-
            Testing
          </p>
        </section>

        <section id="two">
          <h2>My Articles</h2>

          {/* <Gallery /> */}
          <h3>
            Why I left my job in IT sales to acquire the skill set of a Full
            Stack Web Developer.
          </h3>
          <div>
            <a href="https://www.linkedin.com/pulse/why-i-left-my-job-sales-acquire-skill-set-full-stack-web-artmeier/">
              <img
                style={{ width: '200px' }}
                src={require('../assets/images/Titelbild.png')}
                alt="Titelbild Artikel"
              />
            </a>
          </div>
        </section>

        <section id="two">
          <h2>Code Projects</h2>

          {/* <Gallery /> */}

          <ul className="actions"></ul>
        </section>

        <section id="three">
          <h2>Get In Touch</h2>
          <p>just drop me a message</p>
          <div className="row">
            <div className="8u 12u$(small)">
              <form method="post" action="#">
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="12u">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <ul className="actions" style={{ marginTop: 30 }}>
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </form>
            </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-home">
                    <span className="label">Address</span>
                  </h3>
                  Pohlgasse 16 / 2 / 10
                  <br />
                  1120 Vienna
                  <br />
                  Austria
                </li>
                <li>
                  <h3 className="icon fa-mobile">
                    <span className="label">Phone</span>
                  </h3>
                  +43 690 10012397
                </li>
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="jonas-artmeier@web.de">jonas-artmeier@web.de</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
