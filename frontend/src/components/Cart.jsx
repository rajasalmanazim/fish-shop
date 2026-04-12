import React from "react"

function Cart({cart,setCart}){

const total = cart.reduce(
(sum,item)=>sum + item.price * item.quantity,
0
)

if(cart.length === 0) return null

return(

<div className="fixed bottom-5 right-5 bg-white shadow p-5 w-72 rounded">

<h2 className="font-bold mb-3">
Cart
</h2>

{cart.map(item =>(

<p key={item._id}>
{item.name} x {item.quantity}
</p>

))}

<p className="font-bold mt-3">
Total: Rs {total}
</p>

</div>

)

}

export default Cart