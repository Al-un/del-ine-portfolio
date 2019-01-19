import React, { Component } from 'react';
import InspirationContainer from '../containers/InspirationContainer';
import ResumeContainer from '../containers/ResumeContainer';

export default class AboutPage extends Component {
  render() {
    return (
      <div className="pf-page">
        <div>
          <h1>on the label</h1>
          <div className="resume-container two-columns-container">
            <div className="two-columns-left">
              <p>
                frontend design / UX UI / graphic design / travel enthusiast
              </p>
            </div>

            <div className="two-columns-right">
              <ResumeContainer />
            </div>
          </div>
        </div>

        <h1>A glance at my inspiration while traveling.</h1>
        <p>
          A lot of work involves hand-writting, sketches, patterns, textures,
          stamps-like etc.
        </p>
        <InspirationContainer />
      </div>
    );
  }
}
