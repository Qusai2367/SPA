import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashbaord");
    }

    async getHtml() {
        return `
            <h1>Welcome back, Qusai</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed suscipit nemo doloribus
            </p>

            <p><a href="/post" data-link>View recnt posts</a></p>
        `;
    }
}