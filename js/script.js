const datos = {
    day: '',
    months: '',
    year: ''
}

  // Inputs
const dayInp = document.querySelector('#dia__form');
const monthsInp = document.querySelector('#mes__form');
const yearInp = document.querySelector('#year__form');

  // Outputs
const dayOtp = document.querySelector('#DD');
const monthsOtp = document.querySelector('#MM');
const yearOtp = document.querySelector('#YY');

  // Form
const form = document.querySelector('.form');

  // Event listener for form submission
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     });

    const date = new Date();
    let day = date.getDate();
    let month = 1 + date.getMonth();
    let year = date.getFullYear();
    
    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    function validate() {
      const inputs = document.querySelectorAll("input");
      let validator = true;
      
      inputs.forEach((i) => {

        const parent = i.parentElement;

        if (!i.value) {
          i.style.borderColor = "red";
          parent.querySelector("small").innerText = "Este campo es requerido.";
          validator = false;
        } else if (monthsInp.value > 12) {
            monthsInp.style.borderColor = "red";
            monthsInp.parentElement.querySelector("small").innerText = "Debe ser un mes válido.";
            validator = false;
        } else if (dayInp.value > 31) {
            dayInp.style.borderColor = "red";
            dayInp.parentElement.querySelector("small").innerText =
              "debe ser un dia válido..";
            validator = false;
        } else {
          i.style.borderColor = "black";
          parent.querySelector("small").innerText = "";
          validator = true;
        }
      });
      return validator;
    }


    function handleSubmit(e) {
      e.preventDefault();
      if (validate()) {
        if (dayInp.value > day) {
          day = day + months[month - 1];
          month = month - 1;
        }
        if (monthsInp.value > month) {
          month = month + 12;
          year = year - 1;
        }
    
        const d = day - dayInp.value;
        const m = month - monthsInp.value;
        const y = year - yearInp.value;
    
        dayOtp.innerHTML = d;
        monthsOtp.innerHTML = m;
        yearOtp.innerHTML = y;
      }
    }
    
    form.addEventListener("submit", handleSubmit);   
