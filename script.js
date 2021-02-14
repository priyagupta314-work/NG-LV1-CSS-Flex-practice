var likeBtn = document.querySelector("#like-button");
var likeCtr = document.querySelector("#like-counter");
var likeCount = 0;
console.log(likeCtr);
likeBtn.addEventListener("click", function likeClickHandler() {
    likeCount += 1;
    likeCtr.innerText = likeCount;
});