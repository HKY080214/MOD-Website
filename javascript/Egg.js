
const pages = document.querySelectorAll(".page1, .page2, .page3");

let currentPage = 0;

function showPage(index) {
    pages.forEach(page => {
        page.style.display = "none";
    });

    pages[index].style.display = "block";
}

document.addEventListener("click", () => {
    currentPage = (currentPage + 1) % pages.length;
    showPage(currentPage);
});

showPage(currentPage);
