import React from 'react'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a
            href="https://twitter.com/ArtmeierJonas"
            className="icon fa-twitter"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/JonasArtmeier" className="icon fa-github">
            <span className="label">Github</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jonasartmeier/"
            className="icon fa-linkedin"
          >
            <span className="label">LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.xing.com/profile/Jonas_Artmeier/cv"
            className="icon fa-xing"
          >
            <span className="label">Xing</span>
          </a>
        </li>
        {/* <li>
          <a href="#" className="icon fa-dribbble">
            <span className="label">Dribbble</span>
          </a>
        </li> */}
        {/* <li>
          <a href="jonas-artmeier@web.de" className="icon fa-envelope-o">
            <span className="label">Email</span>
          </a>
        </li> */}
      </ul>
    </div>
  </div>
)

export default Footer
