import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.png'

const Header = () => (
  <header id="header">
    <meta
      name="description"
      content="find all inforamtion about Jonas Artmeier as a IT Strategy Consultant and Software Developer with a deep knowledge in Digital Transformation"
    />
    <meta
      name="image"
      content="https://amazing-wilson-fa6a47.netlify.app/static/avatar-1deef899cc5860533a54e00b17dc475e.png/"
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
    <div className="inner">
      <a
        href="../assets/images/avatar.png"
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
