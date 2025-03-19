
export var cardConfig = {};

export function initializeFn() {
    // const wrapper = cardConfig.wrapper;
    // const filteredEmpData = cardConfig.filteredEmpData;
    const { wrapper, filteredEmpData } = cardConfig;
    wrapper.innerHTML = "";
    filteredEmpData.forEach(function (currentCard) {
        const htmlEle = createCard(currentCard);
        wrapper.append(htmlEle);
    });
}

function createCard(cardData) {
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

export function registerEvents() {
    const { wrapper, filterInputEle } = cardConfig;
    wrapper.addEventListener("mouseover", () => {
        hoverEffect();
    });
    wrapper.addEventListener("mouseleave", removeEffect);
    filterInputEle.addEventListener("keyup", () => {
        filterCards();
    })
}

function hoverEffect() {
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

function removeEffect() {
    const cardList = document.querySelectorAll("#employeeDetails .card.hover");
    cardList.forEach(currentCard => {
        currentCard.classList.remove("hover");
    });
}

export function filterCards(isInitalLoad = false) {
    let { searchValue, employeeData, wrapper, filteredEmpData, filterInputEle } = cardConfig;
    if (!isInitalLoad) {
        searchValue = event.currentTarget.value.toLowerCase();
    }
    console.log(searchValue);
    filteredEmpData = employeeData.filter(current => {
        const currentEmpName = current.employee_name.toLowerCase();
        return currentEmpName.indexOf(searchValue.toLowerCase()) > -1;
    });
    initializeFn(wrapper, filteredEmpData);
    toggleNoData(employeeData, wrapper, searchValue);
    registerEvents(wrapper, filterInputEle);
}

export function toggleNoData(employeeData, wrapper, searchValue) {
    const isCardsAvailable = employeeData.some(current => {
        const currentEmpName = current.employee_name.toLowerCase();
        return currentEmpName.indexOf(searchValue.toLowerCase()) > -1;
    });
    const hasNoDataEle = wrapper.querySelector("p.noData");
    if (isCardsAvailable && hasNoDataEle) {
        wrapper.querySelector("p.noData").remove();
    } else if (!isCardsAvailable && !hasNoDataEle) {
        const noDataEle = document.createElement("p");
        noDataEle.classList.add("noData");
        noDataEle.textContent = "No Employee data found...";
        wrapper.append(noDataEle);
    }
}