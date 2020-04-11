import React, { useState } from "react";
import { connect } from "react-redux";
import { createDiapersChange } from "../../store/actions/diapersChangeActions";
import DateFnsUtils from "@date-io/date-fns";

import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";

import Button from "@material-ui/core/Button";

import { DateTimePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

const CreateDiaperChange = ({
  open,
  handleClose,
  createDiapersChange,  
}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [pipi, setPipi] = useState(true);
  const [pupi, setPupi] = useState(true);
  const [comment, setComment] = useState("");

  const handleDateChange = (e) => {
    setSelectedDate(e);
  };

  const handleRegister = (handleClose) => {
    createDiapersChange({
      pipi,
      pupi,
      date: selectedDate,
      comment,
    });
    handleClose();
  };

  const handleEnter = () => { 
    setSelectedDate(new Date());
    setPupi(true);
    setPipi(true);
    setComment('');
  }
  

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      onEnter={handleEnter}
    >
      <DialogTitle id="form-dialog-title">
        Registrar cambio de Pañal
      </DialogTitle>
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
            <FormControlLabel
              control={
                <Checkbox
                  checked={pipi}
                  onChange={(e) => {
                    setPipi(e.target.checked);
                  }}
                  name="pipi"
                />
              }
              label="💛"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={pupi}
                  onChange={(e) => {
                    setPupi(e.target.checked);
                  }}
                  name="pupi"
                />
              }
              label="💩"
            />
            <TextField
              id="standard-multiline-flexible"
              label="Comentario"
              multiline
              rowsMax="4"
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button
          onClick={(event) => {
            handleRegister(handleClose);
            return;
          }}
          color="primary"
        >
          Registrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const mapDispatchToProps = {
  createDiapersChange: (diapersChange) => createDiapersChange(diapersChange),
};

export default connect(null, mapDispatchToProps)(CreateDiaperChange);
