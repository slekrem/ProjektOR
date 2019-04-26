import { Element as PolymerElement } from "...";

export class HelloWorld extends PolymerElement {
    static get template() {
        return '<h1>hello [[name]]!</h1>';
   }

    static get properties() {
        return {
            name: String
        }
    }
}

customElements.define("hello-world", HelloWorld);