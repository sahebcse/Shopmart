import React,{useState, useEffect} from 'react'
import {Container, Grid, Typography, Box, Button, TextField} from '@material-ui/core'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import {useDispatch} from 'react-redux'
import ShopNowIcon from '@material-ui/icons/ShopTwoRounded'
// import {getClientSecretKey, productOrdered, postUserAddress} from '../../action/user/user'
import {useNavigate} from 'react-router-dom'
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));

const Payment = () => {
    const classes=useStyles()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // const stripe = useStripe()
    // const elements = useElements() 

    const currUser = JSON.parse(localStorage.getItem('profile'))

    // const [error,setError] = useState(null, stripe)
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("")
    const [totalPrice, setTotalPrice] = useState(0);
    const [clientSecret, setClientSecret] = useState(null)


    // useEffect(() =>{
    //     const getClientSecret = async ()=>{
    //         const data = await getClientSecretKey({totalPrice : totalPrice*100});
    //         setClientSecret(data.clientSecret);
    //     }

    //     if(totalPrice>1){
    //         getClientSecret()
    //     }else{
    //         setError('Go and shop first faggot....')
    //     }
    // },[shoppingCart,totalPrice])

    // const handleSubmit = async (e) =>{
    //     e.preventDefault()
    //     console.log('submitting.....')
    //     const payload = await stripe.confirmCardPayment(clientSecret,{
    //         payment_method : {
    //             card: elements.getElement(CardElement)
    //         }
    //     }).then(({paymentIntent})=>{
    //         setSucceeded(true)
    //         setError(null)
    //         setProcessing(false);
    //         const data = {userEmail :currUser?.result.email}
    //         dispatch(productOrdered(data))
    //         navigate.replace('/Orders')
    //     })

    // }
   
    // const handleChange = (e)=>{
    //     setDisabled(e.empty)
    //     setError(e.error ? e.error.message : "")
    // }


    return (
        <Container spacing={3}>
            payment
            {/* <Box borderBottom={1}>
                horizontal scroll list of prducts 
            </Box>
            <Box borderBottom={1}>
                <Grid container className="m-4">
                    <Typography variant="h4">Payment Gateway</Typography>
                    <Grid sm={12} md={6} align="center" className="mt-4 ml-10">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <Typography variant='h6'>Order Total : ₹ {totalPrice}</Typography>
                            <Button type="submit" disabled={processing || disabled || succeeded}>
                                <ShopNowIcon /><span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </Button>
                            {error && <div className="text-red-600">{error}</div> }
                        </form>
                    </Grid>
                </Grid>
            </Box> */}
        </Container>
    )
}

export default Payment