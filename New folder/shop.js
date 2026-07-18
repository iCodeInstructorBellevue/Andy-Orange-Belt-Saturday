let coinCount = 0;

const coinsTextstartElem = document.getElementById("coin-text-start")
const buyCoinsButton = document.getElementById("buy-coin-button");

let countElem = document.createElement('p');
countElem.innerText = coinCount;
coinsTextstartElem.append(countElem);

buyCoinsButton.addEventListener("click", (event) => {
    coinCount++;
    if (coinsTextstartElem.children[0]) {
        coinsTextstartElem.children[0].remove();
    }
    let countElem = document.createElement('p');
    countElem.innerText = coinCount;
    coinsTextstartElem.append(countElem);
});

