
export  const toggleProfessionalSummary = document.getElementById("toggleProfessionalSummary") as HTMLButtonElement;



export const importt = toggleProfessionalSummary.addEventListener("click", () => {
    if (toggleProfessionalSummary.style.display === "none") {
        toggleProfessionalSummary.style.display = "block";
      
    } else {
        toggleProfessionalSummary.style.display = "none";
    }
  });




