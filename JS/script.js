//Global variables

    // Provides a way to access objects in the images array
    let imagesIndex = 0;

    // Img Element for port
    const portImg = document.querySelector("#portImg");
    //console.log(portImg);

    // Before button
    const beforeButton = document.querySelector("#before-btn");
    //console.log(beforeButton);

    // After button
    const afterButton = document.querySelector("#after-btn");
    //console.log(afterButton);

    // Backward/left arrow button
    const backwardButton = document.querySelector("#portLeft");
    //console.log(backwardButton);

    // Backward/Right arrow button
    const forwardButton = document.querySelector("#portRight");
    //console.log(forwardButton);

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

//**********************************************************/

// .setAttribute("class", `doNotDisplay`)
// .removeAttribute("doNotDisplay")








// Forward button
    //function
    // functionality to move images using the right arrow button
    function forwardImages() {
    if (imagesIndex === 0 || imagesIndex <= images.length-3) {
        imagesIndex++;
        if ("portActive" === afterButton.getAttribute("class")) {
            portImg.setAttribute("src", `${images[imagesIndex].after}`);
            //console.log(portImg.setAttribute("src", `${images[imagesIndex].after}`));
        } else {
            portImg.setAttribute("src", `${images[imagesIndex].before}`);
        }
        // Make sure backward button is enabled
        // *********************************************Change code below this line
        // backwardButton.classList.remove("doNotDisplay");
        // backwardButton.removeAttribute("disabled");
        backwardButton.classList.remove("doNotDisplay");
        //.removeAttribute("disabled");
        console.log("enabled backward button");
        
    } else {
        // disable and/or hide button
        imagesIndex++
        console.log(imagesIndex);
        if ("portActive" === afterButton.getAttribute("class")) {
            portImg.setAttribute("src", `${images[imagesIndex].after}`);
            console.log(portImg.setAttribute("src", `${images[imagesIndex].after}`));
        } else {
        portImg.setAttribute("src", `${images[imagesIndex].before}`);
        console.log(portImg.setAttribute("src", `${images[imagesIndex].before}`));
        }
        // Add something to disable button here.
        // forwardButton.setAttribute("disabled", "");
        forwardButton.setAttribute("class", `doNotDisplay portDir`);
        console.log("disabled forward button");
    }
}
    //event listener
    forwardButton.addEventListener("click", forwardImages);


//**********************************************************/


// Backward button
    //function
    function backwardImages() {
    if (imagesIndex === 1) {
        imagesIndex--;
        if ("portActive" === afterButton.getAttribute("class")) {
            portImg.setAttribute("src", `${images[imagesIndex].after}`);
            //console.log(portImg.setAttribute("src", `${images[imagesIndex].after}`));
        } else {
            portImg.setAttribute("src", `${images[imagesIndex].before}`);
            //console.log(portImg.setAttribute("src", `${images[imagesIndex].before}`));
        }
        // Disable backward button here
        // backwardButton.setAttribute("disabled", "");
        backwardButton.setAttribute("class", `doNotDisplay portDir`);
        // backwardButton.setAttribute("class", `portDir`)
        console.log("disable backward button");
    } else {
        imagesIndex--;
        if ("portActive" === afterButton.getAttribute("class")) {
            portImg.setAttribute("src", `${images[imagesIndex].after}`);
            //console.log(portImg.setAttribute("src", `${images[imagesIndex].after}`));
        } else {
        portImg.setAttribute("src", `${images[imagesIndex].before}`);
        //console.log(portImg.setAttribute("src", `${images[imagesIndex].before}`));
        }
        // Enable forward button here
        // forwardButton.removeAttribute("disabled");
        forwardButton.classList.remove("doNotDisplay");
        console.log("enabled forward button");
    }
}
    //event listener
    backwardButton.addEventListener("click", backwardImages);

    //**********************************************************/


// After Button
    //function
    function afterTest() {
    if ("portActive" === afterButton.getAttribute("class")) {
        console.log("after button is already active");
        console.log("before button is inactive");
        beforeButton.removeAttribute("disabled");
        beforeButton.removeAttribute("portActive");
        beforeButton.setAttribute("class", "portNotActive");
        afterButton.setAttribute("disabled", "");
        //return
        
    } else {
        console.log(`after button is not active`);
        console.log(`after button will be actived`);
        // Set image of portImg by attribute, src, to `images[imagesIndex].after`
        portImg.setAttribute("src", `${images[imagesIndex].after}`);
        // Maybe use template literals
        // Test***
        beforeButton.removeAttribute("portActive");
        beforeButton.setAttribute("class", "portNotActive");
        // Test***^^^
        // Remove `portNotActive` class and replace with `portActive`
        afterButton.removeAttribute("portNotActive");
        afterButton.setAttribute("class", "portActive");
        //console.log(`it's active now`);
        // Disable afterButton
        afterButton.setAttribute("disabled", "");
        //console.log("After button has been disabled");
        // Change class of beforeButton to `portNotActive`
        // remove disable on beforeButton
        beforeButton.removeAttribute("disabled");
    }
}
    //event listener
    afterButton.addEventListener("click", afterTest);


    //**********************************************************/


// Before button
    //function
    function beforeTest() {
    if ("portActive" === beforeButton.getAttribute("class")) {
        console.log("before is already active");
        console.log("after is inactive");
        afterButton.removeAttribute("disabled");
        afterButton.removeAttribute("portActive");
        afterButton.setAttribute("class", "portNotActive");
        beforeButton.setAttribute("disabled", "");
        //return
        
    } else {
        console.log(`before is not active`);
        // Set image of portImg by attribute, src, to `images[imagesIndex].before`
        portImg.setAttribute("src", `${images[imagesIndex].before}`);
        // Maybe use template literals
        // Test***
        afterButton.removeAttribute("portActive");
        afterButton.setAttribute("class", "portNotActive");
        // Test***^^^
        // Remove `portNotActive` class and replace with `portActive`
        beforeButton.removeAttribute("portNotActive");
        beforeButton.setAttribute("class", "portActive");
        // Disable beforeButton
        beforeButton.setAttribute("disabled", "");
        console.log(`before button is now active now`);
        //console.log("beforeButton has been disabled");
        // Change class of afterButton to `portNotActive`
        // remove disable on afterButton
        afterButton.removeAttribute("disabled");
    }
}
    //event listener
    beforeButton.addEventListener("click", beforeTest);