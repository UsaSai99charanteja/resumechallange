const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://ucceijnbz4ery4jdg5qvlolb5e0ofzzl.lambda-url.us-east-1.on.aws/")
    let data = await response.json()
    counter.innerHTML = ` Views Report: ${data}`;
}
updateCounter();