//Global variable
let imagesIndex = 0;

// Img Element for port
const portImg = document.querySelector("#portImg");
console.log(portImg);

// Before button
const beforeButton = document.querySelector("#before-btn");
console.log(beforeButton);
const beforeStatus = beforeButton.getAttribute("class");

// After button
const afterButton = document.querySelector("#after-btn");
console.log(afterButton);
const afterStatus = afterButton.getAttribute("class");

// Left/backward arrow button
const backwardButton = document.querySelector("#portLeft");
console.log(backwardButton);

// Right arrow button
const forwardButton = document.querySelector("#portRight");
console.log(forwardButton);

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

// images[imagesIndex];

// Forward button function
function forwardImages() {
    if (imagesIndex === 0 || imagesIndex <= images.length-3) {
        imagesIndex++;
        if (afterStatus === "portActive") {
            portImg.setAttribute("src", `${images[imagesIndex].after}`);
            //console.log(portImg.setAttribute("src", `${images[imagesIndex].after}`));
        } else {
            portImg.setAttribute("src", `${images[imagesIndex].before}`);
        }
        // Make sure backward button is enabled
        backwardButton.removeAttribute("disabled");
        console.log("enabled backward button");
        
    } else {
        // disable and/or hide button
        imagesIndex++
        console.log(imagesIndex);
        if (afterStatus === "portActive") {
            portImg.setAttribute("src", `${images[imagesIndex].after}`);
            console.log(portImg.setAttribute("src", `${images[imagesIndex].after}`));
        } else {
        portImg.setAttribute("src", `${images[imagesIndex].before}`);
        console.log(portImg.setAttribute("src", `${images[imagesIndex].before}`));
        }
        // Add something to disable button here.
        forwardButton.setAttribute("disabled", "");
        console.log("disabled forward button");
    }
}

// Backward button function
function backwardImages() {
    if (imagesIndex === 1) {
        imagesIndex--;
        if (afterStatus === "portActive") {
            portImg.setAttribute("src", `${images[imagesIndex].after}`);
            //console.log(portImg.setAttribute("src", `${images[imagesIndex].after}`));
        } else {
            portImg.setAttribute("src", `${images[imagesIndex].before}`);
            //console.log(portImg.setAttribute("src", `${images[imagesIndex].before}`));
        }
        // Disable backward button here
        backwardButton.setAttribute("disabled", "");
        console.log("disable backward button");
    } else {
        imagesIndex--;
        if (afterStatus === "portActive") {
            portImg.setAttribute("src", `${images[imagesIndex].after}`);
            //console.log(portImg.setAttribute("src", `${images[imagesIndex].after}`));
        } else {
        portImg.setAttribute("src", `${images[imagesIndex].before}`);
        //console.log(portImg.setAttribute("src", `${images[imagesIndex].before}`));
        }
        // Enable forward button here
        forwardButton.removeAttribute("disabled");
        console.log("enabled forward button");
    }
}


// After Button function
function afterTest() {
    if (afterStatus === "portActive") {
        //console.log("it's active");
        return
        
    } else {
        //console.log(`it's not active`);
        // Set image of portImg by attribute, src, to `images[imagesIndex].after`
        portImg.setAttribute("src", `${images[imagesIndex].after}`);
        // Maybe use template literals
        // Disable afterButton
        afterButton.setAttribute("disabled", "");
        // remove disable on beforeButton
        beforeButton.removeAttribute("disabled");
        // Remove `portNotActive` class and replace with `portActive`
        afterButton.removeAttribute("portNotActive");
        afterButton.setAttribute("class", "portActive");
        //console.log(`it's active now`);
        //console.log("After button has been disabled");
        // Change class of beforeButton to `portNotActive`
    }
}


// Before button function
function beforeTest() {
    if (beforeStatus === "portActive") {
        //console.log("it's active");
        return
        
    } else {
        console.log(`it's not active`);
        // Set image of portImg by attribute, src, to `images[imagesIndex].before`
        portImg.setAttribute("src", `${images[imagesIndex].before}`);
        // Maybe use template literals
        // Disable beforeButton
        beforeButton.setAttribute("disabled", "");
        // remove disable on afterButton
        afterButton.removeAttribute("disabled");
        // Remove `portNotActive` class and replace with `portActive`
        beforeButton.removeAttribute("portNotActive");
        beforeButton.setAttribute("class", "portActive");
        //console.log(`it's active now`);
        //console.log("beforeButton has been disabled");
        // Change class of afterButton to `portNotActive`
    }
}