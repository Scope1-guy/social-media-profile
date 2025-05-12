const profileForm = document.querySelector(".form-box");
const profileCard = document.querySelector(".profile-box");
const formSubmitButton = document.querySelector(".submit");

formSubmitButton.addEventListener("click", function(event) {
    event.preventDefault();//prevent the form from refreshing the page

    const picture = document.querySelector(".picture-input").value;
    const name = document.querySelector(".name-input").value;
    const title = document.querySelector(".title-input").value;
    const location = document.querySelector(".location-input").value;
    const portfolio = document.querySelector(".portfolio-input").value;
    const github = document.querySelector(".github-input").value;
    const linkedin = document.querySelector(".linkedin-input").value;
    const twitter = document.querySelector(".twitter-input").value;
    const instagram = document.querySelector(".instagram-input").value;


    // Step 4: Update the profile card with the form data
    document.querySelector(".profile-box .image").textContent = picture;

    document.querySelector(".profile-box .name").textContent = name ; //"textContent is a property that allows us to update the text inside ".name element
    //anything that we type in the form .name-input will show in the profile card.document.querySelector(".profile-box .post").textContent = `"${title}"`;

    document.querySelector(".profile-box .post").textContent = `"${title}"`;

    document.querySelector(".profile-box .location").textContent = `"${location}"`; //You can add location input if you want.


    // Optionally, you can update links/buttons to direct to the user's profile
    const buttons = profileCard.querySelectorAll("button");
    buttons[0].onclick = () => window.open(github, "_blank");
    buttons[1].onclick = () => window.open(portfolio, "_blank");
    buttons[2].onclick = () => window.open(linkedin, "_blank");
    buttons[3].onclick = () => window.open(twitter, "_blank");
    buttons[4].onclick = () => window.open(instagram, "_blank");


        // Step 5: Show the profile card
        profileCard.style.display = "block";

        // Optionally, hide the form after submitting
        profileForm.style.display = "none";

})

/*
// Step 1: Select the form and profile elements
const profileForm = document.querySelector(".form-box");
const profileCard = document.querySelector(".profile-box");
const formSubmitButton = document.querySelector(".submit");

// Step 2: Add event listener to the submit button
formSubmitButton.addEventListener("click", function(event) {
    event.preventDefault();  // Prevent the form from refreshing the page

    // Step 3: Get the values of the form fields
    const name = document.querySelector(".name-input").value;
    const title = document.querySelector(".title-input").value;
    const portfolio = document.querySelector(".portfolio-input").value;
    const github = document.querySelector(".github-input").value;
    const linkedin = document.querySelector(".linkedin-input").value;
    const twitter = document.querySelector(".twitter-input").value;
    const instagram = document.querySelector(".instagram-input").value;

    // Step 4: Update the profile card with the form data
    document.querySelector(".profile-box .name").textContent = name;
    document.querySelector(".profile-box .post").textContent = `"${title}"`;
    document.querySelector(".profile-box .location").textContent = "Location: Not set"; // You can add location input if you want

    // Optionally, you can update links/buttons to direct to the user's profile
    const buttons = profileCard.querySelectorAll("button");
    buttons[0].onclick = () => window.open(github, "_blank");
    buttons[1].onclick = () => window.open(portfolio, "_blank");
    buttons[2].onclick = () => window.open(linkedin, "_blank");
    buttons[3].onclick = () => window.open(twitter, "_blank");
    buttons[4].onclick = () => window.open(instagram, "_blank");

    // Step 5: Show the profile card
    profileCard.style.display = "block";

    // Optionally, hide the form after submitting
    profileForm.style.display = "none";
});

*/