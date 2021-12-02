// let page = document.getElementById("buttonDiv");
// let selectedClassName = "current";
// const presetButtonColors = ["#e8453c", "#e08b0b", "#f9f62d", "#3aa757", "#6dedb3", "#65d9db", "#63b7f7", "#4688f1", "#e38de0", "#b66ded"];


// //Reacts to a button click by marking the selected button and saving the selection
// function handleButtonClick(event) {
//     //Remove from the previously selected color
//     let current = event.target.parentElement.querySelector(`.${selectedClassName}`);
//     if (current && current !== event.target) {
//         current.classList.remove(selectedClassName);
//     }

//     //mark the button as seleceted
//     let color = event.target.dataset.color;
//     event.target.classList.add(selectedClassName);
//     chrome.storage.sync.set({ color });
// }

// // Add a button to the page for each supplied color
// function constructOptions(buttonColors) {
//   chrome.storage.sync.get("color", (data) => {
//     let currentColor = data.color;
//     // For each color we were provided
//     for (let buttonColor of buttonColors) {
//         //create a button with that color// …create a button with that color
//         let button = document.createElement("button");
//         button.dataset.color = buttonColor;
//         button.style.backgroundColor = buttonColor;
//         //mark the currently selected color
//         if (buttonColor === currentColor) {
//             button.classList.add(selectedClassName);
//         }
//         //register a listener for when that button is clicked
//         button.addEventListener("click", handleButtonClick);
//         page.appendChild(button);
//     }
//   });
// }

// //Initialize the page by constructing the color options
// constructOptions(presetButtonColors);