const initState = {};

const feedingReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_FEEDING":
      console.log("Created!!");
      return state;
    case "CREATE_FEEDING_ERROR":
      console.log("Error Creating", action.error);
      return state;    
      case "DELETE_FEEDING":
        console.log("Deleted");
        return state;
      case "DELETE_FEEDING_ERROR":
        console.log("Error Deleting", action.error);
        return state;
    default:
      return state;
  }
};

export default feedingReducer;
