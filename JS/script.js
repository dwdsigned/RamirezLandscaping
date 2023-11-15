//Global variable
let imagesIndex = 0;

// Img Element
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


// function forwardImages() {
    //     for (i=0; i < images.length; i++) {
        //         images[i];
        //         console.log(images[i]);
        //     };
        // }
        
        // function backwardImages() {
            //     imagesIndex--;
            // }
            
            
            // Add
            // function forwardImages() {
                //     imagesIndex++;
                //     // Change src for image
                // }
                
                // if (imagesIndex === 0 || imagesIndex <= images.length-2 ) {
                    //     forwardImages();
                    //     // Make sure button is enabled
                    
                    // } else {
                        //     // disable and/or hide button
                        //     console.log("disabled forward button")
                        // }
                        
                        // Subtract
                        // if (imagesIndex > 0) {
                            //     imagesIndex--;
                            // } else {}
                            
                            // imagesIndex === images.length-1
                            // console.log(images.length-2);
                            
                            
                            
                            // Forward button function
                            function forwardImages() {
                                if (imagesIndex === 0 || imagesIndex <= images.length-3) {
                                    imagesIndex++;
                                    // Make sure backward button is enabled
                                    console.log("enabled backward button");
                                    
                                } else {
                                    // disable and/or hide button
                                    imagesIndex++
                                    console.log(imagesIndex);
                                    console.log("disabled forward button");
                                }
                            }
                            
                            
                            // Backward button function
                            function backwardImages() {
                                if (imagesIndex === 1) {
                                    imagesIndex--;
                                    console.log("disable backward button");
                                } else {
                                    imagesIndex--;
                                    console.log("enabled forward button");
                                }
                            }
                            









                            // console.log(images[imagesIndex].after);
                            // console.log(images[imagesIndex].before);

                            // After
                            // console.log(images[imagesIndex].after);
                            
                            
                            function afterTest() {
                                if (afterStatus === "portActive") {
                                    //console.log("it's active");
                                    return
                                    
                                } else {
                                    console.log(`it's not active`);
                                    // Set image of portImg by attribute, src, to `images[imagesIndex].after`
                                    // Maybe use template literals
                                    // Disable afterButton
                                    // remove disable on beforeButton
                                    // Remove `portNotActive` class and replace with `portActive`
                                    console.log(`it's active now`);
                                    console.log("After button has been disabled");
                                    // Change class of beforeButton to `portNotActive`
                                }
                                
                            }
                            
                            // Before
                            // console.log(images[imagesIndex].before);

                            function beforeTest() {
                                if (beforeStatus === "portActive") {
                                    //console.log("it's active");
                                    return
                                    
                                } else {
                                    console.log(`it's not active`);
                                    // Set image of portImg by attribute, src, to `images[imagesIndex].before`
                                    // Maybe use template literals
                                    // Disable beforeButton
                                    // remove disable on afterButton
                                    // Remove `portNotActive` class and replace with `portActive`
                                    console.log(`it's active now`);
                                    console.log("beforeButton has been disabled");
                                    // Change class of afterButton to `portNotActive`
                                }
                            }





                            // function beforeTest() {
                            //     if (beforeStatus === "portActive") {
                            //         console.log("it's active");
                            //         // Set image of portImg by attribute src to `images[imagesIndex].before`
                            //         // Maybe use template literals
                            //         // Disable before button
                            //         console.log("Before button has been disabled")
                            //     } else {
                            //         console.log("it's not active");
                            //     }
                            // }



                            // function beforeTest2() {
                            //     if (beforeStatus === "portNotActive") {
                            //         //console.log("it's active");
                            //         return
                                    
                            //     } else {
                            //         console.log(`it's not active`);
                            //         // Set image of portImg by attribute src to `images[imagesIndex].after`
                            //         // Maybe use template literals
                            //         // Disable afterButton
                            //         // Remove `portNotActive` class and replace with `portActive`
                            //         console.log(`it's active now`);
                            //         console.log("After button has been disabled")
                            //     }
                            // }
                            










                            // beforeTest();
                            // afterTest();