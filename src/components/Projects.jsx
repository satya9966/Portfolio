import React, { Component } from "react";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-work" data-section="projects">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <h2 className="colorlib-heading animate-box">
                  Recent Projects
                </h2>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-5 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/youtube-screenshot.png)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="https://yt-clone-react.netlify.app/">Youtube Clone-React</a>
                      </h3>
                    <span>ReactJS and Youtube API</span>
                    </div>
                  </div>
                </div>
              </div>
              
              
            </div>
          </div>
        </section>
<section className="colorlib-work" data-section="projects">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <h2 className="colorlib-heading animate-box">
                  Recent Projects
                </h2>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-5 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/youtube-screenshot.png)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="https://yt-clone-react.netlify.app/">Youtube Clone-React</a>
                      </h3>
                    <span>ReactJS and Youtube API</span>
                    </div>
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
