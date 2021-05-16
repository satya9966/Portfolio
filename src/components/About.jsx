import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      
                      <h2 className="colorlib-heading">Know more about me!</h2>
                      <p>
                        I am an avid learner always trying to learn new skills and advance myself to become a great developer.
                      </p>
                      <p>My current skillset includes:</p>
                    </div>
                    <ul class="tag_list">
                      <li>Html & Css</li>
                      <li>JavaScript</li>
                      <li>React</li>
                      <li>MongoDB</li>
                      <li>Python</li>
                      <li>C++</li>
                      <li>C</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <h2 className="colorlib-heading">
                  Here are some of my expertise
                </h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon ">
                  
                  <i className="bi bi-globe"></i>
                  </span>
                  <div className="desc">
                    <h3>Web Development </h3>
                    <p>
                     Coding <b>personalised websites</b> using MERN stack that are efficient and fast.
                    </p>
                  </div>
                </div>
              </div>
              
              
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
