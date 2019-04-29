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

import '@polymer/paper-checkbox/paper-checkbox.js'; //paper-checkbox added
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js'; //paper-dropdown-menu added
import '@polymer/paper-item/paper-item.js'; //paper-dropdown-menu added
import '@polymer/paper-listbox/paper-listbox.js'; //paper-dropdown-menu added & paper-listbox added

import '@polymer/paper-input/paper-input.js'; //paper-input added

import '@polymer/paper-radio-button/paper-radio-button.js'; //paper-radio-button added
import '@polymer/paper-radio-group/paper-radio-group.js'; //paper-radio-button-group added

import '@polymer/paper-slider/paper-slider.js'; //paper-slider added

import '@polymer/paper-toggle-button/paper-toggle-button.js'; //paper-toggle-button added

import '@polymer/paper-dialog/paper-dialog.js';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class.js';
import { PaperDialogBehavior } from '@polymer/paper-dialog-behavior/paper-dialog-behavior.js';
import '@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js';
import '@polymer/paper-fab/paper-fab.js';
import '@polymer/iron-icon/iron-icon.js';

class MyView2 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>
      <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> <a target="_blank" rel="noopener noreferrer" href="https://www.webcomponents.org/collection/PolymerElements/paper-elements">PolymerElements/paper-elements</a></h1>

      <!--paper-input-elements-->

      <div class="card">
        <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> paper-input-elements</h1>
        <p><a target="_blank" rel="noopener noreferrer" href="https://www.webcomponents.org/collection/PolymerElements/paper-input-elements">PolymerElements/paper-elements/paper-input-elements</a></p>
        
        <div class="card">
            <h1>paper-checkbox</h1>
            <paper-checkbox>Unchecked</paper-checkbox>
            <paper-checkbox checked>Checked</paper-checkbox>
            <paper-checkbox disabled>Disabled</paper-checkbox>
        </div>

        <div class="card">
          <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> paper-dropdown-menu</h1>
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
          <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> paper-input</h1>
          <paper-input always-float-label label="Floating label"></paper-input>
        </div>

        <div class="card">
          <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> paper-listbox </h1>
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
          <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> paper-radio-button</h1>
          <paper-radio-button>Unchecked</paper-radio-button>
          <paper-radio-button checked>Checked</paper-radio-button>
          <paper-radio-button disabled>Disabled</paper-radio-button>
        </div>
          
        <div class="card">
          <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> paper-radio-group</h1>
          <paper-radio-group selected="small">
            <paper-radio-button name="small">Small</paper-radio-button>
            <paper-radio-button name="medium">Medium</paper-radio-button>
            <paper-radio-button name="large">Large</paper-radio-button>
          </paper-radio-group>
        </div>
          
        <div class="card">
          <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> paper-slider</h1>
          <paper-slider
            value="183"
            max="255"
            secondary-progress="200"
            editable>
          </paper-slider>
        </div>

        <div class="card">
          <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> paper-toggle-button</h1>
          <paper-toggle-button checked></paper-toggle-button>
          <paper-toggle-button disabled></paper-toggle-button>
        </div>
      </div> <!--paper-input-elements Ende-->

      <!--paper-overlay-elements Start-->
      <div class="card">
        <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> paper-overlay-elements</h1>
        <p><a target="_blank" rel="noopener noreferrer" href="https://www.webcomponents.org/collection/PolymerElements/paper-overlay-elements">PolymerElements/paper-elements/paper-overlay-elements</a></p>
        
        <div class="card">
          <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> paper-dialog</h1>   

          <img src="images/working-in-progress.png" width=15% height=15% alt="working-in-progress">

          <h2>Option 1</h2>
          <paper-dialog-impl>  
            <div>Dialog body</div>
            <div class="paper-dialog-buttons">
              <paper-button dialog-dismiss>Cancel</paper-button>
              <paper-button dialog-confirm>Accept</paper-button>
            </div>
          </paper-dialog-impl>

          <h2>Option 2</h2>
            <div class="buttons">
              <paper-button dialog-dismiss>Cancel</paper-button>
              <paper-button dialog-confirm autofocus>Accept</paper-button>
            </div>
          </paper-dialog>

          <h2>Option 3</h2>
            <paper-dialog entry-animation="scale-up-animation"
                          exit-animation="fade-out-animation">
              <h2>Header</h2>
              <div>Dialog body</div>
            </paper-dialog>
<!--
          <paper-dialog id="scrolling">
            <h2>Scrolling</h2>
            <paper-dialog-scrollable>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </paper-dialog-scrollable>
            <div class="buttons">
              <paper-button dialog-dismiss>Cancel</paper-button>
              <paper-button dialog-confirm autofocus>OK</paper-button>
            </div>
          </paper-dialog>

          <paper-dialog id="actions">
            <h2>Dialog Title</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div class="buttons">
              <paper-button>More Info...</paper-button>
              <paper-button dialog-dismiss>Decline</paper-button>
              <paper-button dialog-confirm autofocus>Accept</paper-button>
            </div>
          </paper-dialog>

          <paper-dialog id="modal" modal>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div class="buttons">
              <paper-button dialog-confirm autofocus>Tap me to close</paper-button>
            </div>
          </paper-dialog>

          <paper-dialog id="dropdownDialog">
            <h2>Dialog Title</h2>
            <paper-dropdown-menu-light label="Value">
              <!--
                support hybrid mode: 
                paper-dropdown-menu-light 1.x distributes via <content select=".dropdown-content">
                paper-dropdown-menu-light 2.x distributes via <slot name="dropdown-content">
              --
--> 
                          
<!--
              <paper-listbox class="dropdown-content" slot="dropdown-content">
                <paper-item>1</paper-item>
                <paper-item>2</paper-item>
                <paper-item>3</paper-item>
                <paper-item>4</paper-item>
                <paper-item>5</paper-item>
                <paper-item>6</paper-item>
                <paper-item>7</paper-item>
                <paper-item>8</paper-item>
                <paper-item>9</paper-item>
                <paper-item>10</paper-item>
              </paper-listbox>
            </paper-dropdown-menu-light>
          </paper-dialog>

          <paper-dialog id="nested">
            <h2>Dialog Title</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div class="buttons">
              <paper-button onclick="innerDialog.open()">Open nested dialog</paper-button>
            </div>
          </paper-dialog>

          <paper-dialog id="innerDialog">
            <h2>Dialog Title</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </paper-dialog>
-->

        </div>

        <div class="card">
          <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> paper-dialog-behavior</h1>
          <p>Bearbeitung s.a.</p>            
        </div>
        
        <div class="card">
          <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> paper-dialog-scrollable</h1> 
          <p>Bearbeitung s.a.</p>       
        </div>
        
        <div class="card">
          <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> paper-fab</h1>
          <p>Bearbeitung s.a.</p>        
        </div>
      </div> <!--paper-overlay-elements Ende-->
    `;
  }
}

window.customElements.define('my-view2', MyView2);
