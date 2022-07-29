const initState = {
  showModal: false,
  displayContact: {},
  displayImage : "",
};
const reducer = (state = initState, action: any) => {
  switch (action.type) {
    case "SHOW_MODAL":
      return {
        ...state,
        showModal: action.payload,
      };
    case "DISPLAY_CONTACT":
      return {
        ...state,
        displayContact: action.payload,
      };
      case "DISPLAY_IMAGE":
        return {
          ...state,
          displayImage: action.payload,
        };
    default:
      return state;
  }
};

export {
    initState,
    reducer
}