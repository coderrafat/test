// function copyText() {
//     // Get the text to copy
//     var textToCopy = document.getElementById("text-to-copy").value;
  
//     // Create a temporary input element
//     var tempInput = document.createElement("input");
  
//     // Set the input element's value to the text to copy
//     tempInput.value = textToCopy;
  
//     // Append the input element to the DOM
//     document.body.appendChild(tempInput);
  
//     // Select the text in the input element
//     tempInput.select();
  
//     // Copy the selected text to the clipboard
//     document.execCommand("copy");
  
//     // Remove the temporary input element from the DOM
//     document.body.removeChild(tempInput);
  
//     // Update the copy message
//     var copyMessage = document.getElementById("copy-message");
//     copyMessage.innerText = "Copied!";
    
//     // Update the copy button
//     var copyButton = document.getElementById("copy-button");
//     copyButton.innerText = "Copied!";
  
//     // Clear the message and button label after a short delay
//     // setTimeout(function() {
//     //   copyMessage.innerText = "";
//     //   copyButton.innerText = "Copy";
//     // }, 2000);
//   }
  
  

var deleteButton = document.getElementById("delete-button");
var popupContainer = document.getElementById("popup-container");
var popupYes = document.getElementById("popup-yes");
var popupNo = document.getElementById("popup-no");

deleteButton.addEventListener("click", function() {
  popupContainer.style.display = "block";
});

popupYes.addEventListener("click", function() {
  popupContainer.style.display = "none";
  deleteItem();
});

popupNo.addEventListener("click", function() {
  popupContainer.style.display = "none";
});

function deleteItem() {
  // Delete the item here
}
