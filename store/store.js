const balls = [
 { name: "basketball", priceDollar: 339, image: "https://www.stigaus.com/cdn/shop/files/stiga-one-star-sports-themed-table-tennis-balls_tabletennisballs__t1405-1_3_1000x.png?v=1709074182"},
 { name: "basketball", priceDollar: 541, image:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3tMgbJmPINJozGbS2vYjYA7EGIieWIxC5rMzFDCbp0Q&s=10"},
 { name: "soccerball", priceDollar: 455, image: "https://www.fivebelow.com/image/upload/t_large/product/9128019_01.jpg"},
 { name: "soccerball", priceDollar: 939, image: "https://dks.scene7.com/is/image/dkscdn/25ADIUSOCCWC26LGXXDFD_White_Solar_Blue_Red_Lime_is?$UTPMain$&wid=500&hei=500"},
 { name: "baseball", priceDollar: 281, image: "https://cdn11.bigcommerce.com/s-1d7v646c9d/images/stencil/1024x1024/products/300/875/PB1S-Baseball__89510.1535572423.jpg?c=2"},
 { name: "baseball", priceDollar: 320, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ27NpKhC3IVmTaVYtzCvYEclEiUICNgcJHWV4aivHOkg&s=10"},
];
function showBalls(ballsList) {
    const ballContainer = document.getElementById("ball-container");
    ballContainer.replaceChildren();
    for(let ball of ballsList){
        const priceText = document.createElement("p");
        priceText.innerText = "$" + ball.priceDollar;
        ballContainer.append(priceText);

        const ballImage = document.createElement("img");
        ballImage.src = ball.image;
        ballImage.classList.add("ball");
         ballImage.classList.add(ball.name);
        ballContainer.append(ballImage);
    }
}
const searchbar=document.getElementById("searchbar")
searchbar.addEventListener("input",function(eventIn){
 showBalls (balls.filter(function(ball){
    return ball.name.includes(searchbar.value);
}));   
})
showBalls (balls.filter(function(ball){
    return ball.name.includes(searchbar.value);
}));