/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer';
import './shared-styles.js';

import '@polymer/paper-checkbox/paper-checkbox.js'; //paper-checkbox
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js'; //paper-dropdown-menu
import '@polymer/paper-item/paper-item.js'; //paper-dropdown-menu
import '@polymer/paper-listbox/paper-listbox.js'; //paper-dropdown-menu

class MyView2 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>
      <p><a target="_blank" rel="noopener noreferrer" href="https://www.webcomponents.org/author/PolymerElements/paper-elements">PolymerElements</a></p>
      
      <div class="card">
        <h1>paper-input-elements</h1>
      <div class="card">
        <h1>paper-checkbox</h1>
        <paper-checkbox>Unchecked</paper-checkbox>
        <paper-checkbox checked>Checked</paper-checkbox>
        <paper-checkbox disabled>Disabled</paper-checkbox>
      </div>
      <div class="card">

        <h1>paper-dropdown-menu</h1>

        <paper-dropdown-menu label="Dinosaurs">
        <paper-listbox slot="dropdown-content" class="dropdown-content">
          <paper-item>allosaurus</paper-item>
          <paper-item>brontosaurus</paper-item>
          <paper-item>carcharodontosaurus</paper-item>
          <paper-item>diplodocus</paper-item>
        </paper-listbox>
        </paper-dropdown-menu
      
      </div>
      
      <div class="card">

        <h1>...</h1>
      
      </div>
      
      <div class="card">

        <h1>...</h1>
      
      </div>
      
      <div class="card">

        <h1>...</h1>
      
      </div>
      
      <div class="card">

        <h1>...</h1>
      
      </div>
      
      <div class="card">

        <h1>...</h1>
      
      </div>
     
    `;
  }
}

window.customElements.define('my-view2', MyView2);
