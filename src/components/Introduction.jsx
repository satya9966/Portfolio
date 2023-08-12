import React, { Component } from "react";
import { Typewriter } from "react-typewriting-effect";
import "react-typewriting-effect/dist/index.css";

class Introduction extends Component {
  render() {
    return (
      <div>
        <section
          id="colorlib-hero"
          className="js-fullheight"
          data-section="home"
        >
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{ backgroundImage: "url(images/portfolio-bg.jpg)",opacity:'0.95' }}>
                <div className="overlay" style={{opacity:'0.3'}}></div>
                <div className="container-fluid" style={{backgroundColor:'rgba(0, 0,0, 0.3)'}}>
                  <div className="row d-flex justify-content-center">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div style={{fontSize:'50px',fontWeight:'900', color:'white'}}>
                          <h1 style={{color:'#e2a94b'}}>Hello !</h1>
                          <span><Typewriter
                            string="I'm Satya Rao Chowdary"
                            delay={150}
                            cursor=""
                          /></span>
                          <p className="mt-4">
                            <a
                              style={{color:'white'}}
                              className="btn btn-warning btn-lg"
                              href="https://drive.google.com/file/d/1iGr4lBFQJHaFSTQdqeRnmYJdwTkBp2rp/view?usp=sharing"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Resume{' '}
                              <i className="icon-download4" style={{color:'white'}} />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default Introduction;
