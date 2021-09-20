const billAmount = document.querySelector("#bill-Amount");
const cashReceived = document.querySelector("#cash-Received");
const checkButton = document.querySelector("#checkButton");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-Of-Notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validAmount() {
    hideMessage();
    if ((billAmount.value) && (cashReceived.value)) {
        if ((billAmount.value >= 0) && (cashReceived.value >= 0)) {
            if ((Number(billAmount.value)) != (Number(cashReceived.value))) {
                if ((Number(cashReceived.value) >= Number(billAmount.value))) {
                    const changeAmount = (Number(cashReceived.value) - Number(billAmount.value));
                    errorMessageDisplay("Change to be returned is Rs."+ changeAmount);
                    remainingAmount(changeAmount);
                } else
                    {errorMessageDisplay("We have an opening for a dishwashing/cleaning man. Do you wish to apply to cover the remaining expense?.");
                    remainingAmount(0);}
            } else
                errorMessageDisplay("No change to be returned");
        } else
            errorMessageDisplay("Entered amount is less than 0.");
    } else
        errorMessageDisplay("Enter value in both the fields!");
});

function remainingAmount(amount) {
    for (let i = 0; i < availableNotes.length; i++) {
        const Notes = Math.trunc(amount / availableNotes[i]);
        amount = amount % availableNotes[i];
        noOfNotes[i].innerText = Notes;
    }
}

function errorMessageDisplay(msg) {
    message.style.display = "block";
    message.innerText = "Message: " + msg;
}

function hideMessage() {
    message.style.display = "none";
    //noOfNotes.style.display = "none";
}