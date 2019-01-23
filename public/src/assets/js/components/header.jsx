// ----- Package Imports ----- //
import React, { Component } from 'react';
// ----- File Imports ----- //
import smallLogo from '../../img/small_Logo.svg';
import signiture from '../../img/Signiture.svg';
// ----- End Imports ----- //
// const doneLoading = () => {
//   setTimeout(() => {

//     console.log('done');
//   }, 0);
// };
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <a className="logo" href="./">
          <img src={smallLogo} className="logoImg" />
        </a>
        <div className="signiture-quote">
          <img src={signiture} className="signiture" />
          <h3 className="quote">
            Intelligence without ambition is a bird without wings
            <br />
            <b>- Salvador Dali</b>
          </h3>
        </div>
      </div>
    );
  }
}
