// Img Element
const portImg = document.querySelector("#portImg");
console.log(portImg);

// Before button
const before = document.querySelector("#before-btn");
console.log(before);

// After button
const after = document.querySelector("#after-btn");
console.log(after);

// Left arrow button
const leftArrow = document.querySelector("#portLeft");
console.log(leftArrow);

// Right arrow button
const rightArrow = document.querySelector("#portRight");
console.log(rightArrow);

// Images
const images = [
    {
        before: "Images/beforeSod.png",
        after: "Images/afterSod.png",
    },
    {
        before: "Images/beforeHardscaped.png",
        after: "Images/afterHardscaped.png",
    },
    {
        before: "Images/beforeHouseSod.png",
        after: "Images/afterHouseSod.png",
    },
    {
        before: "Images/beforeGarden.png",
        after: "Images/afterGarden.png",
    },
]

console.log(images[3].after);

// function forwardImages() {
//     for (i=0; i < images.length; i++) {
//         images[i];
//         console.log(images[i]);
//     };
// }

function backwardImages() {
    for (i=0; i < 0; i--) {
        images[i];
        console.log(images[i]);
    };
}

function forwardImages() {
    i=
    i++;
    images[i];
}
