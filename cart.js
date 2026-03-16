
let cart=JSON.parse(localStorage.getItem("cart")||"[]")
const container=document.getElementById("cartItems")

if(container){
let total=0
cart.forEach(i=>{
const div=document.createElement("div")
div.innerHTML=i.name+" - Rs "+i.price
container.appendChild(div)
total+=i.price
})

const t=document.createElement("h3")
t.innerText="Total: Rs "+total
container.appendChild(t)
}
