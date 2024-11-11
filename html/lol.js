let openedBox = null;

function toggleBox(boxId) {
    // Close the previously opened box, if any
    if (openedBox && openedBox !== boxId) {
        document.querySelector(`#box-${openedBox} .box-cover`).style.transform = "translateY(0px)";
    }

    // Toggle the current box's cover position
    const currentCover = document.querySelector(`#box-${boxId} .box-cover`);
    if (openedBox === boxId) {
        currentCover.style.transform = "translateY(0px)"

        openedBox = null;
    } else {
        currentCover.style.transform = "translateY(-50px)"; // Adjust this value as needed
        openedBox = boxId;
    }
}