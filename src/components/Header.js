import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.png'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a
        href="https://amazing-wilson-fa6a47.netlify.app/static/avatar-1deef899cc5860533a54e00b17dc475e.png"
        className="image avatar"
        value="Jonas"
      >
        <img src={avatar} alt="Jonas" />
      </a>
      <h1>
        <strong>My name is Jonas</strong> <br />
        I am an enthusiastic and ambitious IT Professional interested in
        emerging technologies and solutions that advance the Digital
        Transformation. <br />
        <br />
        <br />
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
