// ----- Package Imports ----- //
import React, { Component } from 'react';
// ----- File Imports ----- //
// ----- End Imports ----- //

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <h1>{`I'm António Branco,`}</h1>
        <p>
          {`And I am classified as a Junior Web Developer and I am
          interested in working in full-time or in a professional
          internship at your company. I have always been
          passionate about technologies and curious to learn
          more. I openned my first pc to see how everything
          worked when I was a kid and I haven't stopped since. I
          took a professional programming course, studied
          whenever I had the opportunity, to learn more advanced
          technologies, I started university but I ended up
          leaving to study web development on my own where I
          learned technologies such as HTML, CSS (SASS), JS (ES6,
          React.js , FP), Git and Node (currently). I am looking
          for a job with the aim of improving my skills and
          starting my professional career.`}
        </p>
      </div>
    );
  }
}
