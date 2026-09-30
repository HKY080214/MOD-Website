const backgrounds = document.querySelectorAll(".background");

let current = 0;
let canChange = true;

function nextBackground() {

    // 隐藏
    backgrounds[current].style.opacity = "0";

    // 切换
    current = current + 1;

    // 返回
    if (current >= backgrounds.length) {
        current = 0;
    }

    // 渐显
    backgrounds[current].style.opacity = "1";
}


// 点击
document.addEventListener("click", function () {
    nextBackground();
});


// 滚轮
document.addEventListener("wheel", function () {

    if (!canChange) {
        return;
    }

    nextBackground();

    canChange = false;

    setTimeout(function () {
        canChange = true;
    }, 1000);

});