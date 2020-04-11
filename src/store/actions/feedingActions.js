export const createFeeding1 = (feeding) => {
  return (dispatch, getState, { getFirestore }) => {
    const fireStore = getFirestore();
    fireStore
      .collection("feedings")
      .add({
        ...feeding,
      })
      .then(() => {
        dispatch({
          type: "CREATE_FEEDING",
          feeding,
        });
      })
      .catch((error) => {
        dispatch({
          type: "CREATE_FEEDING_ERROR",
          error,
        });
      });
  };
};

export const deleteFeeding1 = (id) => {
    return (dispatch, getState, { getFirestore }) => {
      const fireStore = getFirestore();    
      fireStore
        .collection("feedings")
        .doc(id)
        .delete()
        .then((_) => {
          dispatch({
            type: "DELETE_FEEDING",
          });
        })
        .catch((error) => {
          dispatch({
            type: "DELETE_FEEDING_ERROR",
            error,
          });
        });
    };
  };
  