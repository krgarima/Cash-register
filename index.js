const billAmount = document.querySelector("#billAmount");
const cashReceived = document.querySelector("#cashReceived");
const checkButton = document.querySelector("#checkButton");
const  message= document.querySelector("#message");
const  noOfNotes= document.querySelector(".noOfNotes");

const availableNotes = [2000,500,200,100,20,10,1];

checkButton.addEventListener("click", function validAmount()
{
    hideMessage();
    if(billAmount.value>=0)
    {
        if(cashReceived.value>billAmount.value)
        {
            const changeAmount = cashReceived.value - billAmount.value;
            remainingAmount(changeAmount);
        }
        else
        errorMessageDisplay("We have an opening for a dishwashing/cleaning man. Do you wish to apply to cover the remaining expense?.");
    }
    else
    errorMessageDisplay("Entered bill amount is less than 0. Put your spex first.");
});

function remainingAmount(amount)
{
    for(let i =0; i<availableNotes.length;i++)
    {
    const notes = Math.trunc(amount/availableNotes[i]);
    amount= amount%availableNotes[i];
    noOfNotes[i].innerText = notes;
    }
}

function errorMessageDisplay(msg)
{
    message.style.display="block";
    message.innerText = "Message: "+msg;
}

function hideMessage()
{
    message.style.display = "none";
}