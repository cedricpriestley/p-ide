/**
 * @license
 * Copyright (c) 2018 TBD. All rights reserved.
 * This code is licensed under the GPLv2 style license found at https://github.com/cedricpriestley/p-ide/blob/master/LICENSE
 * The complete set of authors may be found at https://github.com/cedricpriestley/p-ide/blob/master/AUTHOR
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 */

// Import LitElement base class and html helper function
import { LitElement, html } from 'lit-element';

export class LazyElement extends LitElement {
  /**
   * Define a template for the new element by implementing LitElement's
   * `render` function. `render` must return a lit-html TemplateResult.
   */
  render() {
    return html`
      <style>
        :host { display: block; }
        :host([hidden]) { display: none; }
      </style>
      <p>You like pie.</p>
    `;
  }
}
// Register the element with the browser
customElements.define('lazy-element', LazyElement);
