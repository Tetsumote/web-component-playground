export default class TimeSlot extends HTMLElement {
    constructor() {
        super();
        this.render();
    }
    render() {
        let templateReference = document.querySelector('#time-slot-template');
        let templateContent = templateReference.content;
        let shadowRoot = this.attachShadow({
            mode: 'open'
        });
        shadowRoot.append(templateContent.cloneNode(true));
    }
}