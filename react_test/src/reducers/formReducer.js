const initialState = {
  formData: {
    nom: "",
    email: "",
    tel: "",
    message: "",
  },
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RESET_FORM":
      return initialState;
    case "UPDATE_FORM_DATA":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.field]: action.value,
        },
      };
    default:
      return state;
  }
};

export default formReducer;
