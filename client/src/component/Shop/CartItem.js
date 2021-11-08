import React from 'react'
import {Button, Grid} from '@material-ui/core'
import RemoverIcon from '@material-ui/icons/RemoveCircleOutlineOutlined'
import {useDispatch} from 'react-redux';

const CartItem = ({product, handleRemoveFromCart}) => {
    const dispatch = useDispatch();    
    const user = JSON.parse(localStorage.getItem('profile'))

    return (
        <Grid >

            <div className="md:flex mb-2 mt-3">
                <div className="md:flex-shrink-0">
                    <img className="h-48 w-full object-cover md:h-full md:w-48" src={product.image[0]} alt="Man looking at item at a store" />
                </div>
                <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{product.name}</div>
                <p href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Price : {product.price}</p>
                <p className="mt-2 text-gray-500">{product.description}</p>
                </div>
            </div>

                <Button variant="outlined" color="secondary" onClick={()=>handleRemoveFromCart(product._id)}>
                    <RemoverIcon />Remove from cart
                </Button>
        </Grid>
    )
}

export default CartItem