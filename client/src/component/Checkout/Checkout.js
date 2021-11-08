import React, {useState, useEffect} from 'react'
import useStyles from '../MerchantComponent/MerchantForms/styles'
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@mui/material';
import { useLocation } from 'react-router-dom';

import CheckoutAddress from './CheckoutAddress'
import Payment from './Payment'

const steps = ['Select Address', 'Payment Gateway'];

const Checkout = () => {
    const location = useLocation()
    const products = location.state?.shoppingCart
    const total = location.state?.total
    console.log("prod",products)
    const [selectedCSC, setSelectedCSC] = useState({country:'', state:'', city:'', streetAdress:'', storeName:''})
    const classes = useStyles()
    const [activeStep, setActiveStep] = useState(0);
        const Form = ()=> {
            switch (activeStep) {
                case 0:
                    return <CheckoutAddress selectedCSC={selectedCSC}   />
                case 1:
                    return <Payment />
            }
        }

    const handlePrevPage = () => {
        setActiveStep(0);
    }

    const handleNextPage = () => {
        setActiveStep(1);
    }

    return (
        <>
        <CssBaseline />
        <main className={classes.layout}>
            <Paper className={classes.paper}>
            <Typography variant="h4" align="center">Checkout</Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
                {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
                ))}
            </Stepper>
            <Form />
            <div className="flex flex-wrap justify-center">

            {(activeStep>0) && <button className="bg-blue-500 py-2 px-3 m-3 hover:bg-blue-700 rounded" onClick={handlePrevPage}>Back</button>}
            {(activeStep<1) && <button className="bg-blue-500 py-2 px-3 m-3 hover:bg-blue-700 rounded" onClick={handleNextPage}>Next</button>}
            </div>

            </Paper>
        </main>
        </>
    )
}

export default Checkout
