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
        <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> <a target="_blank" rel="noopener noreferrer" href="https://www.webcomponents.org/collection/PolymerElements/iron-elements">PolymerElements/iron-elements</a></h1>
      
      <div class="card">  <!--iron-behaviors-collection Start-->
        <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> iron-behaviors-collection</h1>
        <p><a target="_blank" rel="noopener noreferrer" href="https://www.webcomponents.org/collection/PolymerElements/iron-behaviors-collection">.../iron-behaviors-collection</a></p> 
      
        <div class="card">
          <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> IronMenuBehavior & IronMenubarBehavior</h1>
          <!--#Bearbeitung Start-->

          <img src="images/working-in-progress.png" width=260px height=160px alt="working-in-progress">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/YlloNieR/ProjektOR/issues/1"><br>
          <img src="images/show-on-issue-github.png" hspace="30" width=200px height=100px alt="show-on-issue-github">
          <h3 style="text-indent:80px" font face="-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol">
          issue: #1</h3></a>

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

        </div>  
        <!--#Bearbeitung Ende-->

        <div class="card">
          <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> iron-overlay-behavior</h1>
          <p>Bearbeitung s.a.</p>
        </div>
        
        <div class="card"></h1>      
          <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> iron-range-behavior</h1>
          <p>Bearbeitung s.a.</p>
        </div>

        <div class="card">
          <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> iron-resizable-behavior</h1>
          <p>Bearbeitung s.a.</p>
        </div> 
          
        <div class="card">
          <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> iron-scroll-target-behavior</h1>
          <p>Bearbeitung s.a.</p>
        </div>
          
        <div class="card">
          <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> iron-scroll-threshold</h1>
          <p>Bearbeitung s.a.</p>
        </div>
        
      </div> <!--iron-behaviors-collection Ende-->
      
      <div class="card"> <!--iron-input-elements Start-->
          <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> iron-input-elements</h1>
          <p><a target="_blank" rel="noopener noreferrer" href="https://www.webcomponents.org/collection/PolymerElements/iron-input-elements">.../iron-input-elements</a></p>

          <div class="card">
          <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> iron-checked-element-behavior</h1>
          <p>Bearbeitung s.a.</p>          
          </div>

          <div class="card">
          <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> iron-dropdown</h1>
          <p>Bearbeitung s.a.</p>          
          </div>

          <div class="card">
          <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> iron-form</h1>
          <p>Bearbeitung s.a.</p>          
          </div>

          <div class="card">
          <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> iron-form-element-behavior</h1>
          <p>Bearbeitung s.a.</p>          
          </div>

          <div class="card">
          <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> iron-input</h1>
          <p>Bearbeitung s.a.</p>          
          </div>

          <div class="card">
          <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> iron-label</h1>
          <p>Bearbeitung s.a.</p>         
          </div>

          <div class="card">
          <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> iron-validatable-behavior</h1>
          <p>Bearbeitung s.a.</p>          
          </div>

        </div> <!--iron-input-elements Ende-->

        <div class="card"> <!--iron-behaviors-collection Start-->
          <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> iron-behaviors-collection</h1>
          <p><a target="_blank" rel="noopener noreferrer" href="https://www.webcomponents.org/collection/PolymerElements/iron-behaviors-collection">.../iron-behaviors-collection</a></p>
          
          <div class="card">           
          <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> iron-validatable-behavior</h1>
          <p>Bearbeitung s.a.</p> 
          </div>

          <div class="card"> 
          <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> iron-overlay-behavior</h1>
          <p>Bearbeitung s.a.</p> 
          </div>

          <div class="card"> 
          <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> iron-range-behavior</h1>
          <p>Bearbeitung s.a.</p> 
          </div>

          <div class="card"> 
          <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> iron-resizable-behavior</h1>
          <p>Bearbeitung s.a.</p> 
          </div>

          <div class="card"> 
          <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> iron-scroll-target-behavior</h1>
          <p>Bearbeitung s.a.</p> 
          </div>

          <div class="card"> 
          <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> iron-scroll-threshold</h1>
          <p>Bearbeitung s.a.</p> 
          </div>
          
        </div> <!--iron-behaviors-collection Ende-->

        <!--Einzelne Core Elemente Start-->
        <p><a target="_blank" rel="noopener noreferrer" href="https://www.webcomponents.org/collection/PolymerElements/iron-elements">PolymerElements/iron-elements</a></p>

        <div class="card"> 
            <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> iron-a11y-announcer</h1>
            <p>Bearbeitung s.a.</p> 
        </div>

        <div class="card"> 
            <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> iron-a11y-keys</h1>
            <p>Bearbeitung s.a.</p> 
        </div>

        <div class="card"> 
            <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> iron-ajax</h1>
            <p>Bearbeitung s.a.</p> 
        </div>

        <div class="card"> 
            <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> iron-autogrow-textarea</h1>
            <p>Bearbeitung s.a.</p> 
        </div>

        <div class="card"> 
            <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> iron-behaviors</h1>
            <p>Bearbeitung s.a.</p> 
        </div>

        <div class="card"> 
            <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> iron-collapse</h1>
            <p>Bearbeitung s.a.</p> 
        </div>

        <div class="card"> 
            <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> iron-component-page</h1>
            <p>Bearbeitung s.a.</p> 
        </div>
        
        <div class="card"> 
            <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> iron-demo-helpers</h1>
            <p>Bearbeitung s.a.</p> 
        </div>
        
        <div class="card"> 
            <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> iron-doc-viewer</h1>
            <p>Bearbeitung s.a.</p> 
        </div>
        
        <div class="card"> 
            <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> iron-dropdown</h1>
            <p>Bearbeitung s.a.</p> 
        </div>
        
        <div class="card"> 
            <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> iron-fit-behavior</h1>
            <p>Bearbeitung s.a.</p> 
        </div>
        
        <div class="card"> 
            <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> iron-flex-layout</h1>
            <p>Bearbeitung s.a.</p> 
        </div>
        
        <div class="card"> 
            <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> iron-icon</h1>
            <p>Bearbeitung s.a.</p> 
        </div>

        <div class="card"> 
            <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> iron-icons</h1>
            <p>Bearbeitung s.a.</p> 
        </div>
        
        <div class="card"> 
            <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> iron-iconset</h1>
            <p>Bearbeitung s.a.</p> 
        </div>

        <div class="card"> 
            <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> iron-iconset-svg</h1>
            <p>Bearbeitung s.a.</p> 
        </div>
        
        <div class="card"> 
            <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> iron-image</h1>
            <p>Bearbeitung s.a.</p> 
        </div>
                
        <div class="card"> 
            <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> iron-jsonp-library</h1>
            <p>Bearbeitung s.a.</p> 
        </div>
                
        <div class="card"> 
            <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> iron-list</h1>
            <p>Bearbeitung s.a.</p> 
        </div>
                
        <div class="card"> 
            <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> iron-location</h1>
            <p>Bearbeitung s.a.</p> 
        </div>
                
        <div class="card"> 
            <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> iron-media-query</h1>
            <p>Bearbeitung s.a.</p> 
        </div>
                
        <div class="card"> 
            <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> iron-overlay-behavior</h1>
            <p>Bearbeitung s.a.</p> 
        </div>
                
        <div class="card"> 
            <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> iron-pages</h1>
            <p>Bearbeitung s.a.</p> 
        </div>

        <div class="card"> 
            <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> iron-swipeable-container</h1>
            <p>Bearbeitung s.a.</p> 
        </div>

        <div class="card"> 
            <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> iron-test-helpers</h1>
            <p>Bearbeitung s.a.</p> 
        </div>         
        <!--Einzelne Core Elemente Ende-->
    `;
  }
}

window.customElements.define('my-view3', MyView3);
