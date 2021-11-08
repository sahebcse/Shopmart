import React, { useState, useEffect } from "react";
import useStyles from "./styles";
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

import Login from "./Login";
import BankDetails from "./BankDetails";
import StoreDetails from "./StoreDetails";

const steps = ["Store Details", "Bank Details", "Login"];

const SignupForm = () => {
  const [isSignin, setIsSignin] = useState(false);
  const [selectedCSC, setSelectedCSC] = useState({
    country: "",
    state: "",
    city: "",
    streetAdress: "",
    storeName: "",
  });
  const [bankDetails, setBankDetails] = useState({
    bankName: "",
    holderName: "",
    accountNumber: "",
    ifscCode: "",
  });
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const Form = () => {
    switch (activeStep) {
      case 0:
        return (
          <StoreDetails
            selectedCSC={selectedCSC}
            setSelectedCSC={setSelectedCSC}
          />
        );
      case 1:
        return (
          <BankDetails
            bankDetails={bankDetails}
            setBankDetails={setBankDetails}
          />
        );
      case 2:
        return (
          <Login
            selectedCSC={selectedCSC}
            bankDetails={bankDetails}
            isSignin={isSignin}
          />
        );
    }
  };

  const handlePrevPage = () => {
    setActiveStep(activeStep - 1);
  };

  const handleNextPage = () => {
    setActiveStep(activeStep + 1);
  };

  return (
    <>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Sign {isSignin ? "In" : "Up"}p
          </Typography>
          {!isSignin ? (
            <>
              <Stepper activeStep={activeStep} className={classes.stepper}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <Form />
              {activeStep > 0 && (
                <button
                  className="bg-blue-500 py-2 px-3 m-3 hover:bg-blue-700 rounded"
                  onClick={handlePrevPage}
                >
                  Back
                </button>
              )}
              {activeStep < steps.length && (
                <button
                  className="bg-blue-500 py-2 px-3 m-3 hover:bg-blue-700 rounded"
                  onClick={handleNextPage}
                >
                  Next
                </button>
              )}
            </>
          ) : (
            <Login
              selectedCSC={selectedCSC}
              bankDetails={bankDetails}
              isSignin={isSignin}
            />
          )}
          <div>
            {!isSignin ? (
              <span>
                Already have an account?{" "}
                <a href="#" onClick={() => setIsSignin(!isSignin)}>
                  Sign In
                </a>{" "}
              </span>
            ) : (
              <span>
                Don't have an account?{" "}
                <a href="#" onClick={() => setIsSignin(!isSignin)}>
                  Sign Up
                </a>{" "}
              </span>
            )}
          </div>
        </Paper>
      </main>
    </>
  );
};

export default SignupForm;
