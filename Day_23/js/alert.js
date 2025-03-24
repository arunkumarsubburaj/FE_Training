class Alert extends HTMLElement {
    constructor() {
        super();
        this.shadowRoot = this.attachShadow({ mode: "open" });
    }
    static observedAttributes = ["type", "variant", "class"];
    shadowRoot = null;
    initialize() {
        this.generateTemplate();
        this.createAlert();
        this.registerEvents();
    }
    registerEvents() {
        const closeIcon = this.shadowRoot.querySelector(".alertCloseIcon");
        closeIcon.addEventListener("click", (event) => {
            this.alertCloseClick(event);
        });
    }
    destroy() {
    }
    generateTemplate() {
        const template = document.createElement("template");
        template.id = "templateId";
        template.innerHTML = `
        <p class='alert-content'>
            <slot name="alert-icon"></slot>
            <slot></slot>
            <span class="material-icons alertCloseIcon">
                x
            </span>
        </p>`;
        document.body.append(template);
    }
    createAlert() {
        const variant = this.getAttribute("variant") ?? "filled";
        const type = this.getAttribute("type") ?? "info";
        const template = document.getElementById("templateId");
        if (!template) return;
        this.shadowRoot.innerHTML = `${this.getStyleData()} ${template.innerHTML}`;
        this.shadowRoot.querySelector("p.alert-content").classList.add(variant);
        this.shadowRoot.querySelector("p.alert-content").classList.add(type);
    }

    getStyleData() {
        return `
        <style>
        * {
                margin: 0;
                padding: 0px;
                box-sizing: border-box;
            }
                p.alert-content {
                       height: 35px;
                        padding: 10px;
                        font-weight: bold;
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        font-size: 18px;
                        border-radius: 5px;
                        position: relative;
                }
                .info {
                    color: #00f;
                }
                .warning {
                    color: orange;
                }
                .success {
                    color: green;
                    }
                .error {
                    color: red;
                }
                .filled.info {
                    background-color: rgba(0,0,255,0.3);
                }
                .filled.warning {
                    background-color: rgba(255, 165, 0, 0.15)
                }
                .outline.warning {
                    border: 1px solid orange;
                }
                .outline.info {
                    border:1px solid blue;
                }
                span.alertCloseIcon {
                    font-size: 16px;
                    font-weight: normal;
                    position: absolute;
                    right: 10px;
                    top: 10px;
                    font-family: sans-serif;
                    border: 1px solid;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 20px;
                    width: 20px;
                    border-radius: 50%;
                    text-align: center;
                    cursor: pointer;
                }
                .hide{
                    display: none;
                }
            </style>
        `;
    }

    alertCloseClick(event) {
        console.log("alert close clicked");
        const customEvent = new CustomEvent("onalertclosed", {
            bubbles: true,
            cancelable: true,
            composed: true,
            detail: {
                ctx: event,
                data: {
                    type: this.getAttribute("type"),
                    variant: this.getAttribute("variant"),
                }
            }
        });
        this.shadowRoot.dispatchEvent(customEvent);
        this.classList.add("hide");
    }
    connectedCallback() {
        console.log("from connect callback.....")
        this.initialize()
    }

    disconnectedCallback() {
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Attribute ${name} has changed.`);
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = "";
            this.createAlert();
        }
    }
}


// Register the custom element
customElements.define("my-alert", Alert);