export const updateFormData = (field, value) => ({
  type: "UPDATE_FORM_DATA",
  field,
  value,
});

export const resetForm = () => ({
  type: "RESET_FORM",
});
