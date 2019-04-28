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

class MyView1 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <h1><img src="images/manifest/icon-30x30.png"  width=20px height=20px alt="P.M.D."> <a target="_blank" rel="noopener noreferrer" href="https://www.webcomponents.org/author/PolymerElements">PolymerElements</a></h1>
      <h1><img src="images/material-design-logo.svg" alt="SVG mit img Tag laden" width="20" height="20"> <a target="_blank" rel="noopener noreferrer" href="https://material.io/design/">Material Design</a></h1>
      <h1><img src="images/github-logo.png" alt="s.o.gh" width="20" height="20"> <a target="_blank" rel="noopener noreferrer" href="https://github.com/YlloNieR/ProjektOR">Show on Github</a></h1>

      <div class="card">
        <div class="circle">1</div>

        <h1>View One</h1>
        <p>Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Cu mei vide viris gloriatur, at populo eripuit sit.</p>
      </div>

      <div class="card">
        <div class="circle">2</div>

        <h1>div Class card</h1>
        <li>= weiße Karten style</li>
        <li>Quelle: <b>my-view1.js</b></li>
      </div>

      <div class="card">
        <div class="circle">3</div>

        <h1>Colors</h1>
        <h2>blue Header</h2>
        <li>asd</li>
        <h2>Colors</h2>
        <li>head Quelle: </li>
        <li>--app-primary-color: #4285f4; Quelle: my-app.js<li>
        <li>body Quelle: index.html</li>
        <li>sidebar Quelle:  </li>
      </div>

      <div class="card">
        <div class="circle">4</div>

        <h1>Style</h1>
        <p>DIV Quelle: \src\shared-styles.js</p>
      </div>

      <div class="card">
        <div class="circle">5</div>

        <h1>Structure</h1>
        <p>Tab Titel = <code>My App</code></p>
        <p>Quelle: index.html</p>
        <p></p>
        <p>main-title = <code>main-title="">My App</code></p> 
        <p>Quelle: my-app.js</p>
      </div>

      <div class="card">
      <div class="circle">6</div>
      <h1>Import polymer Elements</h1>
        <ol>1. Suche auf <a target="_blank" rel="noopener noreferrer" href="https://www.webcomponents.org/author/PolymerElements">PolymerElements</a></ol>
        <ol>2. Installation in /Polymer per npm Befehl</ol>
        <ol>3. add Beispiel import '@polymer/paper-checkbox/paper-checkbox.js' in Polymer 3 element</ol>
        <ol>4. add das eigentliche feature in den Context also in die js Datei woe es sethen soll</ol>
      
        <center><img src="images/screenshot1.png" width=85% height=85% alt="screenshot1 von Polymer Import"></center>
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

window.customElements.define('my-view1', MyView1);
