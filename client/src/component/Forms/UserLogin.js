import React, {useState, useEffect} from 'react'
import useStyles from "../MerchantComponent/MerchantForms/styles"
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@mui/material';

import LoginForm from './LoginForm'
import UserAddress from './UserAddress'

const steps = ['Address',  'Login'];

const UserLogin = () => {
    const [isSignin, setIsSignin] = useState(false)
    const [selectedCSC, setSelectedCSC] = useState({country:'', state:'', city:'', streetAddress:''})
    const classes = useStyles()
    const [activeStep, setActiveStep] = useState(0);
        const Form = ()=> {
            switch (activeStep) {
                case 0:
                    return <UserAddress selectedCSC={selectedCSC} setSelectedCSC={setSelectedCSC}  />
                case 1:
                    return <LoginForm selectedCSC={selectedCSC} isSignin={isSignin} />
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
            <Typography variant="h4" align="center">Sign {isSignin ? "In" : "Up"}p</Typography>
            {!isSignin ? <>
            <Stepper activeStep={activeStep} className={classes.stepper}>
                {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
                ))}
            </Stepper>
            <Form />
            {(activeStep>0) && <button className="bg-blue-500 py-2 px-3 m-3 hover:bg-blue-700 rounded" onClick={handlePrevPage}>Back</button>}
            {(activeStep<1) && <button className="bg-blue-500 py-2 px-3 m-3 hover:bg-blue-700 rounded" onClick={handleNextPage}>Next</button>}
            </> : <LoginForm selectedCSC={selectedCSC} isSignin={isSignin} />}
             <div>
                {!isSignin ? <span>Already have an account? <a href="#" onClick={()=>setIsSignin(!isSignin)}>Sign In</a> </span> 
                :<span>Don't have an account? <a href="#" onClick={()=>setIsSignin(!isSignin)}>Sign Up</a> </span> }
             </div>
            </Paper>
        </main>
        </>
    )
}

export default UserLogin
