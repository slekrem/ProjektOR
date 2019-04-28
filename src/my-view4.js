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
            <p>Bearbeitung s.a.</p> 
      </div>

      <div class="card"> 
            <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> paper-button</h1>
            <p>Bearbeitung s.a.</p> 
      </div>

      <div class="card"> 
            <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> paper-card</h1>
            <p>Bearbeitung s.a.</p> 
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
