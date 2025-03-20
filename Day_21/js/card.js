class Card extends HTMLElement {
    constructor() {
        super();
    }
    dataSource = null;
    static observedAttributes = ["datasource"];
    initialize() {
        var that = this;
        if (!this.dataSource) return;
        this.dataSource.forEach(function (currentCard) {
            const htmlEle = that.#createCard(currentCard);
            that.append(htmlEle);
        });
        this.registerEvents();
    }

    connectedCallback() {
        console.log("Custom element added to page.");
        this.initialize();
    }

    disconnectedCallback() {
        console.log("Custom element removed from page.");
        this.destroy();
    }


    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Attribute ${name} has changed.`);
        if (name == "datasource") {
            this.dataSource = JSON.parse(newValue);
            this.initialize();
        }
    }

    registerEvents() {
        this.addEventListener("mouseover", () => {
            this.#hoverEffect();
        });
        this.addEventListener("mouseleave", this.#removeEffect);
    }

    destroy() {
        this.dataSource = null;
        this.removeEventListener("mouseover", this.#hoverEffect);
        this.removeEventListener("mouseleave", this.#removeEffect);
    }

    #createCard(cardData) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("data-employee-name", cardData.employee_name);
        const cardContent = `
        <header>
                    <img src="${cardData.employee_image}" />
                    <div class="nameRoleContainer">
                        <h4>${cardData.employee_name}</h4>
                        <p class="role">${cardData.employee_id}</p>
                        <p class="role">${cardData.employee_role}</p>
                    </div>
                </header>
                <main>
                    ${cardData.short_description}
                </main>
        `;
        card.innerHTML = cardContent;
        return card;
    }

    #hoverEffect() {
        const wrapper = event.currentTarget;
        const cardEle = event.target.closest(".card");
        const cardList = wrapper.querySelectorAll(".card.hover");
        cardList.forEach(currentCard => {
            currentCard.classList.remove("hover");
        });
        if (cardEle) {
            cardEle.classList.add("hover");
        }

    }

    #removeEffect() {
        const cardList = document.querySelectorAll("#employeeDetails .card.hover");
        cardList.forEach(currentCard => {
            currentCard.classList.remove("hover");
        });
    }
}


// Register the custom element
customElements.define("my-cards", Card);