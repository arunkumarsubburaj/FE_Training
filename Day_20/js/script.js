import { Card } from "./card.js";

document.addEventListener("DOMContentLoaded", initializeFn);
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
function initializeFn() {
    var cardInstance = new Card(employeeData);
    cardInstance.initialize();
    cardInstance.registerEvents();
}