function comingSoon(featureName) {
    alert(featureName + " will be added in a later version.");
}

function sendMessage(event) {
    event.preventDefault();

    let recipient = document.getElementById("recipient").value;
    let message = document.getElementById("messageText").value;

    if(recipient === "" || message === "") {
        alert("Please complete all fields.");
        return;
    }

    alert("Message sent to " + recipient);

    document.getElementById("recipient").value = "";
    document.getElementById("messageText").value = "";
}
