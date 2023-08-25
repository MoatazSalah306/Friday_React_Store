import { useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import {useDispatch,useSelector} from "react-redux"
import { fetchProducts } from "../rtk/slices/products-slice";
import "./components.css"
import { addtoCart } from "../rtk/slices/cart-slice";
import SweetAlert2 from "sweetalert2"

function Products(){

    const products = useSelector(state => state.products);
    const cart = useSelector(state=>state.cart);

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchProducts())
    },[])

    return(
        <>
        {/*search and filters start */}
        <div>
          <div className="w-full md:w-2/3 p-5 rounded-lg">
            <div className="relative">
            <div className="flex flex-col p-2 py-6 m-h-screen">
              <div className="bg-white items-center justify-between w-full flex rounded-full shadow-lg p-2 mb-5 sticky" style={{top: '5px'}}>
                <div>
                  <div className="p-2 mr-1 rounded-full hover:bg-gray-100 cursor-pointer">
                    <svg className="h-6 w-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <input className="font-bold uppercase border rounded-full w-full py-4 pl-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline  lg:text-sm text-xs" type="text" placeholder="Search" />
                <div className="bg-gray-600 p-2 hover:bg-purple-400 cursor-pointer mx-2 rounded-full">
                  <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              
            </div>
            <div>
            
          </div>
            </div>
            <div className="flex items-center justify-between mt-4">
            <p className="font-medium">
              Filters
            </p>
            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md">
              Reset Filter
            </button>
          </div>
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
              <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                <option value>Category</option>
                <option value="men's clothing">men's clothing</option>
                <option value="electronics">electronics</option>
                <option value="women's clothing">women's clothing</option>
                <option value="electronics">electronics</option>
              </select>
              <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                <option value>Rating</option>
                <option value="fully-furnished">5 Stars</option>
                <option value="partially-furnished">4 Stars</option>
                <option value="not-furnished">Less Than 4</option>
              </select>
              <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                <option value>Any Price</option>
                <option value={1000}>RM 1000</option>
                <option value={2000}>RM 2000</option>
                <option value={3000}>RM 3000</option>
                <option value={4000}>RM 4000</option>
              </select>
              <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                <option value>From</option>
                <option value={200}>Egypt</option>
                <option value={400}>Usa</option>
                <option value={600}>France</option>
              </select>
              <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                <option value>Discount</option>
                <option value={1}>pp</option>
                <option value={2}>pp</option>
                <option value={3}>pp</option>
                <option value={4}>pp</option>
                <option value={5}>pp</option>
              </select>
              <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                <option value>Count</option>
                <option value={1}>1 space</option>
                <option value={2}>2 space</option>
                <option value={3}>3 space</option>
              </select>
            </div>
          </div>
          </div>
        </div>
        {/*search and filters end */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
            {
              products.map((product)=>(
                <>
                  <div className="relative m-auto m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                    <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                      <img className="object-contain m-auto" src={product.image} alt="product image" />
                      <span className="absolute top-0 left-0 m-2 rounded-full bg-[#5D41DE] px-2 text-center text-sm font-medium text-white">50% OFF</span>
                    </a>
                    <div className="mt-4 px-5 pb-5">
                      <a href="#" className="text-decoration-none">
                        <h5 className="text-xl tracking-tight text-slate-900">{product.title.slice(0,20)}</h5>
                      </a>
                      <div className="mt-2 mb-5 flex items-center justify-between">
                        <p>
                          <span className="text-3xl font-bold text-slate-900 me-3">${product.price.toFixed(0)}</span>
                  
                        </p>
                        <div className="flex items-center">
                          <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
                        </div>
                      </div>
                      <a href="#" onClick={()=>{
                        dispatch(addtoCart(product))
                        SweetAlert2.fire({
                          position: 'top-end',
                          icon: 'success',
                          title: 'Product has been Added',
                          showConfirmButton: false,
                          timer: 1000
                        })
                      }} className="text-decoration-none flex items-center justify-center rounded-md bg-[#5D41DE] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Add to cart</a>
                    </div>
                  </div>
                </>
              ))
            }
        </div>
        </>
    )
}

export default Products;