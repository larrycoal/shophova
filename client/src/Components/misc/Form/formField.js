import React from "react";

const FormField = ({ formdata, change, id }) => {
  const showError = () => {
      let errorMessage = null
    if (formdata.validation && !formdata.valid){
        errorMessage=(
            <div className="error_label">
                {formdata.validationMessage}
                </div>
        )
    }
      return errorMessage
  };
  const showForm = () => {
    let formTemplate = null;
    switch (formdata.element) {
      case "input":
        formTemplate = (
          <>
            <input
              {...formdata.config}
              value={formdata.value}
              onChange={(e) => change({ e, id })}
              onBlur={(e) => change({ e, id, blur: true })}
            />
            {showError()}
          </>
        );
        break;
      case "password":
        formTemplate = (
          <>
            <input
              {...formdata.config}
              value={formdata.value}
              onChange={(e) => change(e)}
            />
          </>
        );
        break;
      default:
        formTemplate = null;
    }
    return formTemplate;
  };
  return showForm();
};

export default FormField;
