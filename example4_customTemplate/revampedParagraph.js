export default class RevampedParagraph extends HTMLElement {
    constructor() {
        super();

        let templateReference = document.querySelector('#revamped-paragraph-template');
        let template = templateReference.content;

        this.append(template.cloneNode(true));
    }
}