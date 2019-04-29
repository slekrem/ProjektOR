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

import '@polymer/paper-badge/paper-badge.js'; //paper-badge added
import '@polymer/paper-button/paper-button.js'; //paper-badge + paper-card added
import '@polymer/paper-icon-button/paper-icon-button.js'; //paper-badge added
import '@polymer/iron-icons/iron-icons.js'; //paper-badge added
import '@polymer/iron-icons/social-icons.js'; //paper-badge added

import '@polymer/paper-card/paper-card.js'; //paper-card added

class MyView4 extends PolymerElement {
      static get template() {
            return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>
      <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> <a target="_blank" rel="noopener noreferrer" href="https://www.webcomponents.org/collection/PolymerElements/paper-ui-elements">PolymerElements/paper-ui-elements</a></h1>
      <div class="card"> 
            <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> paper-badge</h1>
                  <div  class="flex-container">
                        <div class="card">
                        <span>Inbox</span>
                        <paper-badge label="3"></paper-badge>
                        </div>
                  </div>

                  <div  class="flex-container">
                        <div class="card">
                              <paper-button id="btn">Status</paper-button>
                              <paper-badge
                                    icon="favorite"
                                    for="btn"
                                    label="favorite icon">
                              </paper-badge>
                        </div>
                  </div>

                  <div  class="flex-container">
                        <div class="card">
                              <paper-icon-button
                                    style="float: left"
                                    id="account-box"
                                    icon="account-box"
                                    alt="account-box">
                              </paper-icon-button>
                              <paper-badge
                                    style="float: left"
                                    icon="social:mood"
                                    for="account-box"
                                    label="mood icon">
                              </paper-badge>
                        </div>
                  </div>
      </div>

      <div class="card"> 
            <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> paper-button</h1>
            <paper-button class="pink">link</paper-button>
            <paper-button raised class="indigo">raised</paper-button>
            <paper-button toggles raised class="green">toggles</paper-button>
            <paper-button disabled class="disabled">disabled</paper-button>
      </div>

      <div class="card"> 
            <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> paper-card</h1>
            <paper-card heading="Emmental" image="http://placehold.it/350x150/FFC107/000000" alt="Emmental">
                  <div class="card-content">
                  Emmentaler or Emmental is a yellow, medium-hard cheese that originated in the area around Emmental, Switzerland. It is one of the cheeses of Switzerland, and is sometimes known as Swiss cheese.
                  </div>
                  <div class="card-actions">
                  <paper-button>Share</paper-button>
                  <paper-button>Explore!</paper-button>
                  </div>
            </paper-card>
      </div>

      <div class="card"> 
            <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> paper-dropdown-menu</h1>
            <p>Bearbeitung s.a.</p> 
      </div>

      <div class="card"> 
            <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> paper-icon-button</h1>
            <p>Bearbeitung s.a.</p> 
      </div>
      
      <div class="card"> 
            <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> paper-item</h1>
            <p>Bearbeitung s.a.</p> 
      </div>
      
      <div class="card"> 
            <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> paper-menu-button</h1>
            <p>Bearbeitung s.a.</p> 
      </div>
      
      <div class="card"> 
            <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> paper-progress</h1>
            <p>Bearbeitung s.a.</p> 
      </div>
            
      <div class="card"> 
            <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> paper-spinner</h1>
            <p>Bearbeitung s.a.</p> 
      </div>
            
      <div class="card"> 
            <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> paper-swatch-picker</h1>
            <p>Bearbeitung s.a.</p> 
      </div>
                  
      <div class="card"> 
            <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> paper-tabs</h1>
            <p>Bearbeitung s.a.</p> 
      </div>
                  
      <div class="card"> 
            <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> paper-toolbar</h1>
            <p>Bearbeitung s.a.</p> 
      </div>
                        
      <div class="card"> 
            <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> paper-tooltip</h1>
            <p>Bearbeitung s.a.</p> 
      </div>      
    `;
      }
}

window.customElements.define('my-view4', MyView4);
