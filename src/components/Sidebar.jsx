import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/IMG_0710_resize.JPG)'}} />
              <h3 id="colorlib-logo"><a href="index.html"> Satya Rao Chowdary</a></h3>
              
              <span className="email"><i className="icon-mail"></i> satyarao9966@gmail.com</span>
              <br/>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
              <li><a href="https://github.com/satya9966" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i>GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/satya-rao-chowdary-kantipudi" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" />linkedin</a></li>
              </ul>
            </nav>
            
          </aside>
        </div>
    )
  }
}
