"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleProfessionalSummary = void 0;
exports.toggleProfessionalSummary = document.getElementById("toggleProfessionalSummary");
exports.toggleProfessionalSummary.addEventListener("click", function () {
    if (exports.toggleProfessionalSummary.style.display === "none") {
        exports.toggleProfessionalSummary.style.display = "block";
    }
    else {
        exports.toggleProfessionalSummary.style.display = "none";
    }
});
