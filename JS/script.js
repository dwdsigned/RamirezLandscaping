//Global variables

    // Provides a way to access objects in the images array
    let imagesIndex = 0;

    // Img Element for port
    const portImg = document.querySelector("#portImg");

    // Before button
    const beforeButton = document.querySelector("#before-btn");

    // After button
    const afterButton = document.querySelector("#after-btn");

    // Backward/left arrow button
    const backwardButton = document.querySelector("#portLeft");

    // Backward/Right arrow button
    const forwardButton = document.querySelector("#portRight");

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


// Forward button
    //function
    // functionality to move images using the right arrow button
    function forwardImages() {
    if (imagesIndex === 0 || imagesIndex <= images.length-3) {
        imagesIndex++;
        if ("portActive" === afterButton.getAttribute("class")) {
            portImg.setAttribute("src", `${images[imagesIndex].after}`);
        } else {
            portImg.setAttribute("src", `${images[imagesIndex].before}`);
        }
        backwardButton.classList.remove("doNotDisplay");
        
    } else {
        // disable and/or hide button
        imagesIndex++
        if ("portActive" === afterButton.getAttribute("class")) {
            portImg.setAttribute("src", `${images[imagesIndex].after}`);
        } else {
        portImg.setAttribute("src", `${images[imagesIndex].before}`);
        }
        // Add something to disable button here.
        forwardButton.setAttribute("class", `doNotDisplay portDir`);
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
        } else {
            portImg.setAttribute("src", `${images[imagesIndex].before}`);
        }
        // Disable backward button here
        backwardButton.setAttribute("class", `doNotDisplay portDir`);
    } else {
        imagesIndex--;
        if ("portActive" === afterButton.getAttribute("class")) {
            portImg.setAttribute("src", `${images[imagesIndex].after}`);
        } else {
        portImg.setAttribute("src", `${images[imagesIndex].before}`);
        }
        // Enable forward button here
        forwardButton.classList.remove("doNotDisplay");
    }
}
    //event listener
    backwardButton.addEventListener("click", backwardImages);

    //**********************************************************/


// After Button
    //function
    function afterTest() {
    if ("portActive" === afterButton.getAttribute("class")) {
        beforeButton.removeAttribute("disabled");
        beforeButton.removeAttribute("portActive");
        beforeButton.setAttribute("class", "portNotActive");
        afterButton.setAttribute("disabled", "");
        
    } else {
        portImg.setAttribute("src", `${images[imagesIndex].after}`);
        // Test***
        beforeButton.removeAttribute("portActive");
        beforeButton.setAttribute("class", "portNotActive");
        // Test***^^^
        // Remove `portNotActive` class and replace with `portActive`
        afterButton.removeAttribute("portNotActive");
        afterButton.setAttribute("class", "portActive");
        // Disable afterButton
        afterButton.setAttribute("disabled", "");
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
        afterButton.removeAttribute("disabled");
        afterButton.removeAttribute("portActive");
        afterButton.setAttribute("class", "portNotActive");
        beforeButton.setAttribute("disabled", "");
        
    } else {
        // Set image of portImg by attribute, src, to `images[imagesIndex].before`
        portImg.setAttribute("src", `${images[imagesIndex].before}`);
        // Test***
        afterButton.removeAttribute("portActive");
        afterButton.setAttribute("class", "portNotActive");
        // Test***^^^
        // Remove `portNotActive` class and replace with `portActive`
        beforeButton.removeAttribute("portNotActive");
        beforeButton.setAttribute("class", "portActive");
        // Disable beforeButton
        beforeButton.setAttribute("disabled", "");
        // remove disable on afterButton
        afterButton.removeAttribute("disabled");
    }
}
    //event listener
    beforeButton.addEventListener("click", beforeTest);