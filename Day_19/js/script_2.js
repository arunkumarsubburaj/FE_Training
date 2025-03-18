document.addEventListener("DOMContentLoaded", function () {
    filterCards(true);
});
const employeeData = [
    {
        "employee_id": "E001",
        "employee_name": "John Doe",
        "employee_image": "https://example.com/images/john_doe.jpg",
        "employee_role": "Software Engineer",
        "short_description": "Develops and maintains web applications using modern technologies."
    },
    {
        "employee_id": "E002",
        "employee_name": "Alice Smith",
        "employee_image": "https://example.com/images/alice_smith.jpg",
        "employee_role": "Product Manager",
        "short_description": "Responsible for defining product vision and overseeing development cycles."
    },
    {
        "employee_id": "E003",
        "employee_name": "Bob Johnson",
        "employee_image": "https://example.com/images/bob_johnson.jpg",
        "employee_role": "UI/UX Designer",
        "short_description": "Designs user-friendly interfaces and ensures a smooth user experience."
    },
    {
        "employee_id": "E004",
        "employee_name": "Charlie Brown",
        "employee_image": "https://example.com/images/charlie_brown.jpg",
        "employee_role": "Data Scientist",
        "short_description": "Analyzes data to provide actionable insights and predictions for business."
    },
    {
        "employee_id": "E005",
        "employee_name": "Dana White",
        "employee_image": "https://example.com/images/dana_white.jpg",
        "employee_role": "Quality Assurance Specialist",
        "short_description": "Ensures that software products meet quality standards and requirements."
    },
    {
        "employee_id": "E006",
        "employee_name": "Eve Davis",
        "employee_image": "https://example.com/images/eve_davis.jpg",
        "employee_role": "DevOps Engineer",
        "short_description": "Manages infrastructure, deployments, and automation of system workflows."
    },
    {
        "employee_id": "E007",
        "employee_name": "Frank Wilson",
        "employee_image": "https://example.com/images/frank_wilson.jpg",
        "employee_role": "Business Analyst",
        "short_description": "Works with stakeholders to understand business needs and translate them into technical requirements."
    },
    {
        "employee_id": "E008",
        "employee_name": "Grace Lee",
        "employee_image": "https://example.com/images/grace_lee.jpg",
        "employee_role": "HR Manager",
        "short_description": "Oversees recruitment, employee relations, and compliance with labor laws."
    },
    {
        "employee_id": "E009",
        "employee_name": "Henry Martinez",
        "employee_image": "https://example.com/images/henry_martinez.jpg",
        "employee_role": "Sales Executive",
        "short_description": "Generates leads, builds client relationships, and drives revenue growth."
    },
    {
        "employee_id": "E010",
        "employee_name": "Isla Thompson",
        "employee_image": "https://example.com/images/isla_thompson.jpg",
        "employee_role": "Marketing Specialist",
        "short_description": "Develops and executes marketing strategies to boost brand awareness and engagement."
    },
    {
        "employee_id": "E001",
        "employee_name": "John Doe",
        "employee_image": "https://example.com/images/john_doe.jpg",
        "employee_role": "Software Engineer",
        "short_description": "Develops and maintains web applications using modern technologies."
    },
    {
        "employee_id": "E002",
        "employee_name": "Alice Smith",
        "employee_image": "https://example.com/images/alice_smith.jpg",
        "employee_role": "Product Manager",
        "short_description": "Responsible for defining product vision and overseeing development cycles."
    },
    {
        "employee_id": "E003",
        "employee_name": "Bob Johnson",
        "employee_image": "https://example.com/images/bob_johnson.jpg",
        "employee_role": "UI/UX Designer",
        "short_description": "Designs user-friendly interfaces and ensures a smooth user experience."
    },
    {
        "employee_id": "E004",
        "employee_name": "Charlie Brown",
        "employee_image": "https://example.com/images/charlie_brown.jpg",
        "employee_role": "Data Scientist",
        "short_description": "Analyzes data to provide actionable insights and predictions for business."
    },
    {
        "employee_id": "E005",
        "employee_name": "Dana White",
        "employee_image": "https://example.com/images/dana_white.jpg",
        "employee_role": "Quality Assurance Specialist",
        "short_description": "Ensures that software products meet quality standards and requirements."
    },
    {
        "employee_id": "E006",
        "employee_name": "Eve Davis",
        "employee_image": "https://example.com/images/eve_davis.jpg",
        "employee_role": "DevOps Engineer",
        "short_description": "Manages infrastructure, deployments, and automation of system workflows."
    },
    {
        "employee_id": "E007",
        "employee_name": "Frank Wilson",
        "employee_image": "https://example.com/images/frank_wilson.jpg",
        "employee_role": "Business Analyst",
        "short_description": "Works with stakeholders to understand business needs and translate them into technical requirements."
    },
    {
        "employee_id": "E008",
        "employee_name": "Grace Lee",
        "employee_image": "https://example.com/images/grace_lee.jpg",
        "employee_role": "HR Manager",
        "short_description": "Oversees recruitment, employee relations, and compliance with labor laws."
    },
    {
        "employee_id": "E009",
        "employee_name": "Henry Martinez",
        "employee_image": "https://example.com/images/henry_martinez.jpg",
        "employee_role": "Sales Executive",
        "short_description": "Generates leads, builds client relationships, and drives revenue growth."
    },
    {
        "employee_id": "E010",
        "employee_name": "Isla Thompson",
        "employee_image": "https://example.com/images/isla_thompson.jpg",
        "employee_role": "Marketing Specialist",
        "short_description": "Develops and executes marketing strategies to boost brand awareness and engagement."
    }
];
var searchValue = "";
var filteredEmpData = [];
function initializeFn() {
    const wrapper = document.getElementById("employeeDetails");
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

function filterCards(isInitalLoad = false) {
    if (!isInitalLoad) {
        searchValue = event.currentTarget.value.toLowerCase();
    }
    console.log(searchValue);
    filteredEmpData = employeeData.filter(current => {
        const currentEmpName = current.employee_name.toLowerCase();
        return currentEmpName.indexOf(searchValue.toLowerCase()) > -1;
    });
    initializeFn();
    toggleNoData();
}

function toggleNoData() {
    const isCardsAvailable = employeeData.some(current => {
        const currentEmpName = current.employee_name.toLowerCase();
        return currentEmpName.indexOf(searchValue.toLowerCase()) > -1;
    });
    const hasNoDataEle = document.querySelector("#employeeDetails p.noData");
    if (isCardsAvailable && hasNoDataEle) {
        document.querySelector("#employeeDetails p.noData").remove();
    } else if (!isCardsAvailable && !hasNoDataEle) {
        const noDataEle = document.createElement("p");
        noDataEle.classList.add("noData");
        noDataEle.textContent = "No Employee data found...";
        const wrapper = document.getElementById("employeeDetails");
        wrapper.append(noDataEle);
    }
}