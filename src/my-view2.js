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
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js'; //paper-dropdown-menu added
import '@polymer/paper-item/paper-item.js'; //paper-dropdown-menu added
import '@polymer/paper-listbox/paper-listbox.js'; //paper-dropdown-menu added & paper-listbox added

import '@polymer/paper-input/paper-input.js'; //paper-input added

import '@polymer/paper-radio-button/paper-radio-button.js'; //paper-radio-button added
import '@polymer/paper-radio-group/paper-radio-group.js'; //paper-radio-button-group added

import '@polymer/paper-slider/paper-slider.js'; //paper-slider added

import '@polymer/paper-toggle-button/paper-toggle-button.js'; //paper-toggle-button added

import '@polymer/paper-dialog/paper-dialog.js'; //paper-dialog added

import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class.js';
import { PaperDialogBehavior } from '@polymer/paper-dialog-behavior/paper-dialog-behavior.js';


class MyView2 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>
      <p><a target="_blank" rel="noopener noreferrer" href="https://www.webcomponents.org/collection/PolymerElements/paper-elements">PolymerElements/paper-elements</a></p>

      <!--paper-input-elements-->

      <div class="card">
        <h1>paper-input-elements</h1>
        <p><a target="_blank" rel="noopener noreferrer" href="https://www.webcomponents.org/collection/PolymerElements/paper-input-elements">PolymerElements/paper-elements/paper-input-elements</a></p>
        
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
           </paper-dropdown-menu>
        </div>

        <div class="card">
          <h1>paper-input</h1>
          <paper-input always-float-label label="Floating label"></paper-input>
        </div>

        <div class="card">
          <h1>paper-listbox </h1>
          <paper-listbox>
            <paper-item>Item 1</paper-item>
              <paper-item>Item 2</paper-item>
            </paper-listbox>

            <paper-listbox selected="0">
              <paper-item>Item 1</paper-item>
              <paper-item>Item 2</paper-item>
            </paper-listbox>

            <paper-listbox multi>
              <paper-item>Item 1</paper-item>
              <paper-item>Item 2</paper-item>
            </paper-listbox>
        </div>
          
        <div class="card">
          <h1>paper-radio-button</h1>
          <paper-radio-button>Unchecked</paper-radio-button>
          <paper-radio-button checked>Checked</paper-radio-button>
          <paper-radio-button disabled>Disabled</paper-radio-button>
        </div>
          
        <div class="card">
          <h1>paper-radio-group</h1>
          <paper-radio-group selected="small">
            <paper-radio-button name="small">Small</paper-radio-button>
            <paper-radio-button name="medium">Medium</paper-radio-button>
            <paper-radio-button name="large">Large</paper-radio-button>
          </paper-radio-group>
        </div>
          
        <div class="card">
          <h1>paper-slider</h1>
          <paper-slider
            value="183"
            max="255"
            secondary-progress="200"
            editable>
          </paper-slider>
        </div>

        <div class="card">
          <h1>paper-toggle-button</h1>
          <paper-toggle-button checked></paper-toggle-button>
          <paper-toggle-button disabled></paper-toggle-button>
        </div>
      </div> <!--paper-input-elements Ende-->

      <!--paper-overlay-elements Start-->
      <div class="card">
        <h1>paper-overlay-elements</h1>
        <p><a target="_blank" rel="noopener noreferrer" href="https://www.webcomponents.org/collection/PolymerElements/paper-overlay-elements">PolymerElements/paper-elements/paper-overlay-elements</a></p>
        
        <div class="card">
          <h1>paper-dialog</h1>      
        </div>

        <div class="card">
          <h1>paper-dialog-behavior</h1>            
        </div>
        
        <div class="card">
          <h1>paper-dialog-scrollable</h1>        
        </div>
        
        <div class="card">
          <h1>paper-fab</h1>        
        </div>
      </div> <!--paper-overlay-elements Ende-->
    `;
  }
}

window.customElements.define('my-view2', MyView2);
