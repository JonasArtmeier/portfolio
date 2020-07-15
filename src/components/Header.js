import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.png'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a className="image avatar" value="Jonas">
        <img src={avatar} alt="Jonas" />
      </a>
      <h1>
        <strong>My name is Jonas</strong> <br />I am an enthusiastic and
        ambitious IT Professional interested in emerging technologies and
        solutions that advance the Digital Transformation. <br />
        <br />
        <br />
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
