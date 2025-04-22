let noClicks =1;
const maxNoClicks =5;
const minNoScale = 0.65;
let noScale =1;
let yesScale =1;
const gifElement = document.getElementById("togepi-giff");
const noButton =document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const buttonContainer = document.querySelector(".btn-container");
const yesButtonStyle = window.getComputedStyle(yesButton);
const maxYesWidth = parseFloat(yesButtonStyle.maxWidth);

//array of gifs - in order
const gifs = ["assets/picc/togepi-crying.gif" ,"assets/picc/togepi-sad-1.gif", "assets/picc/togepi-sad-2.gif","assets/picc/togepi-crying.gif","assets/picc/giphy.gif"]
const gifs2 = ["assets/picc/giphy2.gif" ,"assets/picc/giphy3.gif", "assets/picc/giphy.gif","assets/picc/giphy4.gif","assets/picc/giphy.gif"]
//array of messeges
const buttonMesseges = ["Fuck u Honey" , "Are you sure??" , "Honey!!!!" , "Last Chance", "You can't to do this to" ];
const buttonMesseges2 = ["Fuck u Honey" , "Get the Fuck out" , "Sons of bitch" , "Jerk","Dick head" ];

// no button clicked
noButton.addEventListener("click", () => {
    if (noClicks < maxNoClicks) {
        // change image
        gifElement.src = gifs[noClicks % maxNoClicks];
    }else{
        gifElement.src = gifs2[noClicks % maxNoClicks];
    }

    if (noClicks < maxNoClicks) {
        // change image
        noButton.textContent = buttonMesseges[noClicks % maxNoClicks];
    }else{
        noButton.textContent = buttonMesseges2[noClicks % maxNoClicks];
    }


    // Adjust button width to fit text
    noButton.style.width = 'auto';
    noButton.style.width = `${noButton.scrollWidth}px`;

    // decrease the size of the no button
    if (noScale > minNoScale) {
        noScale -= 0.1;
        noButton.style.transform = `scale(${noScale})`;
    }

    // Calculate the scaled width of the yesButton
    const baseWidth = parseFloat(yesButtonStyle.width);
    const scaledWidth = baseWidth * yesScale; // Reflects the actual visual size of the button

    console.log(`Scaled Width: ${scaledWidth}, Max Width: ${maxYesWidth}`);

    // Check if the scaled width is less than the max width
    if (scaledWidth < maxYesWidth) {
        yesScale += 0.5; // Increment scale by a smaller step
        yesButton.style.transform = `scale(${yesScale})`;

        //Get the current gap scale factor from CSS
        const rootStyles = getComputedStyle(document.documentElement);
        const gapScaleFactor = parseFloat(rootStyles.getPropertyValue("--gap-scale-factor"))||250;
        
        //Adjust the gap dynamically
        const currentGap = parseFloat(buttonContainer.style.gap)||20;
        const newGap = Math.sqrt(currentGap * gapScaleFactor); //Scale based on the facter
        buttonContainer.style.gap = `${newGap}px`;

    }

    // increment the number of clicks
    noClicks++;
});
