// ----- Package Imports ----- //
import React, { Component } from 'react';
// ----- File Imports ----- //
// ----- End Imports ----- //

export default function About() {
  return (
    <div className="form">
      <form
        action="https://formspree.io/me@anthonywhite.eu"
        method="POST"
      >
        <div className="form-group">
          <label htmlFor="input" className="control-label">
            Name
          </label>
          <input type="text" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="input" className="control-label">
            Email
          </label>
          <input type="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="input" className="control-label">
            Budget
          </label>
          <input
            type="range"
            step="1"
            min="8000"
            max="80000"
            name="budget"
            id="budgetslider"
          />
        </div>
        <div className="form-group">
          <textarea name="message" rows="4" required />
        </div>
        <button type="submit" value="Send">
          Send
        </button>
      </form>
    </div>
  );
}
