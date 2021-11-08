import React from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
const BankDetails = ({ bankDetails, setBankDetails }) => {
  return (
    <div>
      <FormControl
        sx={{ px: 1, mt: 3, minWidth: 120 }}
        className="m-1"
        fullWidth
      >
        <TextField
          label="Bank Name"
          variant="outlined"
          fullWidth
          onChange={(e) => (bankDetails.bankName = e.target.value)}
        />
      </FormControl>
      <FormControl
        sx={{ px: 1, mt: 3, minWidth: 120 }}
        className="m-1"
        fullWidth
      >
        <TextField
          label="Holders Name"
          variant="outlined"
          fullWidth
          onChange={(e) => (bankDetails.holderName = e.target.value)}
        />
      </FormControl>
      <FormControl
        sx={{ px: 1, mt: 3, minWidth: 120 }}
        className="m-1"
        fullWidth
      >
        <TextField
          label="Account Number"
          variant="outlined"
          fullWidth
          onChange={(e) => (bankDetails.accountNumber = e.target.value)}
        />
      </FormControl>
      <FormControl
        sx={{ px: 1, mt: 3, minWidth: 120 }}
        className="m-1"
        fullWidth
      >
        <TextField
          label="IFSC CODE"
          variant="outlined"
          fullWidth
          onChange={(e) => (bankDetails.ifscCode = e.target.value)}
        />
      </FormControl>
    </div>
  );
};

export default BankDetails;
