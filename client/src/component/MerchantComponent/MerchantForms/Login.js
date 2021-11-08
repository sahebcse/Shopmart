import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import {
  Grid,
  Typography,
  Container,
  Button,
  Modal,
  makeStyles,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { merchantSignup, merchantLogin } from "../../../action/Auth";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      width: "30%",
      height: "300px",
      left: "37.5%",
      top: "25%",
      fontSize: "1.25vw",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "32px",
      width: "100%",
      height: "100%",
    },

    textAlign: "center",
  },
  paper_mobile: {},
  baseContainer: {},
  modalText: {
    marginBottom: "10%",
  },
}));

const Login = ({ bankDetails, selectedCSC, isSignin }) => {
  console.log(bankDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };

  const googleSuccess = async (res) => {
    if (!isSignin) {
      const result = res?.profileObj;
      const token = res?.tokenId;
      console.log("google result", result);
      dispatch(
        merchantSignup({ result, token, bankDetails, selectedCSC }, navigate)
      );
    } else {
      console.log("sign in");
      const result = res?.profileObj;
      const token = res?.tokenId;
      dispatch(merchantLogin({ result, token }, navigate));
    }
  };

  const googleFailure = async () => {
    navigate("/");
  };

  return (
    <Container className={classes.baseContainer}>
      {!isSignin && (
        <div>
          <div>
            <h1>Address</h1>
            <h3>{selectedCSC.streetAddress}</h3>
            <h3>
              {selectedCSC.city} {selectedCSC.state}
            </h3>
            <h3>{selectedCSC.country}</h3>
          </div>
          <div>
            <h1>Bank Details</h1>
            <h3>Name : {bankDetails.holderName}</h3>
            <h3>Bank : {bankDetails.bankName}</h3>
            <h3>Account No. {bankDetails.accountNumber}</h3>
          </div>
        </div>
      )}
      <div className="flex justify-center m-3 px-2 py-4">
        <GoogleLogin
          // ---> CREATE YOUR OWN GOOGLE CLIENT FROM "console.developers.google.com" AND PASTE HERE (DELETE IT BEFORE PUSHING) <---
          clientId="845509955979-rd59hfvhufjcfnqfjnidlvm1mgqv1jkg.apps.googleusercontent.com"
          onSuccess={googleSuccess}
          onFailure={googleFailure}
          cookiePolicy="single_host_origin"
        />
      </div>
    </Container>
  );
};

export default Login;
