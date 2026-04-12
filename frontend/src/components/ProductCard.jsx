import React from "react";

function ProductCard({product,cart,setCart}){

const addToCart = () => {

const exist = cart.find(item => item._id === product._id)

if(exist){

setCart(
cart.map(item =>
item._id === product._id
? {...item, quantity:item.quantity+1}
: item
)
)

}else{

setCart([...cart,{...product,quantity:1}])

}

}

return(

<div className="bg-white rounded-lg shadow">

<img
src={product.image}
alt={product.name}
className="h-52 w-full object-cover rounded-t-lg"
/>

<div className="p-4">

<div className="flex justify-between">

<h3 className="font-semibold">
{product.name}
</h3>

<span className="text-xs bg-black text-white px-2 rounded">
{product.quantity} in stock
</span>

</div>

<p className="text-gray-500 text-sm">
{product.type}
</p>

<p className="text-gray-500 text-sm">
{product.description}
</p>

<div className="flex justify-between mt-3">

<p className="font-bold">
Rs. {product.price}
</p>

<button
onClick={addToCart}
className="bg-black text-white px-3 py-1 rounded"
>
Add to Cart
</button>

</div>

</div>

</div>

)

}

export default ProductCard