function yangiButtonYarat() {
    const yangiButton = document.createElement("button");
    yangiButton.textContent = "Yangi button";
    document.getElementById("buttonContainer").appendChild(yangiButton);
}



document.addEventListener("keydown", (event) => {
    const div = document.getElementById("rangliDiv");
    if (event.key === "q") div.style.backgroundColor = "red";
    else if (event.key === "s") div.style.backgroundColor = "yellow";
    else if (event.key === "d") div.style.backgroundColor = "darkgray";
    else if (event.key === "b") div.style.backgroundColor = "blue";
});



function tasodifiyRaqam() {
    const raqam = Math.floor(Math.random() * 100) + 1;
    document.getElementById("raqam").textContent = raqam;
    
    const ranglar = ["red", "yellow", "blue", "green", "purple"];
    const tasodifiyRang = ranglar[Math.floor(Math.random() * ranglar.length)];
    document.body.style.backgroundColor = tasodifiyRang;
}





let intervalId;
let ishlayapti = false;

function fonniOzgartir() {
    if (ishlayapti) {
        clearInterval(intervalId);
        ishlayapti = false;
    } else {
        intervalId = setInterval(() => {
            const ranglar = ["red", "yellow", "blue", "green", "purple"];
            const tasodifiyRang = ranglar[Math.floor(Math.random() * ranglar.length)];
            document.body.style.backgroundColor = tasodifiyRang;
        }, 2000);
        ishlayapti = true;
    }
}











const oylanganSon = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    const userGuess = parseInt(document.getElementById("userGuess").value);
    const resultDiv = document.getElementById("result");

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        resultDiv.textContent = "1 dan 10 gacha bo'lgan son kiritin";
        resultDiv.style.color = "red";
        return;
    }

    if (userGuess === oylanganSon) {
        resultDiv.textContent = "Ura! Siz topdiz yutdiz";
        resultDiv.style.color = "green";
    } else if (userGuess < oylanganSon) {
        resultDiv.textContent = "Topomadiz man o'ylagan son siz etkan sondan kottaroq";
        resultDiv.style.color = "orange";
    } else {
        resultDiv.textContent = "Topomadiz, man o'ylagan son siz etkan sondan kichik.";
        resultDiv.style.color = "orange";
    }
}
