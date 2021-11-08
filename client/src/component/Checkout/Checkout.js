import React, { useState, useEffect } from "react";
import useStyles from "../MerchantComponent/MerchantForms/styles";
import {
  CssBaseline,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from "@mui/material";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";

import CheckoutAddress from "./CheckoutAddress";
import Payment from "./Payment";

const steps = ["Select Address", "Payment Gateway"];

const Checkout = () => {
  const location = useLocation();
  const stripePromise = loadStripe(
    "pk_test_51J8GAsSH4Sh8XwNi3Gw7LEGc44TQTY63b8VdJP4D3fHL30bpHIJKlhL7BKcxex80KPwDZg08Adywy5WTeKLZbngP00FQwvXLWv"
  );
  const user = JSON.parse(localStorage.getItem("profile"));
  const products = location.state?.shoppingCart;
  console.log("prodi", products);
  const total = location.state?.total;
  const isCart = location.state?.isCart;
  console.log("prod", products);
  const [selectedCSC, setSelectedCSC] = useState({
    country: user?.result?.address?.country,
    state: user?.result?.address?.state,
    city: user?.result?.address?.city,
    streetAdress: user?.result?.address?.streetAddress,
  });
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const Form = () => {
    switch (activeStep) {
      case 0:
        return (
          <CheckoutAddress
            setSelectedCSC={setSelectedCSC}
            selectedCSC={selectedCSC}
          />
        );
      case 1:
        return (
          <Payment
            selectedCSC={selectedCSC}
            shoppingCart={products}
            totalPrice={total}
            isCart={isCart}
          />
        );
    }
  };

  const handlePrevPage = () => {
    setActiveStep(0);
  };

  const handleNextPage = () => {
    setActiveStep(1);
  };

  return (
    <>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Form />
          <div className="flex flex-wrap justify-center">
            {activeStep > 0 && (
              <button
                className="bg-blue-500 py-2 px-3 m-3 hover:bg-blue-700 rounded"
                onClick={handlePrevPage}
              >
                Back
              </button>
            )}
            {activeStep < 1 && (
              <button
                className="bg-blue-500 py-2 px-3 m-3 hover:bg-blue-700 rounded"
                onClick={handleNextPage}
              >
                Next
              </button>
            )}
          </div>
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
