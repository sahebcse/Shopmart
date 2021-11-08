import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { loadStore } from '../../action/Store'
import { getStore } from '../../api'
import ProductTile from '../Product/ProductTile'

export default function StoreView() {
    const dispatch=useDispatch()
    const {id}=useParams()
    const store=useSelector((state)=>state.Store)
    console.log(store)
    useEffect(async ()=>
    {
        dispatch(loadStore(id))
    },[])

    return (
        <div className="grid md:grid-cols-7">
            <div></div>
            <div className="col-span-5 grid md:grid-cols-3 lg:grid-cols-4 gap-3 shadow-xl margin-2">
                <div className="mt-5 mb-5 md:col-span-3 lg:col-span-4 border-b-2 p-5" >
                    <h1 className="text-4xl font-bold bg-white ">{store.storeData.storeName} <img className="inline h-8 w-8" src={store.storeData.logo} /></h1> 
                    <h2 className="text-lg font-semibold bg-white mt-3">{store.storeData.name} <span className="bg-blue-400 text-sm">Shopmart Certified Seller</span></h2>
                    <p>{store.productsList.length} products</p>
                </div>

                {
                    store.productsList.map((product)=>(
                        <ProductTile name={product.name} price={product.price} brand={product.brand} image={product.image} id={product._id}/>
                    ))
                }
               
            </div>
            <div></div>
        </div>
    )
}