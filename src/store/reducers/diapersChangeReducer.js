const initState = {};

const diapersChangeReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_DIAPERSCHANGE":
      console.log("Created!!");
      return state;
    case "CREATE_DIAPERSCHANGE_ERROR":
      console.log("Error Creating", action.error);
      return state;
    case "DELETE_DIAPERSCHANGE":
      console.log("Deleted");
      return state;
    case "DELETE_DIAPERSCHANGE_ERROR":
      console.log("Error Deleting", action.error);
      return state;
    default:
      return state;
  }
};

export default diapersChangeReducer;
