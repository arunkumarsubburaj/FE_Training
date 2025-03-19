export default class Card {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    dataSource = [];
    wrapper = document.getElementById("employeeDetails");
    initialize() {
        var that = this;
        this.dataSource.forEach(function (currentCard) {
            const htmlEle = that.#createCard(currentCard);
            that.wrapper.append(htmlEle);
        });
    }

    registerEvents() {
        this.wrapper.addEventListener("mouseover", () => {
            this.#hoverEffect();
        });
        this.wrapper.addEventListener("mouseleave", this.#removeEffect);
    }

    destroy() {
        this.dataSource = [];
        this.wrapper.removeEventListener("mouseover", this.#hoverEffect);
        this.wrapper.removeEventListener("mouseleave", this.#removeEffect);
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
