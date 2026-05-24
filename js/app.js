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
