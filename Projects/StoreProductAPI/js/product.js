"use strict";

async function products() {
    try {
        let data = await window.fetch("https://fakestoreapi.com/products");
        console.log(data);
        let finalData = await data.json();//The json() method in JavaScript is used to parse JSON data into a JavaScript object. It can be used to convert a JSON string into a JavaScript object, or to convert a JSON file into a JavaScript object.
        console.log(finalData);
        finalData.map(e => {
            console.log(e);
            let { image, title, category, description, price, rating } = e;
            let div = document.createElement("div");
            div.classList.add(".products");
            document.getElementById("cards").appendChild(div);
            div.innerHTML = `
            <div id="product">
                <div id="product-img">
                    <figure>
                        <img src=${image} alt="Product Image">
                    </figure>
                    <figcaption>${title}</figcaption>
                </div>
                <div id="product-info">
                    <h3>${category}</h3>
                    <p></p>
                    <h2>${price} <span>${rating.rate}</span></h2>
                </div>
            </div>
        `;
        })
    } catch (error) {
        console.log(error);
    }
}
products();