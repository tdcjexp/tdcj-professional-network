function comingSoon(featureName) {
    alert(featureName + " will be added in a later version.");
}

function sendMessage(event) {
    event.preventDefault();

    let recipient = document.getElementById("recipient").value;
    let message = document.getElementById("messageText").value;

    if (recipient.trim() === "" || message.trim() === "") {
        alert("Please complete all fields.");
        return;
    }

    alert("Message sent to " + recipient);

    document.getElementById("recipient").value = "";
    document.getElementById("messageText").value = "";
}

function sendConnection(name) {
    alert("Connection request sent to " + name);
}

function fakeLogin(event) {
    event.preventDefault();

    localStorage.setItem("loggedInUser", "Joseph Fincher");

    alert("Logged in as Joseph Fincher");

    window.location.href = "index.html";
}

function showWelcome() {
    let user = localStorage.getItem("loggedInUser");
    let welcomeBox = document.getElementById("welcomeBox");

    if (user && welcomeBox) {
        welcomeBox.innerHTML = "Welcome, " + user;
    }
}
function logout() {
    localStorage.removeItem("loggedInUser");
    alert("Logged out");
    window.location.href = "index.html";
}
function loadProfile() {
    let user = localStorage.getItem("loggedInUser");

    if(user){
        document.getElementById("profileName").innerHTML = user;
    }
}
function saveProfile(){

let profile = {

position: document.getElementById("position").value,

experience: document.getElementById("experience").value,

expertise: document.getElementById("expertise").value,

about: document.getElementById("about").value

};

localStorage.setItem(
"profileData",
JSON.stringify(profile)
);

alert("Profile saved");
}

function loadProfile() {

let user = localStorage.getItem("loggedInUser");

if(user){
document.getElementById("profileName").innerHTML = user;
}

let savedProfile =
JSON.parse(localStorage.getItem("profileData"));

if(savedProfile){

document.getElementById("position").value =
savedProfile.position;

document.getElementById("experience").value =
savedProfile.experience;

document.getElementById("expertise").value =
savedProfile.expertise;

document.getElementById("about").value =
savedProfile.about;

}

}
function loadSearchResults() {
    let user = localStorage.getItem("loggedInUser");
    let savedProfile = JSON.parse(localStorage.getItem("profileData"));

    if (user) {
        document.getElementById("searchName").innerHTML = user;
    }

    if (savedProfile) {
        document.getElementById("searchPosition").innerHTML = savedProfile.position;
        document.getElementById("searchExpertise").innerHTML = savedProfile.expertise;
    }
}
