class Alert extends HTMLElement {
    constructor() {
        super();
        this.shadowRoot = this.attachShadow({ mode: "open" });
    }
    static observedAttributes = ["type", "variant", "class"];
    shadowRoot = null;
    initialize() {
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

    createAlert() {
        const message = this.innerHTML;
        const variant = this.getAttribute("variant") ?? "filled";
        const type = this.getAttribute("type") ?? "info";
        this.shadowRoot.innerHTML = `${this.getStyleData()} <p class='${variant} ${type}'>${message}
            <span class="material-icons alertCloseIcon"> 
            x
            </span>
        </p>`;
    }

    getStyleData() {
        return `
        <style>
                p {
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