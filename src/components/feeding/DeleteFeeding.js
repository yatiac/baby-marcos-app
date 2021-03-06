import React from "react";
import { connect } from "react-redux";
import { deleteFeeding1 } from "../../store/actions/feedingActions";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";

const DeleteFeeding = ({ open, id, handleClose, deleteFeeding }) => {
  const handleCancel = () => {
    handleClose();
  };
  const handleConfirm = () => {    
    deleteFeeding(id);
    handleClose();
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      disableBackdropClick={true}
    >
      <DialogTitle id="alert-dialog-title">
        {"¿Seguro que quieres borrar este registro?"}
      </DialogTitle>
      <DialogActions>
        <Button onClick={handleCancel} color="primary">
          No
        </Button>
        <Button onClick={handleConfirm} color="primary" autoFocus>
          Si
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const mapDispatchToProps = {
  deleteFeeding: (id) => deleteFeeding1(id),
};
export default connect(null, mapDispatchToProps)(DeleteFeeding);
