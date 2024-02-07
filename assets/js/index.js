const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://9c079lun24.execute-api.us-east-1.amazonaws.com/viewcount/")
    let data = await response.json()
    counter.innerHTML = ` Views Report: ${data}`;
}
updateCounter();
