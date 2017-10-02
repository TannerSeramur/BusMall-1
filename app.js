//Make an object
'use strict';

Product.allProducts = [];

function Product(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  Product.allProducts.push(this);
}

//Make new Products instances
new Product('Bag', 'img/bag.jpg');
new Product('Banana Slicer', 'img/banana.jpg');
new Product('Bathroom', 'img/bathroom.jpg');
new Product('Boots', 'img/boots.jpg');
new Product('Breakfast', 'img/breakfast.jpg');

//Array to store the objects

//Event Listener, something to be clicked

var imgEl = document.getElementById('productPic');

imgEl.addEventListener('click', randomProduct);

//Randomly display one of the pictures

function randomProduct() {
  var randomIndex = Math.floor(Math.random() * Product.allProducts.length);
  imgEl.src = Product.allProducts[randomIndex].filepath;
}

randomProduct();
