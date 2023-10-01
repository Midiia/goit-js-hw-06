const form = document.querySelector(".login-form");

form.addEventListener("submit", handlerSubmit);

function handlerSubmit(evt) {
  evt.preventDefault();

  const {
    elements: { email, password }
  } = evt.currentTarget;

  const data = {
        email: email.value,
        password: password.value
    }

    const formData = new FormData(evt.currentTarget);
    const datas = {};

    formData.forEach((value, key) => {
            // console.log(key);
            // console.log(typeof key);
            datas[key] = value;
            datas.key = value
          });
        

    if (email.value === "" || password.value === "") {
            return alert("Please fill in all the fields!");
        } 

      console.log(data);
        
      console.log(formData);
    
    evt.currentTarget.reset();

}