let openedBox = null;

function toggleBox(boxId) {
    if (openedBox && openedBox !== boxId) {
        document.querySelector(`#box-${openedBox} .box-cover`).style.transform = "translateY(0px)";
    }



    const currentCover = document.querySelector(`#box-${boxId} .box-cover`);

    if (openedBox === boxId) {
        currentCover.style.transform = "translateY(0px)"

        openedBox = null;
    } else {
        currentCover.style.transform = "translateY(-50px)";
        openedBox = boxId;
    }
    openedBox !== null ? setTimeout(showEmptyPopup, 1000) : null;
}

// Function to close the popup
function closeEmptyPopup() {
    document.getElementById("popuppc").classList.add("hidden");
}
function showEmptyPopup() {
  let i =   document.getElementById("popuppc")
      i.classList.remove("hidden");
      i.style.zIndex = '1';

}
function phoneBox(boxId, phoneId) {

    const currentCover = document.querySelector(`#box-${boxId} .box-cover`);
    if (openedBox === boxId) {
        currentCover.style.transform = "translateY(0px)"

        openedBox = null;
    } else {
        currentCover.style.transform = "translateY(-50px)";
        openedBox = boxId;
    }

    const phoneImage = document.getElementById(phoneId);
    const targetWidth = 290.73;
    const targetHeight = 261;
    const initialSize = 30;
    const step = 2;
    const intervalTime = 20;
    let currentWidth = initialSize;
    let currentHeight = initialSize;

    phoneImage.style.zIndex = '1';

    if (phoneImage.interval) {
        clearInterval(phoneImage.interval);
    }

    phoneImage.interval = setInterval(() => {
        if (currentWidth < targetWidth && currentHeight < targetHeight) {
            currentWidth += step;
            currentHeight += step;
            phoneImage.style.width = `${currentWidth}px`;
            phoneImage.style.height = `${currentHeight}px`;
        } else {
            clearInterval(phoneImage.interval);
        }
    }, intervalTime);

    document.getElementById('phone-confetti').classList.remove('hidden');
    document.getElementById('phone-confetti').classList.add('block');

    setTimeout(() => {
        document.getElementById('phone-confetti').classList.remove('block');
        document.getElementById('phone-confetti').classList.add('hidden');

        phoneImage.classList.remove('block');
        phoneImage.classList.add('hidden');
        showCongratsPopup();
        }, 3000);


}

function showCongratsPopup (){
    let i =   document.getElementById("congrats-popup")
      i.classList.remove("hidden");
      i.style.zIndex = '1';
}
function closeCongratsPopup(){
    document.getElementById("congrats-popup").classList.add("hidden");
}


document.addEventListener("DOMContentLoaded", () => {
    const dateElement = document.getElementById("dynamic-date");
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = today.toLocaleDateString(undefined, options);
    displayQuestion(currentQuestionIndex);


});

function closeBox(){
    const currentCover = document.getElementById('box-4');

    if (window.innerWidth <= 900) { // Mobile screen check
        // On mobile, move the cover downwards to simulate "opening"
        currentCover.style.top = currentCover.getAttribute('data-mobile-top');
    } else {
        // On desktop, keep the cover at its initial position
        currentCover.style.top = currentCover.getAttribute('data-desktop-top');
    }
}
window.onload = () => closeBox()


function duplicateCommentPost(){
    let commentPostParent = document.getElementById('comment-post-parent');

    let commentPost = document.getElementById('comment-post');
    for (let i = 0; i < 2; i++) {
        let cloneComment = commentPost.cloneNode(true);
        commentPostParent.append(cloneComment)
    }
}
window.onload = () => duplicateCommentPost()

