const video = document.querySelector("video");
const content = document.querySelector(".content");

video.addEventListener("timeupdate", () => {
    if (video.currentTime >= 3) {
        content.classList.add("show");
    }
});