/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

import '@polymer/paper-icon-button/paper-icon-button.js';

class MyView3 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
        </style>
        <p><a target="_blank" rel="noopener noreferrer" href="https://www.webcomponents.org/author/PolymerElements">PolymerElements</a></p>
      
      <div class="card">
        <div class="card">
          <h1>paper-icon-button</h1>
          <p><paper-icon-button icon="favorite"></paper-icon-button> &#8592 Button</p>
        </div>
      
        <div class="card">
          <h1>...</h1>
        </div>
      </div>
      
 
    `;
  }
}

window.customElements.define('my-view3', MyView3);
