export default class StudentAttendanceTable extends HTMLElement {
    constructor() {
        super();
        this.render();
    }
    render() {
        this.innerText = this.getLoadingText();
        // this.getStudentList();
    }

    connectedCallback() {
        this.getStudentList()
    }

    getStudentList() {
        fetch('./student.json')
            .then(response => {
                return response.json();
            })
            .then(jsonData => {
                this.generateTable(jsonData);
            })
            .catch(e => {
                this.innerText = this.getErrorText();
                console.log(e);
            })
    }
    generateTable(names) {
        let rows = names.map((data, index) => {
            return this.getTableRow(index, data.name)
        })
        let table = document.createElement('table');
        table.innerHTML = rows.join('')
        this.appendHTMLToShadowDOM(table);
    }

    getTableRow(index, name) {
        let tableRow = `
        <tr>
            <td>${index + 1}</td>
            <td>${name}</td>
            <td>
            <input type="checkbox" name="${index}-attendance"/>
            </td>
        </tr>
        `
        return tableRow;
    }

    appendHTMLToShadowDOM(html) {
        this.innerHTML = '';
        let shadowRoot = this.attachShadow({
            mode: 'open'
        });
        shadowRoot.append(html);
    }
    getLoadingText() {
        return `loading..`;
    }

    getErrorText() {
        return `unable to retrieve student list.`;
    }
}