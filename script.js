let ans = Math.floor(Math.random() * 100) + 1;


let Totalchances = 3;

function checkValue() {
    Totalchances--;

  let userInput = input.value;

  if(Totalchances>=0){
    let ch = document.getElementById("chance");

    ch.innerText="Remaining chances : " + Totalchances;
        if (userInput === ans ) {
            document.getElementById("result").textContent = "🎉 Correct Answer! You won! 🎉";
            document.getElementById("result").className = "result-correct";
            disableInput();
        } else if (userInput < ans) {
            document.getElementById("result").textContent = "📈 Too low! Try a higher number";
            document.getElementById("result").className = "result-wrong";
        } else {
            
            document.getElementById("result").textContent = "📉 Too high! Try a lower number";
            document.getElementById("result").className = "result-wrong";
        }
    if(Totalchances===0 && userInput !== ans){
        document.getElementById("result").textContent = "💀 Game Over! The number was: " + ans;
        document.getElementById("result").className = "result-game-over";
        disableInput();
    }
  

  }
}

function restart(){
    Totalchances = 3;
    ans = Math.floor(Math.random() * 100) + 1;

    document.getElementById("input").value="";
    document.getElementById("chance").innerText="Remaining Chances: 3";
    document.getElementById("result").textContent="Enter a number and click Submit to start!";
    document.getElementById("result").className = "";
    enableInput();
}

function disableInput() {
    document.getElementById("input").disabled = true;
    document.getElementById("input").classList.add("disabled");
    document.getElementById("button").disabled = true;
    document.getElementById("button").classList.add("disabled");
}

function enableInput() {
    document.getElementById("input").disabled = false;
    document.getElementById("input").classList.remove("disabled");
    document.getElementById("button").disabled = false;
    document.getElementById("button").classList.remove("disabled");
}

// Add Enter key support
document.getElementById("input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkValue();
    }
});

// Focus on input when page loads
window.addEventListener("load", function() {
    document.getElementById("input").focus();
});