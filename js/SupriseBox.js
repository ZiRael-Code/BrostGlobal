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
}

function phoneBox(boxId, phoneId) {

    const currentCover = document.querySelector(`#box-${boxId} .box-cover`);
        currentCover.style.transform = "translateY(-50px)";

    const phoneImage = document.getElementById(phoneId);
    const targetWidth = 190.73;
    const targetHeight = 181;
    const initialSize = 30;
    const step = 2; // Change in size per interval
    const intervalTime = 20; // Milliseconds between each size change
    let currentWidth = initialSize;
    let currentHeight = initialSize;

    // Bring the phone image in front of the box and cover by increasing z-index
    phoneImage.style.zIndex = '1';

    // Clear any existing interval to prevent overlapping animations
    if (phoneImage.interval) {
        clearInterval(phoneImage.interval);
    }

    // Create a new interval to increase size gradually
    phoneImage.interval = setInterval(() => {
        // Increase size if current size is less than target
        if (currentWidth < targetWidth && currentHeight < targetHeight) {
            currentWidth += step;
            currentHeight += step;
            phoneImage.style.width = `${currentWidth}px`;
            phoneImage.style.height = `${currentHeight}px`;
        } else {
            // Stop interval when target size is reached
            clearInterval(phoneImage.interval);
        }
    }, intervalTime);

}


document.addEventListener("DOMContentLoaded", () => {
    const dateElement = document.getElementById("dynamic-date");
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = today.toLocaleDateString(undefined, options);
    displayQuestion(currentQuestionIndex);
});





