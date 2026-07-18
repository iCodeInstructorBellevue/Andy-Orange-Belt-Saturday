# Code

## HTML

```html
<html>
  <header>
    <title>Shop or something idk</title>
    <link rel="stylesheet" href="shop.css">
    <script src="shop.js"></script>
  </header>
  <body>
    <p id="coins-text-start">You have: </p>
    <p>coins</p>
    <br>
    <button id="buy-coins-button">buy coins</button>

    <div id="cards">
      <div>
        <img src="https://static.wikia.nocookie.net/rays-mod/images/a/a6/Amogus.webp/revision/latest?cb=20231110005243">
        <p>Name</p>
        <p>body</p>
      </div>
      <div>
        <img src="https://static.wikia.nocookie.net/rays-mod/images/a/a6/Amogus.webp/revision/latest?cb=20231110005243">
        <p>Name</p>
        <p>body</p>
      </div>
      <div>
        <img src="https://static.wikia.nocookie.net/rays-mod/images/a/a6/Amogus.webp/revision/latest?cb=20231110005243">
        <p>Name</p>
        <p>body</p>
      </div>
    </div>

  </body>

<html>
```

## CSS

```css
p {
  display: inline;
}

#cards { 
  display: flex; 
  flex-direction: row;
  gap: 5px;
}
#cards > div { 
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  font-family: Tahoma;

  width: 200px;
  height: 300px;
  border-radius: 10px; 
  background-color: beige; 
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2); 
}
#cards > div > img {
  max-height: 200px;
  object-fit: cover;
}
```

## Javascript

```javascript
let coinCount = Number(localStorage.getItem("coinCount")) || 0;

const coinsTextStartElem = document.getElementById("coins-text-start");
const buyCoinsButton = document.getElementById("buy-coins-button");

let countElem = document.createElement("p");
countElem.innerText = coinCount;
coinsTextStartElem.append(countElem);

buyCoinsButton.addEventListener("click", (event) => {
  coinCount++;
  localStorage.setItem("coinCount", coinCount);
  if (coinsTextStartElem.children[0]) {
    coinsTextStartElem.children[0].remove();
  }
  let countElem = document.createElement("p");
  countElem.innerText = coinCount;
  coinsTextStartElem.append(countElem);
});
```

# Preview

```
+------------------------------------------------------------------------------------+
|                                        SHOP                                        |
|   You have: 100 coins                                                              |
|   +-----------+                                                                    |
|   | buy coins |                                                                    |
|   +-----------+                                                                    |
|                                        Level 5                                     |
|   +-------------------------+          +----------------------------------------+  |
|   | free robyux (not scame) |          |####################################    |  |
|   +-------------------------+          +----------------------------------------+  |
|                                                                                    |
|   +--------------+   +--------------+   +--------------+   +--------------+   +----|
|   |  __________  |   |  __________  |   |  __________  |   |  __________  |   |  __|
|   | /          \ |   | /          \ |   | /          \ |   | /    ##    \ |   | / _|
|   | | ---  --- | |   | |   +##+   | |   | |  ##  ##  | |   | |    ##    | |   | ||_|
|   | |   ----   | |   | |   +##+   | |   | |   +##+   | |   | |    ##    | |   | |  |
|   | |__________| |   | |__________| |   | |___#__#___| |   | |____##____| |   | |__|
|   |   Weird skin |   | Even weirder |   |   Creeper ?  |   |    Stripe    |   | Amo|
|   |              |   |     skin     |   |              |   |              |   |  Cr|
|   | +----------+ |   | +----------+ |   | +----------+ |   | +----------+ |   | +--|
|   | |   Buy    | |   | |   Buy    | |   | |   Buy    | |   | |   Buy    | |   | |  |
|   | +----------+ |   | +----------+ |   | +----------+ |   | +----------+ |   | +--|
|   +--------------+   +--------------+   +--------------+   +--------------+   +----|
+------------------------------------------------------------------------------------+
```