export const createDiapersChange = (diaperChange) => {
  return (dispatch, getState, { getFirestore }) => {
    const fireStore = getFirestore();
    fireStore
      .collection("diapersChange")
      .add({
        ...diaperChange,
      })
      .then((_) => {
        dispatch({
          type: "CREATE_DIAPERSCHANGE",
          diaperChange,
        });
      })
      .catch((error) => {
        dispatch({
          type: "CREATE_DIAPERSCHANGE_ERROR",
          error,
        });
      });
  };
};

export const deleteDiapersChange = (id) => {
  return (dispatch, getState, { getFirestore }) => {
    const fireStore = getFirestore();    
    fireStore
      .collection("diapersChange")
      .doc(id)
      .delete()
      .then((_) => {
        dispatch({
          type: "DELETE_DIAPERSCHANGE",
        });
      })
      .catch((error) => {
        dispatch({
          type: "DELETE_DIAPERSCHANGE_ERROR",
          error,
        });
      });
  };
};
