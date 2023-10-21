(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

// Download CV

// Function to display the PDF when the button is clicked
function downloadPDF() {
    // The path to the PDF file. Update this to your PDF's path.
    const pdfPath = 'resume/Surendra_Yadav_CV.pdf';
    // Open the PDF in a new tab. This will prompt users to download the file.
    window.open(pdfPath, '_blank');
}


