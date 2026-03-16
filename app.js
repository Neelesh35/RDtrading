
const grid = document.getElementById("productGrid")

if(grid){
PRODUCTS.forEach((p,i)=>{
const card=document.createElement("div")
card.className="card"
card.innerHTML=`
<img src="https://picsum.photos/300?random=${i}">
<h3>${p.name}</h3>
<p class="price">Rs ${p.price}</p>
<button onclick="addToCart('${p.name}',${p.price})">Add to Cart</button>
`
grid.appendChild(card)
})
}

function addToCart(name,price){
let cart=JSON.parse(localStorage.getItem("cart")||"[]")
cart.push({name,price})
localStorage.setItem("cart",JSON.stringify(cart))
alert("Added to cart")
}
