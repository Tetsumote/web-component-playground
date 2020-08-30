export default class CustomButton extends HTMLElement {
    constructor() {
        super();
        this.timesClicked = 0;
        let template = `
        <button>Click Me</button>
        <span>${this.getTimesClicked()}</span>
        `;
        this.innerHTML = template;
    }

    connectedCallback() {
        this.querySelector('button').addEventListener('click', (e) => {
            this.handleClick(e);
        })
    }

    handleClick() {
        this.timesClicked++;
        this.querySelector('span').innerText = this.getTimesClicked();
    }
    getTimesClicked() {
        return `Times Clicked: ${this.timesClicked}`;
    }

}