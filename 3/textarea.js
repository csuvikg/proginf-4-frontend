// 8
const textarea = document.getElementById("text");
const counter = document.getElementById("counter");

textarea.oninput = e => counter.innerText = e.target.value.length;

/* WIP
class TextareaLCount extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        const template = document.querySelector("template");
        const content = template.content.cloneNode(true);
        this.shadowRoot.appendChild(content);

        this.textarea = this.querySelector("textarea");
        const div = document.createElement("div");
        div.innerHTML = "Character count: <span>0</span>";

        textarea.oninput = e => // todo: finish me
    }

    disconnectedCallback() {

    }
}

customElements.define("textarea-l-count", TextareaLCount);
*/

// 9
const password = document.getElementById("password");
const passwordToggle = document.getElementById("toggle");

passwordToggle.onclick = _ => {
    if (password.type === "password") {
        password.type = "text";
        passwordToggle.value = "Hide";
    } else {
        password.type = "password";
        passwordToggle.value = "Show";
    }
};

// 7
class HueInput extends HTMLInputElement {
    connectedCallback() {
        this.addEventListener("input", this.handleChange);
    }

    disconnectedCallback() {
        this.removeEventListener("input", this.handleChange);
    }

    handleChange = () => {
        this.style.backgroundColor = `hsl(${this.value}, 50%, 50%)`;
    }
}

customElements.define("hue-input", HueInput, { extends: "input" });
