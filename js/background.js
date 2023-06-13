const images = [
    "pochako1.jpg",
    "pochako2.jpg",
    "pochako3.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];


const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);

//append 는 가장 뒤 , prepend는 가장 위에 온다.