import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("404");
    }

    async getHtml() {
        return `
            <h1 class = "red">Error, Not Fount</h1>
            <p>
              Something happen Wrong!
            </p>

            
        `;
    }
}