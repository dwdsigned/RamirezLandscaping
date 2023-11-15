//Global variable
let imagesIndex = 0;

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

console.log(images[imagesIndex].after);
console.log(images[imagesIndex].before);

// function forwardImages() {
//     for (i=0; i < images.length; i++) {
//         images[i];
//         console.log(images[i]);
//     };
// }

function backwardImages() {
    imagesIndex--;
}

function forwardImages() {
    imagesIndex++;
    // Change src for image
}

if (imagesIndex === 0 || imagesIndex <= images.length-2 ) {
    forwardImages();
    // Make sure button is enabled

} else {
    // disable and/or hide button
    
}

if (imagesIndex > 0) {
    imagesIndex--;
} else {}

// imagesIndex === images.length-1
console.log(images.length-2);