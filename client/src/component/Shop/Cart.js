import React, {useEffect, useState} from 'react'
import { Container, Grid, Typography, Button, Paper} from '@material-ui/core'
import CartItem from './CartItem'
import { useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {removeCartItemById, deleteAllCartItems, getUserCartItems} from '../../action/User'
import Divider from '@mui/material/Divider';
import CssBaseline from '@mui/material/CssBaseline';

const Cart = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('profile'))
    const [total,setTotal] = useState(0);
    const [shoppingCart,setShoppingCart] = useState([])
    useEffect(()=>{
        const cart = getUserCartItems(user.result._id)
        // setShoppingCart(cart)
    },[])

    useEffect(() =>{
        var newTotal = 0;
        for(let i = 0; i < shoppingCart.length; i++) {
            newTotal += parseInt(shoppingCart[i].price);
        }
        setTotal(newTotal);
    },[shoppingCart])

    const handleCheckout=() => {
        navigate('/Checkout',{state:{shoppingCart, total}})
    }

    const handleRemoveFromCart = (id) => {
        const newcart = shoppingCart.filter(cartItem => cartItem._id !== id)
        setShoppingCart(newcart)
        removeCartItemById({id: id})
    }

    const handleDelete = () =>{
        setShoppingCart([])
        deleteAllCartItems({id:user.result._id})
    }

    console.log(shoppingCart)
    return (
        <Container className="container">
            <Grid container>
                <Grid xs={12} md={7} align="center" className="cart">
                    <Typography variant="h4">Shopping Cart</Typography>
                    <Grid container>
                        {shoppingCart.map((product)=>{
                            return (<Grid item key={product._id} sm={12} md={12}>
                                <CartItem product={product}/>
                            </Grid>)
                        })} 
                        
                    </Grid>
                </Grid>
                <Grid xs={12} md={4} className="summary">
                <CssBaseline />
                    <div className="flex justify-center">
                        <span className="font-bold text-3xl mt-2 mb-4 px-4">Summary</span>
                    </div>
                    <Divider />
                    <div className="flex flex-col">
                    <div className="flex justify-between text-lg font-normal m-2 px-4 py-2">
                        <p>Subtotal </p>
                        <p>₹ {total}</p>
                    </div>
                    <div className="flex justify-between text-lg font-normal m-2 px-4 py-2">
                        <p>Numbers of Items </p>
                        <p>{shoppingCart.length}</p>
                    </div>
                    <div className="flex justify-between text-lg font-normal m-2 px-4 py-2">
                        <p>GST  </p>
                        <p>₹ 0</p>
                    </div>
                    <div className="flex justify-between text-lg font-normal m-2 px-4 py-2">
                        <p>Total </p>
                        <p>₹ {total}</p>
                    </div>
                    </div>

                    <Divider />
                    <div className="mt-4">
                    <Button  variant="outlined" spacing={3} fullWidth color="primary" onClick={handleCheckout}>Proceed to Buy</Button>
                    </div>
                    <div className="mt-4">
                    <Button  variant='outlined' fullWidth color="secondary" onClick={handleDelete}>Delete Cart</Button>
                    </div>

                </Grid>
            </Grid>
        </Container>
    )
}

export default Cart