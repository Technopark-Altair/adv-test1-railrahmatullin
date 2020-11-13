import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productsPick = [
	{"name":"<h2>Nike Штаны</h2>Размер:S-XL<br>Цена:1200Рублей","pic":"assets/Rebel_55749401_darkgrey_hi-res.jpg"},
  		{"name":"<h2>Nike штаны</h2>Размер:S-XL<br>Цена:1000Рублей","pic":"assets/b3ba4f60cd031470e3937823c0f72ae9.jpeg"},
  		{"name":"<h2>Nike футболка</h2>Размер:S-XL<br>Цена:1000Рублей","pic":"assets/Nike-SB-DFC-Logo-T-Shirt-Obsidian.jpg"},
  		{"name":"<h2>Шорты Adidas</h2>Размер:Xs-L<br>Цена:1200Рублей","pic":"assets/adidas-originals-tape.jpg"},
  		{"name":"<h2>Nike носки</h2>Размер:36-44<br>Цена:500Рублей","pic":"assets/594d09aa1ce5d.jpg"},
  		{"name":"<h2>Nike футболка</h2>Размер:S-XL<br>Цена:1000Рублей","pic":"assets/1146207_3.jpg"},
  		{"name":"<h2>Футболка Nike</h2>Размер:Xs-L<br>Цена:1000Рублей","pic":"assets/open_graph.jpg"},
  		{"name":"<h2>Шорты Adidas</h2>Размер:S-XL<br>Цена:1000Рублей","pic":"assets/dpgm0012160b.jpeg"},
  		{"name":"<h2>Nike кепка</h2><br>Цена:900Рублей","pic":"assets/nike-sb-performance-trucker-hat-black-white-x1.1506666536.jpg"},
  		{"name":"<h2>Nike air jordan 1</h2>Размер:40-46<br>Цена:9000Рублей","pic":"assets/Air Jordan Nike AJ I 1 Retro High OG 'Chicago Crystal' (Origin Story)__555088-602.jpg"},
  		{"name":"<h2>Nike сланцы</h2>Размер:36-42<br>Цена:1000Рублей","pic":"assets/20b1d8fbc2c02aab086c33ca77b31b22.jpg"},
  		{"name":"<h2>Nike сланцы</h2>Размер:36-43<br>Цена:1000Рублей","pic":"assets/nike-solarsoft-comfort-men-s-slide-sandal-crd-black-white-7.jpg"},
  		{"name":"<h2>Nike air force 1</h2>Размер:40-45<br>Цена:5000Рублей","pic":"assets/Nike 1.jpeg"},
  		{"name":"<h2>Adidas футболка</h2>Размер:S-L<br>Цена:1000Рублей","pic":"assets/8e803252-e21d-45d0-aef6-9858c4ee4841.jpg"},
  		{"name":"<h2>Nike air force 1 pink</h2>Размер:36-40<br>Цена:4500Рублей","pic":"assets/x_large_3x.jpg"}];
  productsMan = [
	{"name":"<h2>Nike Штаны</h2>Размер:S-XL<br>Цена:1200Рублей","pic":"assets/Rebel_55749401_darkgrey_hi-res.jpg"},
	{"name":"<h2>Nike футболка</h2>Размер:S-XL<br>Цена:1000Рублей","pic":"assets/Nike-SB-DFC-Logo-T-Shirt-Obsidian.jpg"},
	{"name":"<h2>Nike носки</h2>Размер:36-44<br>Цена:500Рублей","pic":"assets/594d09aa1ce5d.jpg"},
	{"name":"<h2>Шорты Adidas</h2>Размер:S-XL<br>Цена:1000Рублей","pic":"assets/dpgm0012160b.jpeg"},
	{"name":"<h2>Nike кепка</h2><br>Цена:900Рублей","pic":"assets/nike-sb-performance-trucker-hat-black-white-x1.1506666536.jpg"},
	{"name":"<h2>Nike сланцы</h2>Размер:36-43<br>Цена:1000Рублей","pic":"assets/nike-solarsoft-comfort-men-s-slide-sandal-crd-black-white-7.jpg"},
	{"name":"<h2>Adidas футболка</h2>Размер:S-L<br>Цена:1000Рублей","pic":"assets/8e803252-e21d-45d0-aef6-9858c4ee4841.jpg"},
	{"name":"<h2>Nike air force 1</h2>Размер:40-45<br>Цена:5000Рублей","pic":"assets/Nike 1.jpeg"},
	{"name":"<h2>Nike футболка</h2>Размер:S-XL<br>Цена:1000Рублей","pic":"assets/1146207_3.jpg"},
	{"name":"<h2>Nike air jordan 1</h2>Размер:40-46<br>Цена:9000Рублей","pic":"assets/Air Jordan Nike AJ I 1 Retro High OG 'Chicago Crystal' (Origin Story)__555088-602.jpg"}];
  productsWoman = [
	{"name":"<h2>Nike штаны</h2>Размер:S-XL<br>Цена:1000Рублей","pic":"assets/b3ba4f60cd031470e3937823c0f72ae9.jpeg"},
	{"name":"<h2>Шорты Adidas</h2>Размер:Xs-L<br>Цена:1200Рублей","pic":"assets/adidas-originals-tape.jpg"},
	{"name":"<h2>Nike носки</h2>Размер:36-44<br>Цена:500Рублей","pic":"assets/594d09aa1ce5d.jpg"},
	{"name":"<h2>Nike сланцы</h2>Размер:36-42<br>Цена:1000Рублей","pic":"assets/20b1d8fbc2c02aab086c33ca77b31b22.jpg"}, 
	{"name":"<h2>Nike air force 1 pink</h2>Размер:36-40<br>Цена:4500Рублей","pic":"assets/x_large_3x.jpg"}];
  title = "test";
  header_class = "header";
  public search: string;
  ngOnInit() {
  	var isMobileDevice = window.navigator.userAgent.toLowerCase().includes("mobi");
    if (isMobileDevice) {
    	document.body.style = "margin:0px;background-color: #e9e9e9;"
    	this.header_class = "header-mobile";
    }
  }
  drawBoxesPick() {
  	document.getElementById("productList").innerHTML = "";
  	for (var i = this.productsPick.length - 1; i >= 0; i--) {
  		var productDiv = document.createElement("div");
  		productDiv.className = "productItem";
  		var picture = document.createElement("img");
  		picture.src = this.productsPick[i].pic;
  		productDiv.innerHTML = picture.outerHTML+this.productsPick[i].name;
  		document.getElementById("productList").appendChild(productDiv);
  	}
  }
  drawBoxesMan() {
  	document.getElementById("productList").innerHTML = "";
  	for (var i = this.productsMan.length - 1; i >= 0; i--) {
  		var productDiv = document.createElement("div");
  		productDiv.className = "productItem";
  		var picture = document.createElement("img");
  		picture.src = this.productsMan[i].pic;
  		productDiv.innerHTML = picture.outerHTML+this.productsMan[i].name;
  		document.getElementById("productList").appendChild(productDiv);
  	}
  }
  drawBoxesWoman() {
  	document.getElementById("productList").innerHTML = "";
  	for (var i = this.productsWoman.length - 1; i >= 0; i--) {
  		var productDiv = document.createElement("div");
  		productDiv.className = "productItem";
  		var picture = document.createElement("img");
  		picture.src = this.productsWoman[i].pic;
  		productDiv.innerHTML = picture.outerHTML+this.productsWoman[i].name;
  		document.getElementById("productList").appendChild(productDiv);
  	}
  }
}
