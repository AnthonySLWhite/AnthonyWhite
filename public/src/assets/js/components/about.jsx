// ----- Package Imports ----- //
import React, { Component } from 'react';
import marked from 'marked';
// ----- File Imports ----- //
// ----- End Imports ----- //

const aboutBody = marked(
  `# I'm António Branco, a self taught-Developer,
  
  I've always been a guy who wants to learn more and more everyday.

  Being passionate for programming and having the freedom to create, I developed and/or maintained a few projects online, creating more and more as time passes.
  
  -------------------
  At the moment my skills range between: 
  - Developing **Front-End** and **Back-End** Web-Apps using a more **functional programming logic** 
  - Working with **Servers** like MongoDB and MySQL 
  - **Design** like this website, CV and others
  - **Project management** using techniques like **SCRUM**
  `,
);

export default function About() {
  return (
    <div
      className="about"
      dangerouslySetInnerHTML={{
        __html: aboutBody,
      }}
    />
  );
}
