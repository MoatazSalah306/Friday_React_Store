import { useDispatch, useSelector } from "react-redux";
import CART_IMG from "../assets/checkout_img.png"
import { incrementProdQuantity } from "../rtk/slices/cart-slice";
import {Link} from "react-router-dom"

function Cart(){

    const cart = useSelector(state=>state.cart)
    const dispatch = useDispatch()
    const totalPrice = cart.reduce((acc,prod)=>{
        acc += prod.price * prod.quantity;
        return acc
    },0)
    const discount = totalPrice/2;
    const shipping = 20

    return(
        <>
        <div className="container" style={{marginTop:"6rem"}}>
            <div className="row w-50 m-auto">
                <div className="">
                    <img src={CART_IMG}/>
                </div>  
            </div>
            <div className="row">
                <div className="master-container mb-5">
                        <div className="card cart">
                        <label className="title">Your cart</label>
                        <div className="products">
                            {
                                cart.map((product)=>(
                                    <div className="product">
                                        <img src={product.image} className="prod-img"/>
                                        <div>
                                            <span>{product.title}</span>
                                            <p>{product.category}</p>
                                            <p>No taxes</p>
                                        </div>
                                        <div className="quantity">
                                            
                                            <span onClick={()=>{console.log("hi")}} className="m-auto cursor-pointer bg-red-200 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                                                <svg fill="none" viewBox="0 0 24 24" height={14} width={14} xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#47484b" d="M20 12L4 12" />
                                                </svg>
                                            </span>                                   
                                            <label>{product.quantity}</label>
                                            <span onClick={()=>{console.log("hi")}} className="m-auto cursor-pointer bg-green-200 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                                                <svg onClick={()=>{dispatch(incrementProdQuantity(product.quantity))}} fill="none" viewBox="0 0 24 24" height={14} width={14} xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#47484b" d="M12 4V20M20 12H4" />
                                                </svg>
                                            </span>

                                        </div>
                                  
                                            <label className="price small ms-auto mb-auto mt-auto me-2">${(product.price * product.quantity).toFixed(2)}</label>
                                    </div>
                                ))
                            }
                        </div>
                        </div>
                        <div className="card coupons">
                        <label className="title">Apply coupons</label>
                        <form className="form">
                            <input type="text" placeholder="Apply your coupons here" className="input_field rounded form-control" />
                            <button type="button">Apply</button>
                        </form>
                        </div>
                        <div className="card checkout">
                        <label className="title">Checkout</label>
                        <div className="details">
                            <span>Your cart subtotal:</span>
                            <span className="bg-blue-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">{totalPrice.toFixed(2)}$</span>
                            <span>Discount through applied coupons:</span>
                            <span className="bg-red-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">50%</span>
                            <span>Shipping fees:</span>
                            <span className="bg-gray-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">{shipping}$</span> 
                        </div>
                        <div className="checkout--footer">
                            <label className="price"><sup>$</sup>{discount + shipping}</label>
                            <Link to={"/checkout"} type="button" className="checkout-btn text-decoration-none">Checkout</Link>
                        </div>
                        </div>
                </div> 
            </div>
        </div>
        </>
    )
}

export default Cart;