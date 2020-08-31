export default class MyName extends HTMLElement {
    constructor() {
        super();
        this.innerText = 'Hello, my name is John Doe'
    }
    static get observedAttributes() {
        return ['fullname']
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name == 'fullname') {
            this.innerText = 'Hello, my name is ' + newValue;
        }
    }
}