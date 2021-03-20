const validate = (newElement, formdata) => {
  let error = [true, ""];
  if (newElement.validation.email) {
    const valid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(newElement.value);
    const message = valid ? "" : "Must be an email";
    error = valid ? error : [valid, message];
  }
  if (newElement.validation.required) {
    const valid = newElement.value.trim() !== "";
    const message = valid ? "" : "This field is required";
    error = valid ? error : [valid, message];
  }
  if(newElement.validation.confirmpassword){
      const valid = newElement.value === formdata[newElement.validation.ref].value
      const message = valid ? "" : "Password Do no match";
      error = valid ? error : [valid, message];
  }
  return error;
};

export const update = (element, formdata) => {
  let newFormdata = { ...formdata };
  let newElement = { ...newFormdata[element.id] };
  newElement.value = element.e.target.value;

  if (element.blur) {
    let validata = validate(newElement, formdata);
    newElement.valid = validata[0];
    newElement.validationMessage = validata[1];
  }
  newElement.touched = element.blur;
  newFormdata[element.id] = newElement;
  return newFormdata;
};




export const generate = (formdata) => {
  let datatoSubmit = {};
  for (let key in formdata) {
      if(key !== "confirmpassword"){
        datatoSubmit[key] = formdata[key].value;
      }
  }
  return datatoSubmit;
};


export const isFormValid = (formdata)=>{

    let formvalid = true
    console.log(formdata)
    for(let key in formdata){
        formvalid = formdata[key].valid  && formvalid
    }
    return formvalid
}
