// filepath: c:\Users\squwa\OneDrive\Desktop\prog\project_UID\js\custom.js
document.addEventListener("DOMContentLoaded", () => {
    // Add event listeners for buttons, dropdowns, etc.
    document.querySelectorAll(".btn-primary").forEach(button => {
        button.addEventListener("click", () => {
            alert("Button clicked!");
        });
    });
});