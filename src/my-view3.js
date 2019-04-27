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
        <p><a target="_blank" rel="noopener noreferrer" href="https://www.webcomponents.org/collection/PolymerElements/iron-elements">PolymerElements/iron-elements</a></p>
      
      <div class="card">  <!--iron-behaviors-collection Start-->
        <h1>iron-behaviors-collection</h1>
        <p><a target="_blank" rel="noopener noreferrer" href="https://www.webcomponents.org/collection/PolymerElements/iron-behaviors-collection">.../iron-behaviors-collection</a></p> 
      
        <div class="card">
          <h1>IronMenuBehavior & IronMenubarBehavior</h1>  <!--#Start-->
          
          <style>
        :host > ::slotted(*) {
          display: block;
        }
 
        :host > ::slotted(.iron-selected) {
          color: white;
          background-color: var(--google-blue-500);
        }
      </style> 
 
      <slot></slot>

        </div>  <!--#Ende-->

        <div class="card">
          <h1>...</h1>
        </div>
      </div> <!--iron-behaviors-collection Ende-->
    `;
  }
}

window.customElements.define('my-view3', MyView3);
