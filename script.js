//Globals maken die niet anders kunnen dan global

let cookie1 = new Cookie();

//welke hier niet meer nodig? delete plox :)
let upgradeCost = 0;
let counter = document.querySelector("#counter");
let clickAmount = 0;
let intervalIncrease = 0;
let totalAmaount = 0;

let upgradeOne = document.getElementById("upgradeOne");

// main game function
function Cookie() {


    this.click = function () {
        clickAmount++;
        totalAmaount = clickAmount + intervalIncrease;
        counter.innerHTML = totalAmaount;

        return totalAmaount;
    };

    this.autoIncrease = function () {
        if (totalAmaount - upgradeCost < 0){
            console.log("fuck off mate");
        } else {
            totalAmaount = clickAmount + intervalIncrease;
            counter.innerHTML = totalAmaount;
            setInterval(oneUp, 1000);

            return totalAmaount;
        }
    };
}

// cookie clickable and saves number
let image = document.getElementById("clickImage");
upgradeOne.addEventListener("click", function () {
    cookie1.autoIncrease();
});

image.addEventListener("click", function (){
    cookie1.click();
    //store
    localStorage.setItem("lastCount", totalAmaount);

});


// Retrieve
counter.innerHTML = localStorage.getItem("lastCount");

// wat doet die reset hier infeit?
document.getElementById("reset").addEventListener("click", function () {
    localStorage.clear();
});

// deze mss naar de Classes verplaatsen? Of in Game loop plaatsen...
function updateVegan() {
    totalAmaount = intervalIncrease + clickAmount - upgradeCost;
    counter.innerHTML = totalAmaount;
    document.getElementById("debugClick").innerHTML = "ClickAmount= "+ clickAmount;
    document.getElementById("debugTotal").innerHTML = "TotalAmount= "+ totalAmaount;
    document.getElementById("debugUpdate").innerHTML= "UpdateAmount= " + intervalIncrease;
}