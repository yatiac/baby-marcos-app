import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {createFeeding1 } from "../../store/actions/feedingActions"

import DateFnsUtils from "@date-io/date-fns";
import bottle from "../../images/bottle.png";
import breast from "../../images/breast.png";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";

import Button from "@material-ui/core/Button";

import { DateTimePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";

const CreateFeeding = ({ open, handleClose, createFeeding }) => {
  const [type, setType] = useState("breast");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [amount, setAmount] = useState('');
  const [unit, setUnit] = useState("minutos");

  const handleDateChange = (e) => {
    setSelectedDate(e);
  };

  const handleChange = (e) => {
    setType(e.target.value);
  };

  const handleAmountChange = (e) => {
    const newAmount = e.target.value;
    // const regexp = /^[0-9\b]+$/;    
    // if (newAmount === "" || regexp.test(newAmount)) {
      setAmount(newAmount);
    // }
  };

  const handleEnter = () => { 
    setSelectedDate(new Date());
    setAmount('');
    setUnit('minutos');
    setType('breast');
  }

   const handleRegister = () => {
    createFeeding({
        type,
        amount,
        date: selectedDate
    })
    handleClose();
   }

  useEffect(() => {
    type === "breast" ? setUnit("minutos") : setUnit("onza(s)");
  }, [type]);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        onEnter={handleEnter}
      >
        <DialogTitle id="form-dialog-title">Registrar Alimentación</DialogTitle>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DateTimePicker
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={12}>
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={type}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="breast"
                  control={<Radio />}
                  label={<img src={breast} alt="" width="30px" />}
                />
                <FormControlLabel
                  value="bottle"
                  control={<Radio />}
                  label={<img src={bottle} alt="" width="30px" />}
                />
              </RadioGroup>
              <Input
                id="standard-adornment-weight"
                value={amount}
                onChange={handleAmountChange}
                aria-describedby="standard-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
                required={true}
              />
              <FormHelperText id="standard-weight-helper-text">
                {unit}
              </FormHelperText>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleRegister} color="primary">
            Registrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapDispatchToProps = {
    createFeeding: (feeding) => createFeeding1(feeding),
  };

export default connect(null,mapDispatchToProps)(CreateFeeding);
