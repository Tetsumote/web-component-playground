export default class InformationBanner extends HTMLElement {
    constructor() {
        super();
        this.render();
    }
    render() {
        let templateReference = document.querySelector('#information-banner-template');
        let templateContent = templateReference.content;
        let shadowRoot = this.attachShadow({
            mode: 'open'
        })
        shadowRoot.append(templateContent.cloneNode(true))
    }
}